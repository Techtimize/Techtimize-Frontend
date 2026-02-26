"use client";

import { useState, useEffect, useCallback } from "react";
import CrudPage from "../components/CrudPage";
import { jobOpeningsApi, departmentsApi } from "../lib/api";
import { Department } from "../types";
import { WORK_MODES, JOB_TYPES } from "../constants";
import "../admin.css";

export default function JobOpeningsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newResp, setNewResp] = useState("");

  const fetchDepartments = useCallback(async () => {
    try {
      const res = await departmentsApi.getAll();
      setDepartments(Array.isArray(res?.data ?? res) ? (res?.data ?? res) : []);
    } catch { setDepartments([]); }
  }, []);

  useEffect(() => { fetchDepartments(); }, [fetchDepartments]);

  const getDeptName = (item: any) =>
    typeof item.departmentId === "object"
      ? item.departmentId?.name
      : departments.find((d) => d._id === item.departmentId)?.name || "—";

  return (
    <CrudPage
      title="Job Openings"
      entityName="Job Opening"
      apiGetAll={jobOpeningsApi.getAll}
      apiCreate={jobOpeningsApi.create}
      apiUpdate={jobOpeningsApi.update}
      apiDelete={jobOpeningsApi.delete}
      onModalOpen={() => { fetchDepartments(); setNewResp(""); }}
      columns={[
        { key: "jobTitle", label: "Position" },
        { key: "departmentId", label: "Department", render: (item: any) => getDeptName(item) },
        { key: "workMode", label: "Work Mode" },
        { key: "isPositionOpen", label: "Open", align: "center" as const, render: (item: any) => <span className={`admin-badge ${item.isPositionOpen ? "admin-badge-success" : "admin-badge-danger"}`}>{item.isPositionOpen ? "Open" : "Closed"}</span> },
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => <span className={`admin-badge ${item.isActive ? "admin-badge-success" : "admin-badge-danger"}`}>{item.isActive ? "Active" : "Inactive"}</span> },
      ]}
      detailFields={[
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
      defaultFormData={() => ({
        jobTitle: "", jobType: "Full-time", departmentId: "", location: "",
        workMode: "Remote", experience: "", responsibilities: [] as string[],
        isPositionOpen: true, isActive: true,
      })}
      onBeforeEdit={(item: any) => ({
        jobTitle: item.jobTitle || "",
        jobType: item.jobType || "Full-time",
        departmentId: typeof item.departmentId === "object" ? item.departmentId?._id : item.departmentId || "",
        location: item.location || "",
        workMode: item.workMode || "Remote",
        experience: item.experience || "",
        responsibilities: Array.isArray(item.responsibilities) ? [...item.responsibilities] : [],
        isPositionOpen: item.isPositionOpen ?? true,
        isActive: item.isActive ?? true,
      })}
      deleteMessage="Are you sure you want to delete this job opening? This action cannot be undone."
      renderForm={({ formData, updateField }) => {
        const addResponsibility = () => {
          const v = newResp.trim();
          if (v) { updateField("responsibilities", [...(formData.responsibilities || []), v]); setNewResp(""); }
        };
        const removeResponsibility = (idx: number) => {
          updateField("responsibilities", (formData.responsibilities || []).filter((_: string, i: number) => i !== idx));
        };
        return (
          <>
            <div className="admin-form-group">
              <label>Position Title *</label>
              <input type="text" placeholder="e.g. Senior React Developer" value={formData.jobTitle} onChange={(e) => updateField("jobTitle", e.target.value)} required />
            </div>
            <div className="admin-form-group">
              <label>Job Type *</label>
              <select value={formData.jobType} onChange={(e) => updateField("jobType", e.target.value)}>
                {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Department *</label>
                <select value={formData.departmentId} onChange={(e) => updateField("departmentId", e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((d) => <option key={d._id} value={d._id}>{d.name}</option>)}
                </select>
              </div>
              <div className="admin-form-group">
                <label>Work Mode</label>
                <select value={formData.workMode} onChange={(e) => updateField("workMode", e.target.value)}>
                  {WORK_MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Location</label>
                <input type="text" placeholder="e.g. Lahore, Pakistan" value={formData.location} onChange={(e) => updateField("location", e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Experience</label>
                <input type="text" placeholder="e.g. 2-4 years" value={formData.experience} onChange={(e) => updateField("experience", e.target.value)} />
              </div>
            </div>
            <div className="admin-form-group">
              <label>Responsibilities</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input type="text" placeholder="Add a responsibility" value={newResp} onChange={(e) => setNewResp(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addResponsibility(); } }} style={{ flex: 1 }} />
                <button type="button" className="admin-btn-add" onClick={addResponsibility} style={{ whiteSpace: "nowrap" }}>Add</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
                {(formData.responsibilities || []).map((r: string, idx: number) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px", background: "#f8fafc", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 13 }}>
                    <span>{r}</span>
                    <button type="button" onClick={() => removeResponsibility(idx)} style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 16, fontWeight: 700, padding: "0 4px" }}>×</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="checkbox" checked={!!formData.isPositionOpen} onChange={(e) => updateField("isPositionOpen", e.target.checked)} style={{ width: "auto" }} />
                  Position Open
                </label>
              </div>
              <div className="admin-form-group">
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="checkbox" checked={!!formData.isActive} onChange={(e) => updateField("isActive", e.target.checked)} style={{ width: "auto" }} />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      }}
    />
  );
}
