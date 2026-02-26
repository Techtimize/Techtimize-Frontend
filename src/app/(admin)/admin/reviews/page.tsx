"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { reviewsApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface Review {
  _id: string;
  name: string;
  clientDesignation: string;
  clientCountry: string;
  rating: number;
  content: string;
}

const COUNTRIES = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "India", "Pakistan", "UAE", "Saudi Arabia", "Other"];

export default function ReviewsPage() {
  const [data, setData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Review | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Review | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<Review | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await reviewsApi.getAll();
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

  const defaults = () => ({
    name: "",
    clientDesignation: "",
    clientCountry: "",
    rating: 5,
    content: "",
  });

  const openCreate = () => {
    setEditingItem(null);
    setFormData(defaults());
    setError("");
    setModalOpen(true);
  };

  const openEdit = (item: Review) => {
    setEditingItem(item);
    setFormData({
      name: item.name || "",
      clientDesignation: item.clientDesignation || "",
      clientCountry: item.clientCountry || "",
      rating: item.rating ?? 5,
      content: item.content || "",
    });
    setError("");
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      if (editingItem) {
        await reviewsApi.update(editingItem._id, formData);
        setSuccess("Review updated.");
      } else {
        await reviewsApi.create(formData);
        setSuccess("Review created.");
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
      await reviewsApi.delete(deleteTarget._id);
      setSuccess("Review deleted permanently.");
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
    { key: "name", label: "Client" },
    { key: "clientDesignation", label: "Designation" },
    { key: "clientCountry", label: "Country" },
    {
      key: "rating",
      label: "Rating",
      render: (item: Review) => (
        <span>{"★".repeat(item.rating || 0)}{"☆".repeat(5 - (item.rating || 0))}</span>
      ),
    },
  ];

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}

      <div className="admin-page-header">
        <h2>Reviews</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Review</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(i) => setViewItem(i)} onEdit={openEdit} onDelete={(i) => setDeleteTarget(i)} idKey="_id" />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Review Details"
        item={viewItem}
        fields={[
          { key: "name", label: "Client Name" },
          { key: "clientDesignation", label: "Designation" },
          { key: "clientCountry", label: "Country" },
          { key: "rating", label: "Rating", render: (val: any) => "★".repeat(val || 0) + "☆".repeat(5 - (val || 0)) },
          { key: "content", label: "Review" },
        ]}
      />

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingItem ? "Edit Review" : "Create Review"}
        footer={
          <>
            <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
            <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
          </>
        }
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Client Name *</label>
            <input type="text" placeholder="Client name" value={formData.name} onChange={(e) => update("name", e.target.value)} required />
          </div>
          <div className="admin-form-group">
            <label>Designation *</label>
            <input type="text" placeholder="e.g. CEO, CTO" value={formData.clientDesignation} onChange={(e) => update("clientDesignation", e.target.value)} required />
          </div>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Country</label>
            <select value={formData.clientCountry} onChange={(e) => update("clientCountry", e.target.value)}>
              <option value="">Select Country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="admin-form-group">
            <label>Rating (1-5) *</label>
            <select value={formData.rating} onChange={(e) => update("rating", Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} Star{n !== 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-form-group">
          <label>Review *</label>
          <textarea placeholder="Write review text" value={formData.content} onChange={(e) => update("content", e.target.value)} required />
        </div>
      </AdminModal>

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleting}
        title="Delete Review?"
        message="This will permanently delete the review. This action cannot be undone."
      />
    </DashboardLayout>
  );
}
