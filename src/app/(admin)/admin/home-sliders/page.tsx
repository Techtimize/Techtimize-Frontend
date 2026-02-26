"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { homeSliderApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface HomeSlider {
  _id: string;
  mainHeading: string;
  mainHeadingColor: string;
  category: string;
  about: string;
  statsNumber1: number;
  statsSign1: string;
  statsTitle1: string;
  statsNumber2: number;
  statsSign2: string;
  statsTitle2: string;
  statsNumber3: number;
  statsSign3: string;
  statsTitle3: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  isActive: boolean;
}

const DEFAULTS: Record<string, any> = {
  mainHeading: "",
  mainHeadingColor: "#000000",
  category: "",
  about: "",
  statsNumber1: 0,
  statsSign1: "+",
  statsTitle1: "",
  statsNumber2: 0,
  statsSign2: "+",
  statsTitle2: "",
  statsNumber3: 0,
  statsSign3: "+",
  statsTitle3: "",
  imageUrl1: "",
  imageUrl2: "",
  imageUrl3: "",
  isActive: true,
};

export default function HomeSlidersPage() {
  const [data, setData] = useState<HomeSlider[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<HomeSlider | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({ ...DEFAULTS });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<HomeSlider | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<HomeSlider | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await homeSliderApi.getAll();
      const items = res?.data ?? res;
      setData(Array.isArray(items) ? items : []);
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

  const openCreate = () => {
    setEditingItem(null);
    setFormData({ ...DEFAULTS });
    setError("");
    setModalOpen(true);
  };

  const openEdit = (item: HomeSlider) => {
    setEditingItem(item);
    const fd: Record<string, any> = {};
    Object.keys(DEFAULTS).forEach((k) => {
      fd[k] = item[k as keyof HomeSlider] ?? DEFAULTS[k];
    });
    setFormData(fd);
    setError("");
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      if (editingItem) {
        await homeSliderApi.update(editingItem._id, formData);
        setSuccess("Slider updated successfully.");
      } else {
        await homeSliderApi.create(formData);
        setSuccess("Slider created successfully.");
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
      await homeSliderApi.delete(deleteTarget._id);
      setSuccess("Slider deleted successfully.");
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

  const columns = [
    { key: "mainHeading", label: "Heading" },
    { key: "category", label: "Category" },
    {
      key: "isActive",
      label: "Status",
      align: "center" as const,
      render: (item: HomeSlider) => (
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
        <h2>Home Sliders</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Slider</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(i) => setViewItem(i)} onEdit={openEdit} onDelete={(i) => setDeleteTarget(i)} idKey="_id" />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Slider Details"
        item={viewItem}
        fields={[
          { key: "mainHeading", label: "Main Heading" },
          { key: "mainHeadingColor", label: "Heading Color" },
          { key: "category", label: "Category" },
          { key: "about", label: "About" },
          { key: "statsNumber1", label: "Stat 1 Number" },
          { key: "statsSign1", label: "Stat 1 Sign" },
          { key: "statsTitle1", label: "Stat 1 Title" },
          { key: "statsNumber2", label: "Stat 2 Number" },
          { key: "statsSign2", label: "Stat 2 Sign" },
          { key: "statsTitle2", label: "Stat 2 Title" },
          { key: "statsNumber3", label: "Stat 3 Number" },
          { key: "statsSign3", label: "Stat 3 Sign" },
          { key: "statsTitle3", label: "Stat 3 Title" },
          { key: "imageUrl1", label: "Image 1" },
          { key: "imageUrl2", label: "Image 2" },
          { key: "imageUrl3", label: "Image 3" },
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingItem ? "Edit Slider" : "Create Slider"}
        footer={
          <>
            <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
            <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
          </>
        }
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}

        <div className="admin-form-group">
          <label>Main Heading *</label>
          <input type="text" placeholder="Enter heading" value={formData.mainHeading} onChange={(e) => update("mainHeading", e.target.value)} required />
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Heading Color</label>
            <input type="color" value={formData.mainHeadingColor} onChange={(e) => update("mainHeadingColor", e.target.value)} style={{ height: 40, padding: 2 }} />
          </div>
          <div className="admin-form-group">
            <label>Category *</label>
            <input type="text" placeholder="e.g. Web Development" value={formData.category} onChange={(e) => update("category", e.target.value)} required />
          </div>
        </div>

        <div className="admin-form-group">
          <label>About *</label>
          <textarea placeholder="Description" value={formData.about} onChange={(e) => update("about", e.target.value)} required />
        </div>

        {/* Stat 1 */}
        <h4 style={{ margin: "12px 0 8px", color: "#64748b", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Stat 1</h4>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Number</label>
            <input type="number" value={formData.statsNumber1} onChange={(e) => update("statsNumber1", Number(e.target.value))} />
          </div>
          <div className="admin-form-group">
            <label>Sign</label>
            <input type="text" placeholder="+ / % / K" value={formData.statsSign1} onChange={(e) => update("statsSign1", e.target.value)} />
          </div>
        </div>
        <div className="admin-form-group">
          <label>Title</label>
          <input type="text" placeholder="Stat title" value={formData.statsTitle1} onChange={(e) => update("statsTitle1", e.target.value)} />
        </div>

        {/* Stat 2 */}
        <h4 style={{ margin: "12px 0 8px", color: "#64748b", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Stat 2</h4>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Number</label>
            <input type="number" value={formData.statsNumber2} onChange={(e) => update("statsNumber2", Number(e.target.value))} />
          </div>
          <div className="admin-form-group">
            <label>Sign</label>
            <input type="text" placeholder="+ / % / K" value={formData.statsSign2} onChange={(e) => update("statsSign2", e.target.value)} />
          </div>
        </div>
        <div className="admin-form-group">
          <label>Title</label>
          <input type="text" placeholder="Stat title" value={formData.statsTitle2} onChange={(e) => update("statsTitle2", e.target.value)} />
        </div>

        {/* Stat 3 */}
        <h4 style={{ margin: "12px 0 8px", color: "#64748b", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Stat 3</h4>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Number</label>
            <input type="number" value={formData.statsNumber3} onChange={(e) => update("statsNumber3", Number(e.target.value))} />
          </div>
          <div className="admin-form-group">
            <label>Sign</label>
            <input type="text" placeholder="+ / % / K" value={formData.statsSign3} onChange={(e) => update("statsSign3", e.target.value)} />
          </div>
        </div>
        <div className="admin-form-group">
          <label>Title</label>
          <input type="text" placeholder="Stat title" value={formData.statsTitle3} onChange={(e) => update("statsTitle3", e.target.value)} />
        </div>

        {/* Images */}
        <h4 style={{ margin: "12px 0 8px", color: "#64748b", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Images</h4>
        <div className="admin-form-group">
          <label>Image URL 1</label>
          <input type="text" placeholder="https://..." value={formData.imageUrl1} onChange={(e) => update("imageUrl1", e.target.value)} />
        </div>
        <div className="admin-form-group">
          <label>Image URL 2</label>
          <input type="text" placeholder="https://..." value={formData.imageUrl2} onChange={(e) => update("imageUrl2", e.target.value)} />
        </div>
        <div className="admin-form-group">
          <label>Image URL 3</label>
          <input type="text" placeholder="https://..." value={formData.imageUrl3} onChange={(e) => update("imageUrl3", e.target.value)} />
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
        title="Delete Slider?"
        message="Are you sure you want to delete this slider? This action cannot be undone."
      />
    </DashboardLayout>
  );
}
