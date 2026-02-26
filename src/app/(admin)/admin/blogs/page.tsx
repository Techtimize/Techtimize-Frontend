"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { blogApi, blogTypeApi } from "../lib/api";
import DetailModal, { DetailField } from "../components/DetailModal";
import RichTextEditor from "../components/RichTextEditor";
import "react-quill-new/dist/quill.snow.css";
import "../admin.css";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  createdBy: string;
  blogTypeId: any;
  imageUrl: string;
  description: string;
  isActive: boolean;
}

interface BlogType {
  _id: string;
  type: string;
}

export default function BlogsPage() {
  const [data, setData] = useState<Blog[]>([]);
  const [blogTypes, setBlogTypes] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Blog | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Blog | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<Blog | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [blogsRes, typesRes] = await Promise.all([
        blogApi.getAll(),
        blogTypeApi.getAll(),
      ]);
      setData(Array.isArray(blogsRes?.data ?? blogsRes) ? (blogsRes?.data ?? blogsRes) : []);
      setBlogTypes(Array.isArray(typesRes?.data ?? typesRes) ? (typesRes?.data ?? typesRes) : []);
    } catch { setData([]); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { if (success) { const t = setTimeout(() => setSuccess(""), 3000); return () => clearTimeout(t); } }, [success]);

  const getTypeName = (item: Blog) => {
    if (item.blogTypeId && typeof item.blogTypeId === "object" && item.blogTypeId.type) return item.blogTypeId.type;
    const bt = blogTypes.find((t) => t._id === item.blogTypeId);
    return bt?.type || "—";
  };

  const columns = [
    { key: "title", label: "Title", render: (item: Blog) => <span className="cell-truncate" style={{ display: "block" }}>{item.title}</span> },
    { key: "blogTypeId", label: "Type", render: (item: Blog) => getTypeName(item) },
    { key: "createdBy", label: "Author" },
    { key: "slug", label: "Slug", render: (item: Blog) => <span className="cell-truncate" style={{ display: "block" }}>{item.slug}</span> },
    { key: "isActive", label: "Status", align: "center" as const, render: (item: Blog) => (
      <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>
        {item.isActive ? "Active" : "Inactive"}
      </span>
    )},
  ];

  const emptyForm = () => ({ title: "", blogTypeId: "", createdBy: "", imageUrl: "", description: "", isActive: true });

  const openCreate = () => { setEditingItem(null); setFormData(emptyForm()); setError(""); setModalOpen(true); };
  const openEdit = (item: Blog) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      blogTypeId: typeof item.blogTypeId === "object" ? item.blogTypeId._id : item.blogTypeId,
      createdBy: item.createdBy,
      imageUrl: item.imageUrl,
      description: item.description,
      isActive: item.isActive,
    });
    setError("");
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true); setError("");
    try {
      if (editingItem) { await blogApi.update(editingItem._id, formData); setSuccess("Blog updated."); }
      else { await blogApi.create(formData); setSuccess("Blog created."); }
      setModalOpen(false); fetchData();
    } catch (err: any) { setError(err.message || "Error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try { await blogApi.delete(deleteTarget._id); setSuccess("Blog deleted."); setDeleteTarget(null); fetchData(); }
    catch (err: any) { setError(err.message); setDeleteTarget(null); }
    finally { setDeleting(false); }
  };

  const update = (key: string, val: any) => setFormData((p) => ({ ...p, [key]: val }));

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}

      <div className="admin-page-header">
        <h2>Blogs</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Blog</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(item) => setViewItem(item)} onEdit={openEdit} onDelete={(item) => setDeleteTarget(item)} />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Blog Details"
        item={viewItem}
        fields={[
          { key: "title", label: "Title" },
          { key: "blogTypeId", label: "Blog Type", render: (val: any) => typeof val === "object" ? val?.type : blogTypes.find((t) => t._id === val)?.type || "—" },
          { key: "createdBy", label: "Author" },
          { key: "slug", label: "Slug" },
          { key: "imageUrl", label: "Image" },
          { key: "description", label: "Description", render: (val: any) => (
            <div
              className="ql-editor rich-text-preview"
              dangerouslySetInnerHTML={{ __html: val || "<em>No content</em>" }}
              style={{ padding: 0, minHeight: "auto" }}
            />
          )},
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? "Edit Blog" : "Create Blog"}
        footer={<>
          <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
          <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
        </>}
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}
        <div className="admin-form-group"><label>Title</label><input value={formData.title} onChange={(e) => update("title", e.target.value)} placeholder="Blog title" required /></div>
        <div className="admin-form-row">
          <div className="admin-form-group"><label>Blog Type</label>
            <select value={formData.blogTypeId} onChange={(e) => update("blogTypeId", e.target.value)}>
              <option value="">Select type</option>
              {blogTypes.map((t) => <option key={t._id} value={t._id}>{t.type}</option>)}
            </select>
          </div>
          <div className="admin-form-group"><label>Author</label><input value={formData.createdBy} onChange={(e) => update("createdBy", e.target.value)} placeholder="Author name" /></div>
        </div>
        <div className="admin-form-group"><label>Image URL</label><input value={formData.imageUrl} onChange={(e) => update("imageUrl", e.target.value)} placeholder="https://..." /></div>
        <div className="admin-form-group"><label>Description</label><RichTextEditor value={formData.description || ""} onChange={(val) => update("description", val)} placeholder="Write your blog content here..." /></div>
        <div className="admin-form-group">
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
            <input type="checkbox" checked={formData.isActive} onChange={(e) => update("isActive", e.target.checked)} style={{ width: "auto" }} />
            Active
          </label>
        </div>
      </AdminModal>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} loading={deleting} title="Delete Blog?" message="This will soft-delete the blog post." />
    </DashboardLayout>
  );
}
