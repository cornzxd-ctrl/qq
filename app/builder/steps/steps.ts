

export type Step = {
  id: string;
  label: string;
};

export const STEPS: Step[] = [
  { id: "q1", label: "Q1 – Basic Info" },
  { id: "q2", label: "Q2 – Service Preferences" },
  { id: "q3", label: "Q3 – Finalization" },
  { id: "q4", label: "Q4 – Delivery Timing & Duration" },
  { id: "q5", label: "Q5 – Confirmation" },
];

// -----------------------------
// Step Helpers
// -----------------------------

export function getStepIndex(stepId: string) {
  return STEPS.findIndex((s) => s.id === stepId);
}

// Allow defined steps FIRST
// If not defined or we go past the list → auto-generate qN style
export function getNextStep(current: string) {
  const i = getStepIndex(current);

  if (i >= 0 && i < STEPS.length - 1) {
    return STEPS[i + 1].id;
  }

  // fallback for future pages
  const currentNum = parseInt(current.replace("q", ""));
  if (!isNaN(currentNum)) {
    return `q${currentNum + 1}`;
  }

  return null;
}

// Same logic backwards
export function getPrevStep(current: string) {
  const i = getStepIndex(current);

  if (i > 0) {
    return STEPS[i - 1].id;
  }

  const currentNum = parseInt(current.replace("q", ""));
  if (!isNaN(currentNum) && currentNum > 1) {
    return `q${currentNum - 1}`;
  }

  return null;
}
