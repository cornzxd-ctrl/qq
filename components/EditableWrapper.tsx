"use client";

import { useState } from "react";
import { useEditController } from "@/context/EditControllerContext";

export default function EditableWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { target, setTarget, editMode, snap } = useEditController()!;

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState<{ width?: number; height?: number }>({});

  const isSelected = target === id;

  function handleMouseDown(e: any) {
    if (!editMode) return;
    setTarget(id);

    const startX = e.clientX;
    const startY = e.clientY;
    const startPos = { ...pos };

    const move = (ev: any) => {
      let newX = startPos.x + (ev.clientX - startX);
      let newY = startPos.y + (ev.clientY - startY);

      if (snap) {
        newX = Math.round(newX / 10) * 10;
        newY = Math.round(newY / 10) * 10;
      }

      setPos({ x: newX, y: newY });
    };

    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  }

  function handleResize(e: any) {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;

    const move = (ev: any) => {
      setSize({
        width: size.width
          ? size.width + (ev.clientX - startX)
          : undefined,
        height: size.height
          ? size.height + (ev.clientY - startY)
          : undefined,
      });
    };

    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: editMode ? "relative" : "static",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        width: size.width,
        height: size.height,
        border: isSelected
          ? "2px solid rgba(0,150,255,1)"
          : "2px solid transparent",
        borderRadius: 6,
        padding: 4,
        cursor: editMode ? "grab" : "default",
      }}
    >
      {children}

      {isSelected && (
        <div
          onMouseDown={handleResize}
          style={{
            width: 14,
            height: 14,
            background: "white",
            borderRadius: "50%",
            border: "2px solid black",
            position: "absolute",
            bottom: -8,
            right: -8,
            cursor: "nwse-resize",
          }}
        />
      )}
    </div>
  );
}
