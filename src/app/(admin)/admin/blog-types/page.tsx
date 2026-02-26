"use client";

import CrudPage from "../components/CrudPage";
import { blogTypeApi } from "../lib/api";
import "../admin.css";

export default function BlogTypesPage() {
  return (
    <CrudPage
      title="Blog Types"
      entityName="Blog Type"
      apiGetAll={blogTypeApi.getAll}
      apiCreate={blogTypeApi.create}
      apiUpdate={blogTypeApi.update}
      apiDelete={blogTypeApi.delete}
      columns={[
        { key: "type", label: "Type Name" },
        {
          key: "isActive",
          label: "Status",
          render: (item: any) => (
            <span className={`admin-badge ${item.isActive ? "admin-badge-active" : "admin-badge-inactive"}`}>
              {item.isActive ? "Active" : "Inactive"}
            </span>
          ),
        },
      ]}
      fields={[
        { key: "type", label: "Type Name", required: true },
        { key: "isActive", label: "Active", type: "checkbox" },
      ]}
    />
  );
}
