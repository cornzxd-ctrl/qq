"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type QuoteData = {
  q1?: any;
  q2?: any;
  q3?: any;
  q4?: any;
  q5?: any;
  q6?: any;
};

type QuoteContextType = {
  data: QuoteData;
  updateStep: (step: keyof QuoteData, value: any) => void;
  reset: () => void;

  // 🔥 new UX helpers
  stepValid: Record<string, boolean>;
  setStepValid: (step: string, status: boolean) => void;
};

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<QuoteData>({});
  const [stepValid, setStepValidState] = useState<Record<string, boolean>>({});

  const updateStep = (step: keyof QuoteData, value: any) => {
    setData(prev => ({ ...prev, [step]: value }));
  };

  const setStepValid = (step: string, status: boolean) => {
    setStepValidState(prev => ({ ...prev, [step]: status }));
  };

  const reset = () => setData({});

  return (
    <QuoteContext.Provider value={{ data, updateStep, reset, stepValid, setStepValid }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
