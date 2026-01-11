"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ElementStyle = {
  fontSize?: string;
  color?: string;
  padding?: string;
  textAlign?: "left" | "center" | "right";
  visible?: boolean;
};

export type UIConfigType = {
  header?: ElementStyle;
  companyName?: ElementStyle;
  contactName?: ElementStyle;
  email?: ElementStyle;
  phone?: ElementStyle;
  // extend with more keys as needed
};

const DEFAULT: UIConfigType = {
  header: { fontSize: "20px", color: "#0f172a", padding: "8px 0", textAlign: "left", visible: true },
  companyName: { fontSize: "16px", color: "#111827", padding: "6px 0", textAlign: "left", visible: true },
  contactName: { fontSize: "14px", color: "#111827", padding: "6px 0", textAlign: "left", visible: true },
  email: { fontSize: "14px", color: "#111827", padding: "6px 0", textAlign: "left", visible: true },
  phone: { fontSize: "14px", color: "#111827", padding: "6px 0", textAlign: "left", visible: true },
};

const UIConfigContext = createContext<{
  config: UIConfigType;
  setConfig: (next: UIConfigType) => void;
  updateElement: (key: keyof UIConfigType, patch: Partial<ElementStyle>) => void;
  reset: () => void;
}>({
  config: DEFAULT,
  setConfig: () => {},
  updateElement: () => {},
  reset: () => {},
});

export function UIConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfigState] = useState<UIConfigType>(DEFAULT);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("qq_ui_config");
      if (raw) setConfigState((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("qq_ui_config", JSON.stringify(config));
    } catch (e) {}
  }, [config]);

  const setConfig = (next: UIConfigType) => setConfigState(next);

  const updateElement = (key: keyof UIConfigType, patch: Partial<ElementStyle>) => {
    setConfigState((prev) => ({
      ...prev,
      [key]: { ...(prev[key] || {}), ...patch },
    }));
  };

  const reset = () => {
    setConfigState(DEFAULT);
    try {
      localStorage.removeItem("qq_ui_config");
    } catch {}
  };

  return (
    <UIConfigContext.Provider value={{ config, setConfig, updateElement, reset }}>
      {children}
    </UIConfigContext.Provider>
  );
}

export function useUIConfig() {
  return useContext(UIConfigContext);
}
