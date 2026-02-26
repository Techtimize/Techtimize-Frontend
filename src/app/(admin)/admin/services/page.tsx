"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { servicesApi, servicesCategoryApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface Service {
  _id: string;
  serviceName: string;
  serviceCategoryId: any[];
  iconUrl: string;
  iconHoverUrl: string;
  description: string;
  url: string;
  isActive: boolean;
  isPopular: boolean;
}

interface Category { _id: string; categoryName: string; }

export default function ServicesPage() {
  const [data, setData] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<Service | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      const cRes = await servicesCategoryApi.getAll();
      setCategories(Array.isArray(cRes?.data ?? cRes) ? (cRes?.data ?? cRes) : []);
    } catch {
      setCategories([]);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const sRes = await servicesApi.getAll();
      setData(Array.isArray(sRes?.data ?? sRes) ? (sRes?.data ?? sRes) : []);
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, [fetchData, fetchCategories]);

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const columns = [
    { key: "iconUrl", label: "Icon", render: (item: Service) =>
      item.iconUrl ? <img src={item.iconUrl} alt="" className="cell-img" /> : "—" },
    { key: "serviceName", label: "Name" },
    { key: "description", label: "Description", render: (item: Service) => <span className="cell-truncate" style={{ display: "block" }}>{item.description}</span> },
    { key: "isPopular", label: "Popular", render: (item: Service) =>
      <span className={`admin-badge ${item.isPopular ? "admin-badge-info" : "admin-badge-inactive"}`}>{item.isPopular ? "Yes" : "No"}</span> },
    { key: "isActive", label: "Status", align: "center" as const, render: (item: Service) =>
      <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>{item.isActive ? "Active" : "Inactive"}</span> },
  ];

  const emptyForm = () => ({ serviceName: "", serviceCategoryId: [] as string[], iconUrl: "", iconHoverUrl: "", description: "", url: "", isActive: true, isPopular: false });

  const openCreate = () => { setEditingItem(null); setFormData(emptyForm()); setError(""); fetchCategories(); setModalOpen(true); };
  const openEdit = (item: Service) => {
    setEditingItem(item);
    setFormData({
      serviceName: item.serviceName,
      serviceCategoryId: (item.serviceCategoryId || []).map((c: any) => typeof c === "object" ? c._id : c),
      iconUrl: item.iconUrl || "",
      iconHoverUrl: item.iconHoverUrl || "",
      description: item.description,
      url: item.url || "",
      isActive: item.isActive,
      isPopular: item.isPopular,
    });
    setError(""); fetchCategories(); setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true); setError("");
    try {
      if (editingItem) { await servicesApi.update(editingItem._id, formData); setSuccess("Service updated."); }
      else { await servicesApi.create(formData); setSuccess("Service created."); }
      setModalOpen(false); fetchData();
    } catch (err: any) { setError(err.message || "Error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try { await servicesApi.delete(deleteTarget._id); setSuccess("Service deleted."); setDeleteTarget(null); fetchData(); }
    catch (err: any) { setError(err.message); setDeleteTarget(null); }
    finally { setDeleting(false); }
  };

  const update = (key: string, val: any) => setFormData((p) => ({ ...p, [key]: val }));

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}
      <div className="admin-page-header">
        <h2>Services</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Service</button>
      </div>
      <AdminTable columns={columns} data={data} loading={loading} onView={(item) => setViewItem(item)} onEdit={openEdit} onDelete={(item) => setDeleteTarget(item)} />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Service Details"
        item={viewItem}
        fields={[
          { key: "serviceName", label: "Name" },
          { key: "serviceCategoryId", label: "Categories" },
          { key: "iconUrl", label: "Icon" },
          { key: "iconHoverUrl", label: "Icon Hover" },
          { key: "url", label: "URL" },
          { key: "description", label: "Description" },
          { key: "isPopular", label: "Popular" },
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? "Edit Service" : "Create Service"}
        footer={<>
          <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
          <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
        </>}
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}
        <div className="admin-form-group"><label>Service Name</label><input value={formData.serviceName} onChange={(e) => update("serviceName", e.target.value)} placeholder="Service name" required /></div>
        <div className="admin-form-group">
          <label>Categories</label>
          <div className="category-chip-grid">
            {categories.map((c) => {
              const selected = (formData.serviceCategoryId || []).includes(c._id);
              return (
                <button
                  key={c._id}
                  type="button"
                  className={`category-chip${selected ? " category-chip--selected" : ""}`}
                  onClick={() => {
                    const current: string[] = formData.serviceCategoryId || [];
                    update(
                      "serviceCategoryId",
                      selected ? current.filter((id) => id !== c._id) : [...current, c._id]
                    );
                  }}
                >
                  <span className="category-chip-check">
                    {selected && (
                      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  {c.categoryName}
                </button>
              );
            })}
          </div>
          {(formData.serviceCategoryId || []).length === 0 && (
            <p className="category-chip-hint">No category selected — click to select one or more</p>
          )}
        </div>
        <div className="admin-form-row">
          <div className="admin-form-group"><label>Icon URL</label><input value={formData.iconUrl} onChange={(e) => update("iconUrl", e.target.value)} placeholder="https://..." /></div>
          <div className="admin-form-group"><label>Icon Hover URL</label><input value={formData.iconHoverUrl} onChange={(e) => update("iconHoverUrl", e.target.value)} placeholder="https://..." /></div>
        </div>
        <div className="admin-form-group"><label>URL</label><input value={formData.url} onChange={(e) => update("url", e.target.value)} placeholder="/services/..." /></div>
        <div className="admin-form-group"><label>Description</label><textarea value={formData.description} onChange={(e) => update("description", e.target.value)} placeholder="Service description" /></div>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={formData.isActive} onChange={(e) => update("isActive", e.target.checked)} style={{ width: "auto" }} /> Active
            </label>
          </div>
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={formData.isPopular} onChange={(e) => update("isPopular", e.target.checked)} style={{ width: "auto" }} /> Popular
            </label>
          </div>
        </div>
      </AdminModal>
      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} loading={deleting} title="Delete Service?" />
    </DashboardLayout>
  );
}
