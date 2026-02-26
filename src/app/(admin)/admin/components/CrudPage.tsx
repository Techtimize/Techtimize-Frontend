"use client";

import React, { useState, useEffect, useCallback } from "react";
import DashboardLayout from "./DashboardLayout";
import AdminTable from "./AdminTable";
import AdminModal from "./AdminModal";
import ConfirmDialog from "./ConfirmDialog";
import DetailModal, { DetailField } from "./DetailModal";

/* ── Types ──────────────────────────────────────────── */
export interface FieldConfig {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select" | "checkbox" | "tags";
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  half?: boolean; // render in half-width row
}

export interface ColumnConfig<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
}

export interface FormContext<T> {
  formData: Record<string, any>;
  updateField: (key: string, val: any) => void;
  editingItem: T | null;
}

interface CrudPageProps<T> {
  title: string;
  apiGetAll: () => Promise<any>;
  apiCreate: (data: any) => Promise<any>;
  apiUpdate: (id: string, data: any) => Promise<any>;
  apiDelete: (id: string) => Promise<any>;
  columns: ColumnConfig<T>[];
  fields?: FieldConfig[];
  renderForm?: (ctx: FormContext<T>) => React.ReactNode;
  detailFields?: DetailField[];
  defaultFormData?: () => Record<string, any>;
  onBeforeEdit?: (item: T) => Record<string, any>;
  dataExtractor?: (res: any) => T[];
  idKey?: string;
  entityName?: string;
  onModalOpen?: () => void;
  deleteMessage?: string;
}

export default function CrudPage<T extends Record<string, any>>({
  title,
  apiGetAll,
  apiCreate,
  apiUpdate,
  apiDelete,
  columns,
  fields,
  renderForm,
  detailFields,
  defaultFormData,
  onBeforeEdit,
  dataExtractor,
  idKey = "_id",
  entityName = "item",
  onModalOpen,
  deleteMessage,
}: CrudPageProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<T | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewItem, setViewItem] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiGetAll();
      const extracted = dataExtractor ? dataExtractor(res) : (res.data ?? res);
      setData(Array.isArray(extracted) ? extracted : []);
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [apiGetAll, dataExtractor]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openCreate = () => {
    setEditingItem(null);
    if (defaultFormData) {
      setFormData(defaultFormData());
    } else if (fields) {
      const initial: Record<string, any> = {};
      fields.forEach((f) => {
        initial[f.key] = f.type === "checkbox" ? false : f.type === "tags" ? [] : "";
      });
      setFormData(initial);
    } else {
      setFormData({});
    }
    setError("");
    onModalOpen?.();
    setModalOpen(true);
  };

  const openEdit = (item: T) => {
    setEditingItem(item);
    if (onBeforeEdit) {
      setFormData(onBeforeEdit(item));
    } else if (fields) {
      const initial: Record<string, any> = {};
      fields.forEach((f) => {
        if (f.type === "tags") {
          initial[f.key] = Array.isArray(item[f.key]) ? item[f.key] : [];
        } else {
          initial[f.key] = item[f.key] ?? (f.type === "checkbox" ? false : "");
        }
      });
      setFormData(initial);
    } else {
      setFormData({});
    }
    setError("");
    onModalOpen?.();
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      if (editingItem) {
        await apiUpdate(editingItem[idKey], formData);
        setSuccess(`${entityName} updated successfully.`);
      } else {
        await apiCreate(formData);
        setSuccess(`${entityName} created successfully.`);
      }
      setModalOpen(false);
      fetchData();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await apiDelete(deleteTarget[idKey]);
      setSuccess(`${entityName} deleted successfully.`);
      setDeleteTarget(null);
      fetchData();
    } catch (err: any) {
      setError(err.message || "Failed to delete.");
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  };

  // Auto-clear messages
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const updateField = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Group fields: pair up half-width fields
  const renderFields = () => {
    if (!fields) return null;
    const elements: React.ReactNode[] = [];
    let i = 0;
    while (i < fields.length) {
      const f = fields[i];
      if (f.half && i + 1 < fields.length && fields[i + 1].half) {
        const f2 = fields[i + 1];
        elements.push(
          <div className="admin-form-row" key={`${f.key}-${f2.key}`}>
            {renderField(f)}
            {renderField(f2)}
          </div>
        );
        i += 2;
      } else {
        elements.push(<React.Fragment key={f.key}>{renderField(f)}</React.Fragment>);
        i++;
      }
    }
    return elements;
  };

  const renderField = (f: FieldConfig) => {
    if (f.type === "checkbox") {
      return (
        <div className="admin-form-group" key={f.key}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={!!formData[f.key]}
              onChange={(e) => updateField(f.key, e.target.checked)}
              style={{ width: "auto" }}
            />
            {f.label}
          </label>
        </div>
      );
    }
    if (f.type === "select") {
      return (
        <div className="admin-form-group" key={f.key}>
          <label>{f.label}</label>
          <select
            value={formData[f.key] ?? ""}
            onChange={(e) => updateField(f.key, e.target.value)}
          >
            <option value="">Select {f.label}</option>
            {f.options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      );
    }
    if (f.type === "textarea") {
      return (
        <div className="admin-form-group" key={f.key}>
          <label>{f.label}</label>
          <textarea
            placeholder={f.placeholder || `Enter ${f.label.toLowerCase()}`}
            value={formData[f.key] ?? ""}
            onChange={(e) => updateField(f.key, e.target.value)}
            required={f.required}
          />
        </div>
      );
    }
    if (f.type === "tags") {
      const tags: string[] = formData[f.key] || [];
      return (
        <div className="admin-form-group" key={f.key}>
          <label>{f.label}</label>
          <input
            placeholder="Type and press Enter"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const val = (e.target as HTMLInputElement).value.trim();
                if (val && !tags.includes(val)) {
                  updateField(f.key, [...tags, val]);
                  (e.target as HTMLInputElement).value = "";
                }
              }
            }}
          />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="admin-badge admin-badge-info"
                style={{ cursor: "pointer" }}
                onClick={() => updateField(f.key, tags.filter((_, i) => i !== idx))}
              >
                {tag} ×
              </span>
            ))}
          </div>
        </div>
      );
    }
    // text / number
    return (
      <div className="admin-form-group" key={f.key}>
        <label>{f.label}</label>
        <input
          type={f.type === "number" ? "number" : "text"}
          placeholder={f.placeholder || `Enter ${f.label.toLowerCase()}`}
          value={formData[f.key] ?? ""}
          onChange={(e) =>
            updateField(f.key, f.type === "number" ? Number(e.target.value) : e.target.value)
          }
          required={f.required}
        />
      </div>
    );
  };

  return (
    <DashboardLayout>
      {success && <div className="admin-success-message">{success}</div>}
      {error && !modalOpen && <div className="admin-error-message">{error}</div>}

      <div className="admin-page-header">
        <h2>{title}</h2>
        <button className="admin-btn-add" onClick={openCreate}>
          + Add {entityName}
        </button>
      </div>

      <AdminTable
        columns={columns}
        data={data}
        loading={loading}
        onView={(item) => setViewItem(item)}
        onEdit={openEdit}
        onDelete={(item) => setDeleteTarget(item)}
        idKey={idKey}
      />

      {/* View Detail Modal */}
      <DetailModal
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={`${entityName} Details`}
        item={viewItem}
        fields={detailFields || (fields ? fields.map((f) => ({ key: f.key, label: f.label })) : [])}
      />

      {/* Create / Edit Modal */}
      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingItem ? `Edit ${entityName}` : `Create ${entityName}`}
        footer={
          <>
            <button className="admin-btn-secondary" onClick={() => setModalOpen(false)} disabled={saving}>
              Cancel
            </button>
            <button
              className="admin-btn-add"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : editingItem ? "Update" : "Create"}
            </button>
          </>
        }
      >
        {error && modalOpen && <div className="admin-error-message">{error}</div>}
        {renderForm ? renderForm({ formData, updateField, editingItem }) : renderFields()}
      </AdminModal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleting}
        title={`Delete ${entityName}?`}
        message={deleteMessage || `Are you sure you want to delete this ${entityName.toLowerCase()}? This action cannot be undone.`}
      />
    </DashboardLayout>
  );
}
