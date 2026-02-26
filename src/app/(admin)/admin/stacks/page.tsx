"use client";

import CrudPage from "../components/CrudPage";
import { stacksApi } from "../lib/api";
import "../admin.css";

export default function StacksPage() {
  return (
    <CrudPage
      title="Technology Stacks"
      entityName="Stack"
      apiGetAll={stacksApi.getAll}
      apiCreate={stacksApi.create}
      apiUpdate={stacksApi.update}
      apiDelete={stacksApi.delete}
      columns={[
        {
          key: "serviceImage",
          label: "Image",
          render: (item: any) =>
            item.serviceImage ? <img src={item.serviceImage} alt="" className="cell-img" /> : "—",
        },
        { key: "name", label: "Name" },
        {
          key: "isSlider",
          label: "Slider",
          render: (item: any) => (
            <span className={`admin-badge ${item.isSlider ? "admin-badge-info" : "admin-badge-inactive"}`}>
              {item.isSlider ? "Yes" : "No"}
            </span>
          ),
        },
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
        { key: "name", label: "Name", required: true },
        { key: "serviceImage", label: "Image URL", required: true },
        { key: "isSlider", label: "Show in Slider", type: "checkbox" },
        { key: "isActive", label: "Active", type: "checkbox" },
      ]}
    />
  );
}
