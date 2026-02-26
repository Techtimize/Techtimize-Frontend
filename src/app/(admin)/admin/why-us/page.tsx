"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { whyUsApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "title", label: "Heading" },
  {
    key: "description",
    label: "Description",
    render: (item: any) => (
      <span>{(item.description || "").substring(0, 80)}{(item.description || "").length > 80 ? "…" : ""}</span>
    ),
  },
  {
    key: "isActive",
    label: "Status",
    align: "center",
    render: (item: any) => (
      <span className={`admin-badge ${item.isActive ? "admin-badge-success" : "admin-badge-danger"}`}>
        {item.isActive ? "Active" : "Inactive"}
      </span>
    ),
  },
];

const fields: FieldConfig[] = [
  { key: "title", label: "Heading", required: true },
  { key: "iconUrl", label: "Icon URL", placeholder: "https://..." },
  { key: "description", label: "Description", type: "textarea", required: true },
  { key: "isActive", label: "Active", type: "checkbox" },
];

export default function WhyUsPage() {
  return (
    <CrudPage
      title="Why Us"
      apiGetAll={whyUsApi.getAll}
      apiCreate={whyUsApi.create}
      apiUpdate={whyUsApi.update}
      apiDelete={whyUsApi.delete}
      columns={columns}
      fields={fields}
      entityName="Why Us Entry"
    />
  );
}
