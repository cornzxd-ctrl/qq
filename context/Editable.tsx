"use client";
import { useEffect, useRef } from "react";
import { useEditController } from "@/context/EditControllerContext";

export default function Editable({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { registerComponent, updatePosition, selected, setSelected } =
    useEditController();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerComponent(id);
  }, [id]);

  function onDrag(e: React.MouseEvent) {
    if (!ref.current) return;
    updatePosition(id, e.clientX, e.clientY);
  }

  return (
    <div
      ref={ref}
      onClick={() => setSelected(id)}
      onMouseMove={(e) => selected === id && onDrag(e)}
      className="relative cursor-move"
    >
      {children}
    </div>
  );
}
