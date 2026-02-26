"use client";

import React from "react";

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
}

interface AdminTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  loading?: boolean;
  idKey?: string;
}

export default function AdminTable<T extends Record<string, any>>({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
  loading,
  idKey = "_id",
}: AdminTableProps<T>) {
  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return <div className="admin-empty">No records found.</div>;
  }

  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ textAlign: col.align || "left" }}>{col.label}</th>
            ))}
            {(onView || onEdit || onDelete) && <th style={{ textAlign: "right" }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[idKey]}>
              {columns.map((col) => (
                <td key={col.key} style={{ textAlign: col.align || "left" }}>
                  {col.render ? col.render(item) : String(item[col.key] ?? "")}
                </td>
              ))}
              {(onView || onEdit || onDelete) && (
                <td style={{ textAlign: "right" }}>
                  <div className="actions-cell">
                    {onView && (
                      <button
                        className="admin-btn-sm admin-btn-view"
                        onClick={() => onView(item)}
                      >
                        View
                      </button>
                    )}
                    {onEdit && (
                      <button
                        className="admin-btn-sm admin-btn-edit"
                        onClick={() => onEdit(item)}
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="admin-btn-sm admin-btn-delete"
                        onClick={() => onDelete(item)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
