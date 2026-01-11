"use client";

import { EditModeProvider } from "@/context/EditModeContext";
import { EditControllerProvider } from "@/context/EditControllerContext";
import { QuoteProvider } from "@/context/QuoteContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EditModeProvider>
      <EditControllerProvider>
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </EditControllerProvider>
    </EditModeProvider>
  );
}
