"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { departmentsApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "name", label: "Department" },
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
  { key: "name", label: "Department Name", required: true },
  { key: "isActive", label: "Active", type: "checkbox" },
];

export default function DepartmentsPage() {
  return (
    <CrudPage
      title="Departments"
      apiGetAll={departmentsApi.getAll}
      apiCreate={departmentsApi.create}
      apiUpdate={departmentsApi.update}
      apiDelete={departmentsApi.delete}
      columns={columns}
      fields={fields}
      entityName="Department"
    />
  );
}
