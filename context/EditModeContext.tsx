"use client";

import { createContext, useContext, useState } from "react";

type EditModeContextType = {
  enabled: boolean;
  toggle: () => void;
};

const EditModeContext = createContext<EditModeContextType | null>(null);

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => setEnabled((p) => !p);

  return (
    <EditModeContext.Provider value={{ enabled, toggle }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used inside provider");
  return ctx;
}
