"use client";

import { useState, useEffect, useCallback } from "react";
import CrudPage from "../components/CrudPage";
import { hireUsExpertApi, stacksApi } from "../lib/api";
import { Stack } from "../types";
import "../admin.css";

export default function HireUsExpertsPage() {
  const [stacks, setStacks] = useState<Stack[]>([]);

  const fetchStacks = useCallback(async () => {
    try {
      const res = await stacksApi.getAll();
      setStacks(Array.isArray(res?.data ?? res) ? (res?.data ?? res) : []);
    } catch { setStacks([]); }
  }, []);

  useEffect(() => { fetchStacks(); }, [fetchStacks]);

  return (
    <CrudPage
      title="Hire Us Experts"
      entityName="Expert"
      apiGetAll={hireUsExpertApi.getAll}
      apiCreate={hireUsExpertApi.create}
      apiUpdate={hireUsExpertApi.update}
      apiDelete={hireUsExpertApi.delete}
      onModalOpen={fetchStacks}
      columns={[
        { key: "title", label: "Title" },
        { key: "stackIds", label: "Stacks", render: (item: any) => {
          const names = (item.stackIds || []).map((s: any) => typeof s === "object" ? s.name : s);
          return <span>{names.slice(0, 3).join(", ")}{names.length > 3 ? ` +${names.length - 3}` : ""}</span>;
        }},
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => (
          <span className={`admin-badge ${item.isActive ? "admin-badge-success" : "admin-badge-danger"}`}>{item.isActive ? "Active" : "Inactive"}</span>
        )},
      ]}
      detailFields={[
        { key: "title", label: "Title" },
        { key: "iconUrl", label: "Icon" },
        { key: "about", label: "About" },
        { key: "stackIds", label: "Technology Stacks" },
        { key: "isActive", label: "Active" },
      ]}
      defaultFormData={() => ({ title: "", about: "", iconUrl: "", stackIds: [] as string[], isActive: true })}
      onBeforeEdit={(item: any) => ({
        title: item.title || "",
        about: item.about || "",
        iconUrl: item.iconUrl || "",
        stackIds: Array.isArray(item.stackIds) ? item.stackIds.map((s: any) => typeof s === "object" ? s._id : s) : [],
        isActive: item.isActive ?? true,
      })}
      deleteMessage="Are you sure you want to delete this expert? This action cannot be undone."
      renderForm={({ formData, updateField }) => {
        const toggleStack = (stackId: string) => {
          const ids: string[] = formData.stackIds || [];
          updateField("stackIds", ids.includes(stackId) ? ids.filter((id) => id !== stackId) : [...ids, stackId]);
        };
        return (
          <>
            <div className="admin-form-group">
              <label>Title *</label>
              <input type="text" placeholder="e.g. React Developer" value={formData.title} onChange={(e) => updateField("title", e.target.value)} required />
            </div>
            <div className="admin-form-group">
              <label>Icon URL</label>
              <input type="text" placeholder="https://..." value={formData.iconUrl} onChange={(e) => updateField("iconUrl", e.target.value)} />
            </div>
            <div className="admin-form-group">
              <label>About</label>
              <textarea placeholder="Expert description" value={formData.about} onChange={(e) => updateField("about", e.target.value)} />
            </div>
            <div className="admin-form-group">
              <label>Technology Stacks</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxHeight: 200, overflowY: "auto", padding: 4 }}>
                {stacks.map((stack) => (
                  <label key={stack._id} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 13, cursor: "pointer", background: (formData.stackIds || []).includes(stack._id) ? "#e0e7ff" : "#fff" }}>
                    <input type="checkbox" checked={(formData.stackIds || []).includes(stack._id)} onChange={() => toggleStack(stack._id)} style={{ width: "auto" }} />
                    {stack.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="admin-form-group">
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input type="checkbox" checked={!!formData.isActive} onChange={(e) => updateField("isActive", e.target.checked)} style={{ width: "auto" }} />
                Active
              </label>
            </div>
          </>
        );
      }}
    />
  );
}
