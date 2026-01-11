"use client";

import { useEditController } from "@/context/EditControllerContext";

export default function DesignerPage() {
  const {
    isOpen,
    toggle,
    mode,
    setMode,
    selectedWidget,
    setWidget,
  } = useEditController();

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Designer</h1>

      {/* ---------------- CONTROLLER PANEL ---------------- */}
      <div className="fixed bottom-6 right-6 w-80">
        <div className="bg-white shadow-xl rounded-xl border">
          <div className="flex justify-between items-center p-3 border-b">
            <span className="font-semibold">Edit Controller</span>

            <button
              onClick={toggle}
              className="px-2 py-1 text-sm border rounded hover:bg-gray-50"
            >
              {isOpen ? "Minimize" : "Expand"}
            </button>
          </div>

          {isOpen && (
            <div className="p-4 space-y-4">
              {/* MODE */}
              <div>
                <p className="text-sm font-semibold mb-2">Mode</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode("view")}
                    className={`px-3 py-1 rounded border ${
                      mode === "view" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    View
                  </button>

                  <button
                    onClick={() => setMode("edit")}
                    className={`px-3 py-1 rounded border ${
                      mode === "edit" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setMode("layout")}
                    className={`px-3 py-1 rounded border ${
                      mode === "layout" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    Layout
                  </button>
                </div>
              </div>

              {/* SELECTED WIDGET */}
              <div>
                <p className="text-sm font-semibold mb-2">
                  Selected Widget
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setWidget("header")}
                    className={`px-3 py-1 rounded border ${
                      selectedWidget === "header"
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    Header
                  </button>

                  <button
                    onClick={() => setWidget("hero")}
                    className={`px-3 py-1 rounded border ${
                      selectedWidget === "hero"
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    Hero
                  </button>

                  <button
                    onClick={() => setWidget(null)}
                    className="px-3 py-1 rounded border bg-white"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- LIVE STATUS ---------------- */}
      <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
        <p><strong>Mode:</strong> {mode}</p>
        <p>
          <strong>Selected Widget:</strong>{" "}
          {selectedWidget || "none"}
        </p>
      </div>
    </div>
  );
}
