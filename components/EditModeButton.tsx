"use client";

import { useEditMode } from "@/context/EditModeContext";

export default function EditModeButton() {
  const { enabled, toggle } = useEditMode();

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-[99999] px-4 py-2 rounded-xl
      bg-purple-600 text-white shadow-lg border border-purple-300"
    >
      {enabled ? "Editing Enabled" : "Enable Edit Mode"}
    </button>
  );
}