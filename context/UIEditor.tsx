"use client";

import React, { useEffect, useState } from "react";
import { useUIConfig } from "@/context/UIConfig";

const ELEMENT_KEYS: Array<{ key: keyof import("../context/UIConfig").UIConfigType; label: string }> = [
  { key: "header", label: "Header" },
  { key: "companyName", label: "Company Name" },
  { key: "contactName", label: "Primary Contact" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
];

export default function UIEditor() {
  const { config, updateElement, reset } = useUIConfig();
  const [selected, setSelected] = useState<keyof typeof config>("companyName");
  const [local, setLocal] = useState<any>({});

  useEffect(() => {
    setLocal(config[selected] || {});
  }, [selected, config]);

  function applyChange(field: string, value: any) {
    const patch = { ...(local || {}) } as any;
    patch[field] = value;
    setLocal(patch);
    updateElement(selected, patch);
  }

  return (
    <div style={{
      position: "fixed",
      right: 18,
      top: 90,
      width: 300,
      background: "white",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(2,6,23,0.08)",
      zIndex: 9999,
      padding: 12,
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <strong style={{ fontSize: 13 }}>UI Editor (dev)</strong>
        <div>
          <button onClick={() => reset()} style={{ marginLeft: 6, fontSize: 12 }}>Reset</button>
        </div>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Element</label>
        <select
          value={selected as string}
          onChange={(e) => setSelected(e.target.value as any)}
          style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6 }}
        >
          {ELEMENT_KEYS.map((el) => (<option key={String(el.key)} value={String(el.key)}>{el.label}</option>))}
        </select>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Font size (px)</label>
        <input
          type="number"
          value={parseInt(local?.fontSize || "16")}
          onChange={(e) => applyChange("fontSize", `${Math.max(10, Number(e.target.value))}px`)}
          style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Color</label>
        <input
          type="color"
          value={local?.color || "#111827"}
          onChange={(e) => applyChange("color", e.target.value)}
          style={{ width: "100%", padding: 6, marginTop: 6, borderRadius: 6, height: 40 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Padding (CSS)</label>
        <input
          value={local?.padding || "6px 0"}
          onChange={(e) => applyChange("padding", e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Alignment</label>
        <select
          value={local?.textAlign || "left"}
          onChange={(e) => applyChange("textAlign", e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6 }}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
        <label style={{ fontSize: 12, color: "#374151" }}>Visible</label>
        <input
          type="checkbox"
          checked={local?.visible ?? true}
          onChange={(e) => applyChange("visible", Boolean(e.target.checked))}
        />
      </div>

      <div style={{ fontSize: 11, color: "#6B7280", marginTop: 10 }}>
        Changes saved to localStorage and applied live.
      </div>
    </div>
  );
}
