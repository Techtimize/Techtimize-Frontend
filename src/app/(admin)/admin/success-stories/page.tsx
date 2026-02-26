"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { successStoriesApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "clientName", label: "Client" },
  { key: "countryName", label: "Country" },
  { key: "designation", label: "Designation" },
  {
    key: "rating",
    label: "Rating",
    render: (item: any) => <span>{"★".repeat(item.rating || 0)}{"☆".repeat(5 - (item.rating || 0))}</span>,
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
  { key: "clientName", label: "Client Name", required: true, half: true },
  { key: "designation", label: "Designation", required: true, half: true },
  { key: "countryName", label: "Country Name", required: true, half: true },
  {
    key: "rating",
    label: "Rating (1-5)",
    type: "number",
    required: true,
    half: true,
  },
  { key: "countryIconUrl", label: "Country Icon URL", placeholder: "https://..." },
  { key: "review", label: "Review", type: "textarea", required: true },
  { key: "isActive", label: "Active", type: "checkbox" },
];

export default function SuccessStoriesPage() {
  return (
    <CrudPage
      title="Success Stories"
      apiGetAll={successStoriesApi.getAll}
      apiCreate={successStoriesApi.create}
      apiUpdate={successStoriesApi.update}
      apiDelete={successStoriesApi.delete}
      columns={columns}
      fields={fields}
      entityName="Success Story"
    />
  );
}
