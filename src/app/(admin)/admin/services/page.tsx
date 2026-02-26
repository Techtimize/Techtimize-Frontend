"use client";

import { useState, useEffect, useCallback } from "react";
import CrudPage from "../components/CrudPage";
import { servicesApi, servicesCategoryApi } from "../lib/api";
import { Category } from "../types";
import "../admin.css";

export default function ServicesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await servicesCategoryApi.getAll();
      setCategories(Array.isArray(res?.data ?? res) ? (res?.data ?? res) : []);
    } catch { setCategories([]); }
  }, []);

  useEffect(() => { fetchCategories(); }, [fetchCategories]);

  return (
    <CrudPage
      title="Services"
      entityName="Service"
      apiGetAll={servicesApi.getAll}
      apiCreate={servicesApi.create}
      apiUpdate={servicesApi.update}
      apiDelete={servicesApi.delete}
      onModalOpen={fetchCategories}
      columns={[
        { key: "iconUrl", label: "Icon", render: (item: any) => item.iconUrl ? <img src={item.iconUrl} alt="" className="cell-img" /> : "—" },
        { key: "serviceName", label: "Name" },
        { key: "description", label: "Description", render: (item: any) => <span className="cell-truncate" style={{ display: "block" }}>{item.description}</span> },
        { key: "isPopular", label: "Popular", render: (item: any) => <span className={`admin-badge ${item.isPopular ? "admin-badge-info" : "admin-badge-inactive"}`}>{item.isPopular ? "Yes" : "No"}</span> },
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>{item.isActive ? "Active" : "Inactive"}</span> },
      ]}
      detailFields={[
        { key: "serviceName", label: "Name" },
        { key: "serviceCategoryId", label: "Categories" },
        { key: "iconUrl", label: "Icon" },
        { key: "iconHoverUrl", label: "Icon Hover" },
        { key: "url", label: "URL" },
        { key: "description", label: "Description" },
        { key: "isPopular", label: "Popular" },
        { key: "isActive", label: "Active" },
      ]}
      defaultFormData={() => ({ serviceName: "", serviceCategoryId: [] as string[], iconUrl: "", iconHoverUrl: "", description: "", url: "", isActive: true, isPopular: false })}
      onBeforeEdit={(item: any) => ({
        serviceName: item.serviceName,
        serviceCategoryId: (item.serviceCategoryId || []).map((c: any) => typeof c === "object" ? c._id : c),
        iconUrl: item.iconUrl || "",
        iconHoverUrl: item.iconHoverUrl || "",
        description: item.description,
        url: item.url || "",
        isActive: item.isActive,
        isPopular: item.isPopular,
      })}
      renderForm={({ formData, updateField }) => (
        <>
          <div className="admin-form-group"><label>Service Name</label><input value={formData.serviceName} onChange={(e) => updateField("serviceName", e.target.value)} placeholder="Service name" required /></div>
          <div className="admin-form-group">
            <label>Categories</label>
            <div className="category-chip-grid">
              {categories.map((c) => {
                const selected = (formData.serviceCategoryId || []).includes(c._id);
                return (
                  <button key={c._id} type="button" className={`category-chip${selected ? " category-chip--selected" : ""}`}
                    onClick={() => {
                      const current: string[] = formData.serviceCategoryId || [];
                      updateField("serviceCategoryId", selected ? current.filter((id) => id !== c._id) : [...current, c._id]);
                    }}>
                    <span className="category-chip-check">
                      {selected && (<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
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
            <div className="admin-form-group"><label>Icon URL</label><input value={formData.iconUrl} onChange={(e) => updateField("iconUrl", e.target.value)} placeholder="https://..." /></div>
            <div className="admin-form-group"><label>Icon Hover URL</label><input value={formData.iconHoverUrl} onChange={(e) => updateField("iconHoverUrl", e.target.value)} placeholder="https://..." /></div>
          </div>
          <div className="admin-form-group"><label>URL</label><input value={formData.url} onChange={(e) => updateField("url", e.target.value)} placeholder="/services/..." /></div>
          <div className="admin-form-group"><label>Description</label><textarea value={formData.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Service description" /></div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input type="checkbox" checked={formData.isActive} onChange={(e) => updateField("isActive", e.target.checked)} style={{ width: "auto" }} /> Active
              </label>
            </div>
            <div className="admin-form-group">
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input type="checkbox" checked={formData.isPopular} onChange={(e) => updateField("isPopular", e.target.checked)} style={{ width: "auto" }} /> Popular
              </label>
            </div>
          </div>
        </>
      )}
    />
  );
}
