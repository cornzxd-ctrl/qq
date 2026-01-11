"use client";

import { useEditController } from "@/context/EditControllerContext";

export default function EditController() {
  const { target, setTarget, editMode, setEditMode, snap, setSnap } =
    useEditController()!;

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-white/10 flex flex-col gap-3"
    >
      <div className="text-sm opacity-80">Editor HUD</div>

      <button
        onClick={() => setEditMode(!editMode)}
        className={`px-3 py-2 rounded-lg text-sm ${
          editMode ? "bg-green-500" : "bg-neutral-700"
        }`}
      >
        {editMode ? "Editing Enabled" : "Enable Edit Mode"}
      </button>

      <button
        onClick={() => setSnap(!snap)}
        className={`px-3 py-2 rounded-lg text-sm ${
          snap ? "bg-blue-500" : "bg-neutral-700"
        }`}
      >
        Snap: {snap ? "ON" : "OFF"}
      </button>

      {target && (
        <button
          onClick={() => setTarget(null)}
          className="px-3 py-2 rounded-lg text-sm bg-red-500"
        >
          Clear Selection
        </button>
      )}
    </div>
  );
}
