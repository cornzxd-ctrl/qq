"use client";
import { useState } from "react";

export default function WorkspacePage() {
  const [textSize, setTextSize] = useState(24);
  const [font, setFont] = useState("Arial");
  const [textColor, setTextColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#111111");
  const [boxWidth, setBoxWidth] = useState(300);
  const [boxHeight, setBoxHeight] = useState(150);

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e: any) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onDrag = (e: any) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const stopDrag = () => setDragging(false);

  return (
    <div
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      className="min-h-screen w-full bg-neutral-900 text-white flex"
    >
      {/* Controls */}
      <div className="w-80 bg-neutral-800 p-4 border-r border-neutral-700 space-y-4">
        <h1 className="text-lg font-bold">Designer Controls</h1>

        <div>
          <label>Text Size: {textSize}px</label>
          <input
            type="range"
            min={12}
            max={72}
            value={textSize}
            onChange={(e) => setTextSize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label>Font</label>
          <select
            className="w-full bg-neutral-700 p-2 rounded"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier</option>
            <option value="Georgia">Georgia</option>
            <option value="Impact">Impact</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>

        <div>
          <label>Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label>Box Color</label>
          <input
            type="color"
            value={boxColor}
            onChange={(e) => setBoxColor(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label>Box Width: {boxWidth}px</label>
          <input
            type="range"
            min={150}
            max={600}
            value={boxWidth}
            onChange={(e) => setBoxWidth(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label>Box Height: {boxHeight}px</label>
          <input
            type="range"
            min={100}
            max={400}
            value={boxHeight}
            onChange={(e) => setBoxHeight(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Workspace */}
      <div className="flex-1 relative">
        <div
          onMouseDown={startDrag}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: boxWidth,
            height: boxHeight,
            backgroundColor: boxColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #555",
            cursor: "grab",
          }}
        >
          <span
            style={{
              fontSize: textSize,
