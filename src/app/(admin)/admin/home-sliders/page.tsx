"use client";

import CrudPage from "../components/CrudPage";
import { homeSliderApi } from "../lib/api";
import { HOME_SLIDER_DEFAULTS } from "../constants";
import "../admin.css";

export default function HomeSlidersPage() {
  return (
    <CrudPage
      title="Home Sliders"
      entityName="Slider"
      apiGetAll={homeSliderApi.getAll}
      apiCreate={homeSliderApi.create}
      apiUpdate={homeSliderApi.update}
      apiDelete={homeSliderApi.delete}
      columns={[
        { key: "mainHeading", label: "Heading" },
        { key: "category", label: "Category" },
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => (
          <span className={`admin-badge ${item.isActive ? "admin-badge-success" : "admin-badge-danger"}`}>{item.isActive ? "Active" : "Inactive"}</span>
        )},
      ]}
      detailFields={[
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
      defaultFormData={() => ({ ...HOME_SLIDER_DEFAULTS })}
      onBeforeEdit={(item: any) => {
        const fd: Record<string, any> = {};
        Object.keys(HOME_SLIDER_DEFAULTS).forEach((k) => { fd[k] = item[k] ?? HOME_SLIDER_DEFAULTS[k]; });
        return fd;
      }}
      renderForm={({ formData, updateField }) => {
        const SectionHeader = ({ text }: { text: string }) => (
          <h4 style={{ margin: "12px 0 8px", color: "#64748b", fontSize: 13, textTransform: "uppercase" as const, letterSpacing: 1 }}>{text}</h4>
        );
        const StatGroup = ({ n }: { n: 1 | 2 | 3 }) => (
          <>
            <SectionHeader text={`Stat ${n}`} />
            <div className="admin-form-row">
              <div className="admin-form-group"><label>Number</label><input type="number" value={formData[`statsNumber${n}`]} onChange={(e) => updateField(`statsNumber${n}`, Number(e.target.value))} /></div>
              <div className="admin-form-group"><label>Sign</label><input type="text" placeholder="+ / % / K" value={formData[`statsSign${n}`]} onChange={(e) => updateField(`statsSign${n}`, e.target.value)} /></div>
            </div>
            <div className="admin-form-group"><label>Title</label><input type="text" placeholder="Stat title" value={formData[`statsTitle${n}`]} onChange={(e) => updateField(`statsTitle${n}`, e.target.value)} /></div>
          </>
        );
        return (
          <>
            <div className="admin-form-group"><label>Main Heading *</label><input type="text" placeholder="Enter heading" value={formData.mainHeading} onChange={(e) => updateField("mainHeading", e.target.value)} required /></div>
            <div className="admin-form-row">
              <div className="admin-form-group"><label>Heading Color</label><input type="color" value={formData.mainHeadingColor} onChange={(e) => updateField("mainHeadingColor", e.target.value)} style={{ height: 40, padding: 2 }} /></div>
              <div className="admin-form-group"><label>Category *</label><input type="text" placeholder="e.g. Web Development" value={formData.category} onChange={(e) => updateField("category", e.target.value)} required /></div>
            </div>
            <div className="admin-form-group"><label>About *</label><textarea placeholder="Description" value={formData.about} onChange={(e) => updateField("about", e.target.value)} required /></div>
            <StatGroup n={1} />
            <StatGroup n={2} />
            <StatGroup n={3} />
            <SectionHeader text="Images" />
            <div className="admin-form-group"><label>Image URL 1</label><input type="text" placeholder="https://..." value={formData.imageUrl1} onChange={(e) => updateField("imageUrl1", e.target.value)} /></div>
            <div className="admin-form-group"><label>Image URL 2</label><input type="text" placeholder="https://..." value={formData.imageUrl2} onChange={(e) => updateField("imageUrl2", e.target.value)} /></div>
            <div className="admin-form-group"><label>Image URL 3</label><input type="text" placeholder="https://..." value={formData.imageUrl3} onChange={(e) => updateField("imageUrl3", e.target.value)} /></div>
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
