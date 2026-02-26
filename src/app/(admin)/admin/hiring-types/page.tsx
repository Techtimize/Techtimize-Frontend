"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { hireUsHiringTypeApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "hiringType", label: "Hiring Type" },
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
  { key: "hiringType", label: "Hiring Type", required: true },
  { key: "isActive", label: "Active", type: "checkbox" },
];

export default function HiringTypesPage() {
  return (
    <CrudPage
      title="Hiring Types"
      apiGetAll={hireUsHiringTypeApi.getAll}
      apiCreate={hireUsHiringTypeApi.create}
      apiUpdate={hireUsHiringTypeApi.update}
      apiDelete={hireUsHiringTypeApi.delete}
      columns={columns}
      fields={fields}
      entityName="Hiring Type"
    />
  );
}
