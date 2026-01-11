"use client";

import { QuoteProvider } from "@/context/QuoteContext";
import { EditControllerProvider } from "@/context/EditControllerContext";
import EditController from "@/app/components/EditController";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      <EditControllerProvider>
        {children}
        <EditController />
      </EditControllerProvider>
    </QuoteProvider>
  );
}
