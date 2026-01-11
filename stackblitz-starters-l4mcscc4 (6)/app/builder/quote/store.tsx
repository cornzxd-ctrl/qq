"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type QuoteOption = {
  id: string;
  label: string;
  description?: string;
  price: number;
};

export type QuoteData = {
  companyName: string;
  industry?: string;
  address?: string;
  employees?: number;
  selectedOptionIds: string[];
};

type QuoteStore = {
  data: QuoteData;
  setCompany: (patch: Partial<QuoteData>) => void;
  toggleOption: (id: string) => void;
  reset: () => void;
  calculateTotal: () => { base: number; options: number; total: number };
  AVAILABLE_OPTIONS: QuoteOption[];
};

const defaultData: QuoteData = {
  companyName: "",
  industry: "",
  address: "",
  employees: undefined,
  selectedOptionIds: [],
};

const AVAILABLE_OPTIONS: QuoteOption[] = [
  { id: "branding", label: "Branding pack", description: "Logo + color palette", price: 1200 },
  { id: "analytics", label: "Analytics integration", description: "Tracking + dashboards", price: 800 },
  { id: "support", label: "Priority support (12mo)", description: "Faster SLA", price: 600 },
  { id: "custom_dev", label: "Custom development", description: "Per-project dev", price: 2500 },
];

const QuoteContext = createContext<QuoteStore | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<QuoteData>(defaultData);

  const setCompany = (patch: Partial<QuoteData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const toggleOption = (id: string) =>
    setData((prev) =>
      prev.selectedOptionIds.includes(id)
        ? { ...prev, selectedOptionIds: prev.selectedOptionIds.filter((x) => x !== id) }
        : { ...prev, selectedOptionIds: [...prev.selectedOptionIds, id] }
    );

  const reset = () => setData(defaultData);

  const calculateTotal = () => {
    const base = 500;
    const empMultiplier = data.employees && data.employees > 50 ? 1.2 : 1;
    const options = data.selectedOptionIds
      .map((id) => AVAILABLE_OPTIONS.find((o) => o.id === id)?.price ?? 0)
      .reduce((a, b) => a + b, 0);
    const total = Math.round((base * empMultiplier + options) * 100) / 100;
    return { base: Math.round(base * empMultiplier), options, total };
  };

  const store: QuoteStore = {
    data,
    setCompany,
    toggleOption,
    reset,
    calculateTotal,
    AVAILABLE_OPTIONS,
  };

  return <QuoteContext.Provider value={store}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
