"use client";

import { useState, useEffect, useCallback } from "react";
import CrudPage from "../components/CrudPage";
import { projectsApi, stacksApi } from "../lib/api";
import { Stack } from "../types";
import "../admin.css";

export default function ProjectsPage() {
  const [stacks, setStacks] = useState<Stack[]>([]);
  const [tagInput, setTagInput] = useState("");

  const fetchStacks = useCallback(async () => {
    try {
      const res = await stacksApi.getAll();
      setStacks(Array.isArray(res?.data ?? res) ? (res?.data ?? res) : []);
    } catch { setStacks([]); }
  }, []);

  useEffect(() => { fetchStacks(); }, [fetchStacks]);

  return (
    <CrudPage
      title="Projects"
      entityName="Project"
      apiGetAll={projectsApi.getAll}
      apiCreate={projectsApi.create}
      apiUpdate={projectsApi.update}
      apiDelete={projectsApi.delete}
      onModalOpen={() => { fetchStacks(); setTagInput(""); }}
      columns={[
        { key: "posterImage", label: "Image", render: (item: any) => item.posterImage ? <img src={item.posterImage} alt="" className="cell-img" /> : "—" },
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug", render: (item: any) => <span className="cell-truncate" style={{ display: "block" }}>{item.slug}</span> },
        { key: "tags", label: "Tags", render: (item: any) => <span className="cell-truncate" style={{ display: "block" }}>{(item.tags || []).join(", ")}</span> },
        { key: "isSlider", label: "Slider", render: (item: any) => <span className={`admin-badge ${item.isSlider ? "admin-badge-info" : "admin-badge-inactive"}`}>{item.isSlider ? "Yes" : "No"}</span> },
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>{item.isActive ? "Active" : "Inactive"}</span> },
      ]}
      detailFields={[
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
      defaultFormData={() => ({ name: "", stackId: [] as string[], about: "", description: "", tags: [] as string[], isSlider: false, backgroundColor: "#FFFFFF", posterImage: "", logoImage: "", previewImage: "" })}
      onBeforeEdit={(item: any) => ({
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
      })}
      renderForm={({ formData, updateField }) => {
        const addTag = () => {
          const v = tagInput.trim();
          if (v && !(formData.tags || []).includes(v)) { updateField("tags", [...(formData.tags || []), v]); setTagInput(""); }
        };
        return (
          <>
            <div className="admin-form-group"><label>Name</label><input value={formData.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Project name" required /></div>
            <div className="admin-form-group">
              <label>Stacks</label>
              <select multiple value={formData.stackId || []} onChange={(e) => updateField("stackId", Array.from(e.target.selectedOptions, (o) => o.value))} style={{ minHeight: 80 }}>
                {stacks.map((s) => <option key={s._id} value={s._id}>{s.name}</option>)}
              </select>
            </div>
            <div className="admin-form-group"><label>About</label><textarea value={formData.about} onChange={(e) => updateField("about", e.target.value)} placeholder="Short summary" /></div>
            <div className="admin-form-group"><label>Description</label><textarea value={formData.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Full description" /></div>
            <div className="admin-form-group">
              <label>Tags</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Type and press Enter" onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }} style={{ flex: 1 }} />
                <button type="button" className="admin-btn-sm admin-btn-edit" onClick={addTag}>Add</button>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                {(formData.tags || []).map((tag: string, i: number) => (
                  <span key={i} className="admin-badge admin-badge-info" style={{ cursor: "pointer" }} onClick={() => updateField("tags", formData.tags.filter((_: string, j: number) => j !== i))}>
                    {tag} ×
                  </span>
                ))}
              </div>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group"><label>Background Color</label><input type="color" value={formData.backgroundColor} onChange={(e) => updateField("backgroundColor", e.target.value)} /></div>
              <div className="admin-form-group">
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="checkbox" checked={formData.isSlider} onChange={(e) => updateField("isSlider", e.target.checked)} style={{ width: "auto" }} />
                  Show in Slider
                </label>
              </div>
            </div>
            <div className="admin-form-group"><label>Poster Image URL</label><input value={formData.posterImage} onChange={(e) => updateField("posterImage", e.target.value)} placeholder="https://..." /></div>
            <div className="admin-form-group"><label>Logo Image URL</label><input value={formData.logoImage} onChange={(e) => updateField("logoImage", e.target.value)} placeholder="https://..." /></div>
            <div className="admin-form-group"><label>Preview Image URL</label><input value={formData.previewImage} onChange={(e) => updateField("previewImage", e.target.value)} placeholder="https://..." /></div>
          </>
        );
      }}
    />
  );
}
