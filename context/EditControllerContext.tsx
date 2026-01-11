"use client";

import { createContext, useContext, useState } from "react";

const EditControllerContext = createContext<any>(null);

export function EditControllerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [components, setComponents] = useState<any>({});
  const [selected, setSelected] = useState<string | null>(null);

  const registerComponent = (id: string) => {
    setComponents((prev: any) => {
      if (prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          x: 0,
          y: 0,
        },
      };
    });
  };

  const updatePosition = (id: string, x: number, y: number) => {
    setComponents((prev: any) => ({
      ...prev,
      [id]: {
        ...prev[id],
        x,
        y,
      },
    }));
  };

  return (
    <EditControllerContext.Provider
      value={{
        components,
        selected,
        setSelected,
        registerComponent,
        updatePosition,
      }}
    >
      {children}
    </EditControllerContext.Provider>
  );
}

export function useEditController() {
  const ctx = useContext(EditControllerContext);
  if (!ctx) throw new Error("useEditController must be used inside provider");
  return ctx;
}
