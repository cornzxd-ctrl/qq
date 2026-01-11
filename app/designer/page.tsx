"use client";

import { useState } from "react";

export default function DesignerPage() {
  const [showPanel, setShowPanel] = useState(false);

  const [box, setBox] = useState({
    text: "Click me to edit",
    width: 380,
    height: 180,
    bg: "#1f2937",
    color: "#ffffff",
    fontSize: 22,
    font: "sans-serif",
  });

  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* SIDE PANEL */}
      {showPanel && (
        <aside className="w-80 border-r border-gray-800 p-6 bg-gray-900/50 backdrop-blur space-y-6">
          <h2 className="text-lg font-bold">Advanced Controls</h2>

          <div>
            <label className="text-sm text-gray-400">Background</label>
            <input
              type="color"
              className="w-full h-10 rounded mt-1"
              value={box.bg}
              onChange={(e) => setBox({ ...box, bg: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Text Color</label>
            <input
              type="color"
              className="w-full h-10 rounded mt-1"
              value={box.color}
              onChange={(e) => setBox({ ...box, color: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Font Size {box.fontSize}px
            </label>
            <input
              type="range"
              min={12}
              max={60}
              value={box.fontSize}
              onChange={(e) =>
                setBox({ ...box, fontSize: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Width {box.width}px
            </label>
            <input
              type="range"
              min={240}
              max={900}
              value={box.width}
              onChange={(e) =>
                setBox({ ...box, width: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Height {box.height}px
            </label>
            <input
              type="range"
              min={120}
              max={600}
              value={box.height}
              onChange={(e) =>
                setBox({ ...box, height: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Font</label>
            <select
              className="w-full bg-gray-800 border border-gray-700 p-2 rounded mt-1"
              value={box.font}
              onChange={(e) => setBox({ ...box, font: e.target.value })}
            >
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
            </select>
          </div>
        </aside>
      )}

      {/* MAIN CANVAS */}
      <div className="flex-1 flex items-center justify-center relative">

        {/* Toggle Panel */}
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="absolute top-6 left-6 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded hover:bg-gray-700"
        >
          ⚙️ {showPanel ? "Close" : "Advanced"}
        </button>

        {/* FLOATING CONTROLS */}
        <div className="absolute bottom-8 right-8 bg-gray-900/80 border border-gray-700 backdrop-blur rounded-xl p-4 shadow-xl flex flex-wrap gap-2 max-w-[380px]">

          <span className="text-gray-400 text-xs w-full">Quick Controls</span>

          <button
            className="text-xs px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() =>
              setBox((s) => ({ ...s, fontSize: Math.max(10, s.fontSize - 2) }))
            }
          >
            A-
          </button>

          <button
            className="text-xs px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() =>
              setBox((s) => ({ ...s, fontSize: s.fontSize + 2 }))
            }
          >
            A+
          </button>

          <button
            className="text-xs px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() =>
              setBox((s) => ({
                ...s,
                width: Math.max(240, s.width - 20),
                height: Math.max(120, s.height - 10),
              }))
            }
          >
            Shrink
          </button>

          <button
            className="text-xs px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() =>
              setBox((s) => ({
                ...s,
                width: s.width + 20,
                height: s.height + 10,
              }))
            }
          >
            Grow
          </button>

          <button
            className="text-xs px-3 py-1 bg-blue-600 rounded hover:opacity-80"
            onClick={() => setBox((s) => ({ ...s, bg: "#2563eb" }))}>
            Blue
          </button>

          <button
            className="text-xs px-3 py-1 bg-green-600 rounded hover:opacity-80"
            onClick={() => setBox((s) => ({ ...s, bg: "#16a34a" }))}>
            Green
          </button>

          <button
            className="text-xs px-3 py-1 bg-purple-600 rounded hover:opacity-80"
            onClick={() => setBox((s) => ({ ...s, bg: "#7c3aed" }))}>
            Purple
          </button>

          <label className="text-xs px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
            Color
            <input
              type="color"
              className="hidden"
              value={box.bg}
              onChange={(e) => setBox({ ...box, bg: e.target.value })}
            />
          </label>

          <button
            className="text-xs px-3 py-1 bg-red-600 rounded hover:bg-red-500 ml-auto"
            onClick={() =>
              setBox({
                text: "Click me to edit",
                width: 380,
                height: 180,
                bg: "#1f2937",
                color: "#ffffff",
                fontSize: 22,
                font: "sans-serif",
              })
            }
          >
            Reset
          </button>
        </div>

        {/* EDITABLE BOX */}
        <div
          style={{
            width: box.width,
            height: box.height,
            backgroundColor: box.bg,
            color: box.color,
            fontSize: box.fontSize,
            fontFamily: box.font,
          }}
          className="relative rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center text-center select-none transition-all px-4"
          onClick={() => setEditing(true)}
        >
          {editing ? (
            <input
              autoFocus
              value={box.text}
              onBlur={() => setEditing(false)}
              onChange={(e) => setBox({ ...box, text: e.target.value })}
              className="bg-transparent outline-none border-none w-full text-center"
            />
          ) : (
            box.text
          )}
        </div>
      </div>
    </div>
  );
}
