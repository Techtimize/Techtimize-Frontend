"use client";

import CrudPage from "../components/CrudPage";
import { reviewsApi } from "../lib/api";
import { COUNTRIES, RATING_OPTIONS } from "../constants";
import "../admin.css";

export default function ReviewsPage() {
  return (
    <CrudPage
      title="Reviews"
      entityName="Review"
      apiGetAll={reviewsApi.getAll}
      apiCreate={reviewsApi.create}
      apiUpdate={reviewsApi.update}
      apiDelete={reviewsApi.delete}
      columns={[
        { key: "name", label: "Client" },
        { key: "clientDesignation", label: "Designation" },
        { key: "clientCountry", label: "Country" },
        {
          key: "rating",
          label: "Rating",
          render: (item: any) => (
            <span>{"★".repeat(item.rating || 0)}{"☆".repeat(5 - (item.rating || 0))}</span>
          ),
        },
      ]}
      detailFields={[
        { key: "name", label: "Client Name" },
        { key: "clientDesignation", label: "Designation" },
        { key: "clientCountry", label: "Country" },
        { key: "rating", label: "Rating", render: (val: any) => "★".repeat(val || 0) + "☆".repeat(5 - (val || 0)) },
        { key: "content", label: "Review" },
      ]}
      defaultFormData={() => ({ name: "", clientDesignation: "", clientCountry: "", rating: 5, content: "" })}
      onBeforeEdit={(item: any) => ({
        name: item.name || "",
        clientDesignation: item.clientDesignation || "",
        clientCountry: item.clientCountry || "",
        rating: item.rating ?? 5,
        content: item.content || "",
      })}
      deleteMessage="This will permanently delete the review. This action cannot be undone."
      renderForm={({ formData, updateField }) => (
        <>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Client Name *</label>
              <input type="text" placeholder="Client name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required />
            </div>
            <div className="admin-form-group">
              <label>Designation *</label>
              <input type="text" placeholder="e.g. CEO, CTO" value={formData.clientDesignation} onChange={(e) => updateField("clientDesignation", e.target.value)} required />
            </div>
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Country</label>
              <select value={formData.clientCountry} onChange={(e) => updateField("clientCountry", e.target.value)}>
                <option value="">Select Country</option>
                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="admin-form-group">
              <label>Rating (1-5) *</label>
              <select value={formData.rating} onChange={(e) => updateField("rating", Number(e.target.value))}>
                {RATING_OPTIONS.map((n) => <option key={n} value={n}>{n} Star{n !== 1 ? "s" : ""}</option>)}
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label>Review *</label>
            <textarea placeholder="Write review text" value={formData.content} onChange={(e) => updateField("content", e.target.value)} required />
          </div>
        </>
      )}
    />
  );
}
