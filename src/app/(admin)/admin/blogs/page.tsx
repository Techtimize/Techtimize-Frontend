"use client";

import { useState, useEffect, useCallback } from "react";
import CrudPage from "../components/CrudPage";
import { blogApi, blogTypeApi } from "../lib/api";
import RichTextEditor from "../components/RichTextEditor";
import { BlogType } from "../types";
import "../admin.css";

export default function BlogsPage() {
  const [blogTypes, setBlogTypes] = useState<BlogType[]>([]);

  const fetchBlogTypes = useCallback(async () => {
    try {
      const res = await blogTypeApi.getAll();
      setBlogTypes(Array.isArray(res?.data ?? res) ? (res?.data ?? res) : []);
    } catch { setBlogTypes([]); }
  }, []);

  useEffect(() => { fetchBlogTypes(); }, [fetchBlogTypes]);

  const getTypeName = (item: any) => {
    if (item.blogTypeId && typeof item.blogTypeId === "object" && item.blogTypeId.type) return item.blogTypeId.type;
    return blogTypes.find((t) => t._id === item.blogTypeId)?.type || "—";
  };

  return (
    <CrudPage
      title="Blogs"
      entityName="Blog"
      apiGetAll={blogApi.getAll}
      apiCreate={blogApi.create}
      apiUpdate={blogApi.update}
      apiDelete={blogApi.delete}
      columns={[
        { key: "title", label: "Title", render: (item: any) => <span className="cell-truncate" style={{ display: "block" }}>{item.title}</span> },
        { key: "blogTypeId", label: "Type", render: (item: any) => getTypeName(item) },
        { key: "createdBy", label: "Author" },
        { key: "slug", label: "Slug", render: (item: any) => <span className="cell-truncate" style={{ display: "block" }}>{item.slug}</span> },
        { key: "isActive", label: "Status", align: "center" as const, render: (item: any) => (
          <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>{item.isActive ? "Active" : "Inactive"}</span>
        )},
      ]}
      detailFields={[
        { key: "title", label: "Title" },
        { key: "blogTypeId", label: "Blog Type", render: (val: any) => typeof val === "object" ? val?.type : blogTypes.find((t) => t._id === val)?.type || "—" },
        { key: "createdBy", label: "Author" },
        { key: "slug", label: "Slug" },
        { key: "imageUrl", label: "Image" },
        { key: "description", label: "Description", render: (val: any) => (
          <div className="ql-editor rich-text-preview" dangerouslySetInnerHTML={{ __html: val || "<em>No content</em>" }} style={{ padding: 0, minHeight: "auto" }} />
        )},
        { key: "isActive", label: "Active" },
      ]}
      defaultFormData={() => ({ title: "", blogTypeId: "", createdBy: "", imageUrl: "", description: "", isActive: true })}
      onBeforeEdit={(item: any) => ({
        title: item.title,
        blogTypeId: typeof item.blogTypeId === "object" ? item.blogTypeId._id : item.blogTypeId,
        createdBy: item.createdBy,
        imageUrl: item.imageUrl,
        description: item.description,
        isActive: item.isActive,
      })}
      onModalOpen={fetchBlogTypes}
      deleteMessage="This will soft-delete the blog post."
      renderForm={({ formData, updateField }) => (
        <>
          <div className="admin-form-group"><label>Title</label><input value={formData.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Blog title" required /></div>
          <div className="admin-form-row">
            <div className="admin-form-group"><label>Blog Type</label>
              <select value={formData.blogTypeId} onChange={(e) => updateField("blogTypeId", e.target.value)}>
                <option value="">Select type</option>
                {blogTypes.map((t) => <option key={t._id} value={t._id}>{t.type}</option>)}
              </select>
            </div>
            <div className="admin-form-group"><label>Author</label><input value={formData.createdBy} onChange={(e) => updateField("createdBy", e.target.value)} placeholder="Author name" /></div>
          </div>
          <div className="admin-form-group"><label>Image URL</label><input value={formData.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)} placeholder="https://..." /></div>
          <div className="admin-form-group"><label>Description</label><RichTextEditor value={formData.description || ""} onChange={(val) => updateField("description", val)} placeholder="Write your blog content here..." /></div>
          <div className="admin-form-group">
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={formData.isActive} onChange={(e) => updateField("isActive", e.target.checked)} style={{ width: "auto" }} />
              Active
            </label>
          </div>
        </>
      )}
    />
  );
}
