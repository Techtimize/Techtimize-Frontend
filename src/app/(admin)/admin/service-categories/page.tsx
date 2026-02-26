"use client";

import CrudPage from "../components/CrudPage";
import { servicesCategoryApi } from "../lib/api";
import "../admin.css";

export default function ServiceCategoriesPage() {
  return (
    <CrudPage
      title="Service Categories"
      entityName="Category"
      apiGetAll={servicesCategoryApi.getAll}
      apiCreate={servicesCategoryApi.create}
      apiUpdate={servicesCategoryApi.update}
      apiDelete={servicesCategoryApi.delete}
      columns={[
        {
          key: "categoryIcon",
          label: "Icon",
          render: (item: any) =>
            item.categoryIcon ? (
              <img
                src={item.categoryIcon}
                alt=""
                className="cell-img"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            ) : "—",
        },
        { key: "categoryName", label: "Name" },
        {
          key: "about",
          label: "About",
          render: (item: any) => (
            <span className="cell-truncate" style={{ display: "block" }}>
              {item.about || "—"}
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
        { key: "categoryName", label: "Category Name", required: true },
        { key: "categoryIcon", label: "Icon URL" },
        { key: "about", label: "About", type: "textarea" },
        { key: "isActive", label: "Active", type: "checkbox" },
      ]}
    />
  );
}
