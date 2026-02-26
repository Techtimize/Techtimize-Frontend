"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { projectsApi, stacksApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface Project {
  _id: string;
  name: string;
  slug: string;
  stackId: any[];
  tags: string[];
  about: string;
  description: string;
  posterImage: string;
  logoImage: string;
  previewImage: string;
  isActive: boolean;
  isSlider: boolean;
  backgroundColor: string;
}

interface Stack { _id: string; name: string; }

export default function ProjectsPage() {
  const [data, setData] = useState<Project[]>([]);
  const [stacks, setStacks] = useState<Stack[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [viewItem, setViewItem] = useState<Project | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [pRes, sRes] = await Promise.all([projectsApi.getAll(), stacksApi.getAll()]);
      setData(Array.isArray(pRes?.data ?? pRes) ? (pRes?.data ?? pRes) : []);
      setStacks(Array.isArray(sRes?.data ?? sRes) ? (sRes?.data ?? sRes) : []);
    } catch { setData([]); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { if (success) { const t = setTimeout(() => setSuccess(""), 3000); return () => clearTimeout(t); } }, [success]);

  const columns = [
    { key: "posterImage", label: "Image", render: (item: Project) =>
      item.posterImage ? <img src={item.posterImage} alt="" className="cell-img" /> : "—" },
    { key: "name", label: "Name" },
    { key: "slug", label: "Slug", render: (item: Project) => <span className="cell-truncate" style={{ display: "block" }}>{item.slug}</span> },
    { key: "tags", label: "Tags", render: (item: Project) =>
      <span className="cell-truncate" style={{ display: "block" }}>{(item.tags || []).join(", ")}</span> },
    { key: "isSlider", label: "Slider", render: (item: Project) =>
      <span className={`admin-badge ${item.isSlider ? "admin-badge-info" : "admin-badge-inactive"}`}>
        {item.isSlider ? "Yes" : "No"}
      </span> },
    { key: "isActive", label: "Status", align: "center" as const, render: (item: Project) =>
      <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>
        {item.isActive ? "Active" : "Inactive"}
      </span> },
  ];

  const emptyForm = () => ({ name: "", stackId: [] as string[], about: "", description: "", tags: [] as string[], isSlider: false, backgroundColor: "#FFFFFF", posterImage: "", logoImage: "", previewImage: "" });

  const openCreate = () => { setEditingItem(null); setFormData(emptyForm()); setTagInput(""); setError(""); setModalOpen(true); };
  const openEdit = (item: Project) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      stackId: (item.stackId || []).map((s: any) => typeof s === "object" ? s._id : s),
      about: item.about,
      description: item.description,
      tags: item.tags || [],
      isSlider: item.isSlider,
      backgroundColor: item.backgroundColor || "#FFFFFF",
      posterImage: item.posterImage || "",
      logoImage: item.logoImage || "",
      previewImage: item.previewImage || "",
    });
    setTagInput(""); setError(""); setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true); setError("");
    try {
      if (editingItem) { await projectsApi.update(editingItem._id, formData); setSuccess("Project updated."); }
      else { await projectsApi.create(formData); setSuccess("Project created."); }
      setModalOpen(false); fetchData();
    } catch (err: any) { setError(err.message || "Error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try { await projectsApi.delete(deleteTarget._id); setSuccess("Project deleted."); setDeleteTarget(null); fetchData(); }
    catch (err: any) { setError(err.message); setDeleteTarget(null); }
    finally { setDeleting(false); }
  };

  const update = (key: string, val: any) => setFormData((p) => ({ ...p, [key]: val }));
  const addTag = () => {
    const v = tagInput.trim();
    if (v && !(formData.tags || []).includes(v)) { update("tags", [...(formData.tags || []), v]); setTagInput(""); }
  };

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}

      <div className="admin-page-header">
        <h2>Projects</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Project</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(item) => setViewItem(item)} onEdit={openEdit} onDelete={(item) => setDeleteTarget(item)} />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Project Details"
        item={viewItem}
        fields={[
          { key: "name", label: "Name" },
          { key: "slug", label: "Slug" },
          { key: "stackId", label: "Stacks" },
          { key: "tags", label: "Tags" },
          { key: "about", label: "About" },
          { key: "description", label: "Description" },
          { key: "backgroundColor", label: "Background Color" },
          { key: "posterImage", label: "Poster Image" },
          { key: "logoImage", label: "Logo Image" },
          { key: "previewImage", label: "Preview Image" },
          { key: "isSlider", label: "Show in Slider" },
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? "Edit Project" : "Create Project"}
        footer={<>
          <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
          <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
        </>}
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}
        <div className="admin-form-group"><label>Name</label><input value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Project name" required /></div>
        <div className="admin-form-group">
          <label>Stacks</label>
          <select multiple value={formData.stackId || []} onChange={(e) => update("stackId", Array.from(e.target.selectedOptions, (o) => o.value))} style={{ minHeight: 80 }}>
            {stacks.map((s) => <option key={s._id} value={s._id}>{s.name}</option>)}
          </select>
        </div>
        <div className="admin-form-group"><label>About</label><textarea value={formData.about} onChange={(e) => update("about", e.target.value)} placeholder="Short summary" /></div>
        <div className="admin-form-group"><label>Description</label><textarea value={formData.description} onChange={(e) => update("description", e.target.value)} placeholder="Full description" /></div>
        <div className="admin-form-group">
          <label>Tags</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Type and press Enter" onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }} style={{ flex: 1 }} />
            <button type="button" className="admin-btn-sm admin-btn-edit" onClick={addTag}>Add</button>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
            {(formData.tags || []).map((tag: string, i: number) => (
              <span key={i} className="admin-badge admin-badge-info" style={{ cursor: "pointer" }} onClick={() => update("tags", formData.tags.filter((_: string, j: number) => j !== i))}>
                {tag} ×
              </span>
            ))}
          </div>
        </div>
        <div className="admin-form-row">
          <div className="admin-form-group"><label>Background Color</label><input type="color" value={formData.backgroundColor} onChange={(e) => update("backgroundColor", e.target.value)} /></div>
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={formData.isSlider} onChange={(e) => update("isSlider", e.target.checked)} style={{ width: "auto" }} />
              Show in Slider
            </label>
          </div>
        </div>
        <div className="admin-form-group"><label>Poster Image URL</label><input value={formData.posterImage} onChange={(e) => update("posterImage", e.target.value)} placeholder="https://..." /></div>
        <div className="admin-form-group"><label>Logo Image URL</label><input value={formData.logoImage} onChange={(e) => update("logoImage", e.target.value)} placeholder="https://..." /></div>
        <div className="admin-form-group"><label>Preview Image URL</label><input value={formData.previewImage} onChange={(e) => update("previewImage", e.target.value)} placeholder="https://..." /></div>
      </AdminModal>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} loading={deleting} title="Delete Project?" />
    </DashboardLayout>
  );
}
