"use client";

import CrudPage, { FieldConfig, ColumnConfig } from "../components/CrudPage";
import { faqApi } from "../lib/api";
import "../admin.css";

const columns: ColumnConfig<any>[] = [
  { key: "question", label: "Question" },
  {
    key: "answer",
    label: "Answer",
    render: (item: any) => (
      <span>{(item.answer || "").substring(0, 100)}{(item.answer || "").length > 100 ? "…" : ""}</span>
    ),
  },
  {
    key: "isActive",
    label: "Status",
    align: "center",
    render: (item: any) => (
      <span className={`admin-badge ${item.isActive !== false ? "admin-badge-success" : "admin-badge-danger"}`}>
        {item.isActive !== false ? "Active" : "Inactive"}
      </span>
    ),
  },
];

const fields: FieldConfig[] = [
  { key: "question", label: "Question", required: true },
  { key: "answer", label: "Answer", type: "textarea", required: true },
];

export default function FaqsPage() {
  return (
    <CrudPage
      title="FAQs"
      apiGetAll={faqApi.getAll}
      apiCreate={faqApi.create}
      apiUpdate={faqApi.update}
      apiDelete={faqApi.delete}
      columns={columns}
      fields={fields}
      entityName="FAQ"
    />
  );
}
