"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { hireUsExpertApi, stacksApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface Expert {
  _id: string;
  title: string;
  about: string;
  iconUrl: string;
  stackIds: any[];
  isActive: boolean;
}

interface Stack {
  _id: string;
  name: string;
}

export default function HireUsExpertsPage() {
  const [data, setData] = useState<Expert[]>([]);
  const [stacks, setStacks] = useState<Stack[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Expert | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Expert | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<Expert | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [expertsRes, stacksRes] = await Promise.all([
        hireUsExpertApi.getAll(),
        stacksApi.getAll(),
      ]);
      const experts = expertsRes?.data ?? expertsRes;
      const stackList = stacksRes?.data ?? stacksRes;
      setData(Array.isArray(experts) ? experts : []);
      setStacks(Array.isArray(stackList) ? stackList : []);
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    if (success) { const t = setTimeout(() => setSuccess(""), 3000); return () => clearTimeout(t); }
  }, [success]);

  const defaults = () => ({
    title: "",
    about: "",
    iconUrl: "",
    stackIds: [] as string[],
    isActive: true,
  });

  const openCreate = () => {
    setEditingItem(null);
    setFormData(defaults());
    setError("");
    setModalOpen(true);
  };

  const openEdit = (item: Expert) => {
    setEditingItem(item);
    setFormData({
      title: item.title || "",
      about: item.about || "",
      iconUrl: item.iconUrl || "",
      stackIds: Array.isArray(item.stackIds)
        ? item.stackIds.map((s: any) => (typeof s === "object" ? s._id : s))
        : [],
      isActive: item.isActive ?? true,
    });
    setError("");
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      if (editingItem) {
        await hireUsExpertApi.update(editingItem._id, formData);
        setSuccess("Expert updated.");
      } else {
        await hireUsExpertApi.create(formData);
        setSuccess("Expert created.");
      }
      setModalOpen(false);
      fetchData();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await hireUsExpertApi.delete(deleteTarget._id);
      setSuccess("Expert deleted.");
      setDeleteTarget(null);
      fetchData();
    } catch (err: any) {
      setError(err.message || "Failed to delete.");
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  };

  const update = (key: string, value: any) => setFormData((p) => ({ ...p, [key]: value }));

  const toggleStack = (stackId: string) => {
    const ids: string[] = formData.stackIds || [];
    if (ids.includes(stackId)) {
      update("stackIds", ids.filter((id) => id !== stackId));
    } else {
      update("stackIds", [...ids, stackId]);
    }
  };

  const columns = [
    { key: "title", label: "Title" },
    {
      key: "stackIds",
      label: "Stacks",
      render: (item: Expert) => {
        const names = (item.stackIds || []).map((s: any) => (typeof s === "object" ? s.name : s));
        return <span>{names.slice(0, 3).join(", ")}{names.length > 3 ? ` +${names.length - 3}` : ""}</span>;
      },
    },
    {
      key: "isActive",
      label: "Status",
      align: "center" as const,
      render: (item: Expert) => (
        <span className={`admin-badge ${item.isActive ? "admin-badge-success" : "admin-badge-danger"}`}>
          {item.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
  ];

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}

      <div className="admin-page-header">
        <h2>Hire Us Experts</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Expert</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(i) => setViewItem(i)} onEdit={openEdit} onDelete={(i) => setDeleteTarget(i)} idKey="_id" />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Expert Details"
        item={viewItem}
        fields={[
          { key: "title", label: "Title" },
          { key: "iconUrl", label: "Icon" },
          { key: "about", label: "About" },
          { key: "stackIds", label: "Technology Stacks" },
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingItem ? "Edit Expert" : "Create Expert"}
        footer={
          <>
            <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
            <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
          </>
        }
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}

        <div className="admin-form-group">
          <label>Title *</label>
          <input type="text" placeholder="e.g. React Developer" value={formData.title} onChange={(e) => update("title", e.target.value)} required />
        </div>

        <div className="admin-form-group">
          <label>Icon URL</label>
          <input type="text" placeholder="https://..." value={formData.iconUrl} onChange={(e) => update("iconUrl", e.target.value)} />
        </div>

        <div className="admin-form-group">
          <label>About</label>
          <textarea placeholder="Expert description" value={formData.about} onChange={(e) => update("about", e.target.value)} />
        </div>

        <div className="admin-form-group">
          <label>Technology Stacks</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxHeight: 200, overflowY: "auto", padding: 4 }}>
            {stacks.map((stack) => (
              <label
                key={stack._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                  cursor: "pointer",
                  background: (formData.stackIds || []).includes(stack._id)
                    ? "#e0e7ff"
                    : "#fff",
                }}
              >
                <input
                  type="checkbox"
                  checked={(formData.stackIds || []).includes(stack._id)}
                  onChange={() => toggleStack(stack._id)}
                  style={{ width: "auto" }}
                />
                {stack.name}
              </label>
            ))}
          </div>
        </div>

        <div className="admin-form-group">
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
            <input type="checkbox" checked={!!formData.isActive} onChange={(e) => update("isActive", e.target.checked)} style={{ width: "auto" }} />
            Active
          </label>
        </div>
      </AdminModal>

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleting}
        title="Delete Expert?"
        message="Are you sure you want to delete this expert? This action cannot be undone."
      />
    </DashboardLayout>
  );
}
