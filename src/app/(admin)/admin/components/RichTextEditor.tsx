"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill + CSS to prevent SSR and build-resolution issues
const ReactQuill = dynamic(
  () => import("react-quill-new").then((mod) => {
    require("react-quill-new/dist/quill.snow.css");
    return mod;
  }),
  {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: 200,
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#94a3b8",
        fontSize: 14,
      }}
    >
      Loading editor...
    </div>
  ),
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your content here...",
}: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        ["blockquote", { list: "ordered" }, { list: "bullet" }, { align: [] }],
        ["link", "image", "clean"],
      ],
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "blockquote",
    "list",
    "align",
    "link",
    "image",
  ];

  return (
    <div className="rich-text-editor-wrapper">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
}
