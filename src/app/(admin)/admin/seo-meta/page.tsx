"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { seoMetaApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "metaTitle", label: "Title" },
  { key: "slug", label: "Slug" },
  {
    key: "metaDescription",
    label: "Description",
    render: (item: any) => (
      <span>
        {(item.metaDescription || "").substring(0, 80)}
        {(item.metaDescription || "").length > 80 ? "…" : ""}
      </span>
    ),
  },
];

const fields: FieldConfig[] = [
  { key: "metaTitle", label: "Meta Title", required: true },
  { key: "slug", label: "Slug", required: true, placeholder: "e.g. /about-us" },
  { key: "metaDescription", label: "Meta Description", type: "textarea", required: true },
  { key: "metaKeywords", label: "Meta Keywords", type: "tags" },
  { key: "canonicalTags", label: "Canonical Tags", type: "tags" },
];

export default function SeoMetaPage() {
  return (
    <CrudPage
      title="SEO Meta"
      apiGetAll={seoMetaApi.getAll}
      apiCreate={seoMetaApi.create}
      apiUpdate={seoMetaApi.update}
      apiDelete={seoMetaApi.delete}
      columns={columns}
      fields={fields}
      entityName="SEO Meta"
    />
  );
}
