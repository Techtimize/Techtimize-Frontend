"use client";

import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AdminTable from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { jobOpeningsApi, departmentsApi } from "../lib/api";
import DetailModal from "../components/DetailModal";
import "../admin.css";

interface JobOpening {
  _id: string;
  jobTitle: string;
  departmentId: any;
  location: string;
  workMode: string;
  experience: string;
  responsibilities: string[];
  isPositionOpen: boolean;
  isActive: boolean;
}

interface Department {
  _id: string;
  name: string;
}

const WORK_MODES = ["Remote", "On-site", "Hybrid"];
const JOB_TYPES = ["Full-time", "Part-time", "Internship", "Contract", "Freelance"];

export default function JobOpeningsPage() {
  const [data, setData] = useState<JobOpening[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<JobOpening | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [newResp, setNewResp] = useState("");
  const [viewItem, setViewItem] = useState<JobOpening | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [jobsRes, deptRes] = await Promise.all([
        jobOpeningsApi.getAll(),
        departmentsApi.getAll(),
      ]);
      const jobs = jobsRes?.data ?? jobsRes;
      const depts = deptRes?.data ?? deptRes;
      setData(Array.isArray(jobs) ? jobs : []);
      setDepartments(Array.isArray(depts) ? depts : []);
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
    jobTitle: "",
    jobType: "Full-time",
    departmentId: "",
    location: "",
    workMode: "Remote",
    experience: "",
    responsibilities: [] as string[],
    isPositionOpen: true,
    isActive: true,
  });

  const openCreate = () => {
    setEditingItem(null);
    setFormData(defaults());
    setNewResp("");
    setError("");
    setModalOpen(true);
  };

  const openEdit = (item: JobOpening) => {
    setEditingItem(item);
    setFormData({
      jobTitle: item.jobTitle || "",
      jobType: (item as any).jobType || "Full-time",
      departmentId:
        typeof item.departmentId === "object"
          ? item.departmentId?._id
          : item.departmentId || "",
      location: item.location || "",
      workMode: item.workMode || "Remote",
      experience: item.experience || "",
      responsibilities: Array.isArray(item.responsibilities) ? [...item.responsibilities] : [],
      isPositionOpen: item.isPositionOpen ?? true,
      isActive: item.isActive ?? true,
    });
    setNewResp("");
    setError("");
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      if (editingItem) {
        await jobOpeningsApi.update(editingItem._id, formData);
        setSuccess("Job opening updated.");
      } else {
        await jobOpeningsApi.create(formData);
        setSuccess("Job opening created.");
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
      await jobOpeningsApi.delete(deleteTarget._id);
      setSuccess("Job opening deleted.");
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

  const addResponsibility = () => {
    const v = newResp.trim();
    if (v) {
      update("responsibilities", [...(formData.responsibilities || []), v]);
      setNewResp("");
    }
  };

  const removeResponsibility = (idx: number) => {
    update(
      "responsibilities",
      (formData.responsibilities || []).filter((_: string, i: number) => i !== idx)
    );
  };

  const columns = [
    { key: "jobTitle", label: "Position" },
    {
      key: "departmentId",
      label: "Department",
      render: (item: JobOpening) =>
        typeof item.departmentId === "object"
          ? item.departmentId?.name
          : departments.find((d) => d._id === item.departmentId)?.name || "—",
    },
    { key: "workMode", label: "Work Mode" },
    {
      key: "isPositionOpen",
      label: "Open",
      align: "center" as const,
      render: (item: JobOpening) => (
        <span className={`admin-badge ${item.isPositionOpen ? "admin-badge-success" : "admin-badge-danger"}`}>
          {item.isPositionOpen ? "Open" : "Closed"}
        </span>
      ),
    },
    {
      key: "isActive",
      label: "Status",
      align: "center" as const,
      render: (item: JobOpening) => (
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
        <h2>Job Openings</h2>
        <button className="admin-btn-add" onClick={openCreate}>+ Add Job Opening</button>
      </div>

      <AdminTable columns={columns} data={data} loading={loading} onView={(i) => setViewItem(i)} onEdit={openEdit} onDelete={(i) => setDeleteTarget(i)} idKey="_id" />

      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title="Job Opening Details"
        item={viewItem}
        fields={[
          { key: "jobTitle", label: "Position Title" },
          { key: "jobType", label: "Job Type" },
          { key: "departmentId", label: "Department", render: (val: any) => typeof val === "object" ? val?.name : departments.find((d) => d._id === val)?.name || "—" },
          { key: "workMode", label: "Work Mode" },
          { key: "location", label: "Location" },
          { key: "experience", label: "Experience" },
          { key: "responsibilities", label: "Responsibilities" },
          { key: "isPositionOpen", label: "Position Open" },
          { key: "isActive", label: "Active" },
        ]}
      />

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingItem ? "Edit Job Opening" : "Create Job Opening"}
        footer={
          <>
            <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>Cancel</button>
            <button className="admin-btn-add" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingItem ? "Update" : "Create"}</button>
          </>
        }
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}

        <div className="admin-form-group">
          <label>Position Title *</label>
          <input type="text" placeholder="e.g. Senior React Developer" value={formData.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} required />
        </div>

        <div className="admin-form-group">
          <label>Job Type *</label>
          <select value={formData.jobType} onChange={(e) => update("jobType", e.target.value)}>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Department *</label>
            <select value={formData.departmentId} onChange={(e) => update("departmentId", e.target.value)}>
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d._id} value={d._id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div className="admin-form-group">
            <label>Work Mode</label>
            <select value={formData.workMode} onChange={(e) => update("workMode", e.target.value)}>
              {WORK_MODES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. Lahore, Pakistan" value={formData.location} onChange={(e) => update("location", e.target.value)} />
          </div>
          <div className="admin-form-group">
            <label>Experience</label>
            <input type="text" placeholder="e.g. 2-4 years" value={formData.experience} onChange={(e) => update("experience", e.target.value)} />
          </div>
        </div>

        {/* Responsibilities */}
        <div className="admin-form-group">
          <label>Responsibilities</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              placeholder="Add a responsibility"
              value={newResp}
              onChange={(e) => setNewResp(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addResponsibility();
                }
              }}
              style={{ flex: 1 }}
            />
            <button type="button" className="admin-btn-add" onClick={addResponsibility} style={{ whiteSpace: "nowrap" }}>
              Add
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
            {(formData.responsibilities || []).map((r: string, idx: number) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 10px",
                  background: "#f8fafc",
                  borderRadius: 6,
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                }}
              >
                <span>{r}</span>
                <button
                  type="button"
                  onClick={() => removeResponsibility(idx)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                    padding: "0 4px",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={!!formData.isPositionOpen} onChange={(e) => update("isPositionOpen", e.target.checked)} style={{ width: "auto" }} />
              Position Open
            </label>
          </div>
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={!!formData.isActive} onChange={(e) => update("isActive", e.target.checked)} style={{ width: "auto" }} />
              Active
            </label>
          </div>
        </div>
      </AdminModal>

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleting}
        title="Delete Job Opening?"
        message="Are you sure you want to delete this job opening? This action cannot be undone."
      />
    </DashboardLayout>
  );
}
