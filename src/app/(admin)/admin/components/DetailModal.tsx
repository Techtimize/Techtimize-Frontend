"use client";

import React from "react";
import AdminModal from "./AdminModal";

/* ── Types ──────────────────────────────────────────── */
export interface DetailField {
  key: string;
  label: string;
  render?: (value: any, item: Record<string, any>) => React.ReactNode;
}

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  item: Record<string, any> | null;
  fields: DetailField[];
}

/* ── Component ──────────────────────────────────────── */
export default function DetailModal({
  open,
  onClose,
  title,
  item,
  fields,
}: DetailModalProps) {
  if (!open || !item) return null;

  const renderValue = (field: DetailField) => {
    const value = item[field.key];

    if (field.render) return field.render(value, item);

    // Boolean
    if (typeof value === "boolean") {
      return (
        <span
          className={`admin-badge ${value ? "admin-badge-success" : "admin-badge-danger"}`}
        >
          {value ? "Yes" : "No"}
        </span>
      );
    }

    // Array
    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="detail-empty">—</span>;
      return (
        <div className="detail-tags">
          {value.map((v, i) => (
            <span key={i} className="admin-badge admin-badge-info">
              {typeof v === "object" ? v.name || v.title || v.type || JSON.stringify(v) : String(v)}
            </span>
          ))}
        </div>
      );
    }

    // Object (populated reference)
    if (value && typeof value === "object" && !React.isValidElement(value)) {
      return (
        <span>{value.name || value.title || value.type || JSON.stringify(value)}</span>
      );
    }

    // Null/undefined
    if (value === null || value === undefined || value === "") {
      return <span className="detail-empty">—</span>;
    }

    // String that looks like a URL
    if (typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://"))) {
      // Image URL
      if (/\.(jpg|jpeg|png|gif|webp|svg|ico)(\?.*)?$/i.test(value)) {
        return (
          <div className="detail-image-wrap">
            <img src={value} alt={field.label} className="detail-image" />
            <a href={value} target="_blank" rel="noopener noreferrer" className="detail-link">
              Open image ↗
            </a>
          </div>
        );
      }
      return (
        <a href={value} target="_blank" rel="noopener noreferrer" className="detail-link">
          {value}
        </a>
      );
    }

    // Color value
    if (typeof value === "string" && /^#([0-9A-Fa-f]{3,8})$/.test(value)) {
      return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              background: value,
              border: "1px solid #d1d5db",
              display: "inline-block",
            }}
          />
          {value}
        </span>
      );
    }

    // Long text
    if (typeof value === "string" && value.length > 150) {
      return <div className="detail-long-text">{value}</div>;
    }

    return <span>{String(value)}</span>;
  };

  return (
    <AdminModal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <button className="admin-btn-secondary" onClick={onClose}>
          Close
        </button>
      }
    >
      <div className="detail-grid">
        {fields.map((field) => (
          <div className="detail-row" key={field.key}>
            <div className="detail-label">{field.label}</div>
            <div className="detail-value">{renderValue(field)}</div>
          </div>
        ))}
      </div>
    </AdminModal>
  );
}
