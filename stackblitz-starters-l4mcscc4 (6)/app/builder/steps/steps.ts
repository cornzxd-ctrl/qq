"use client";

export type Step = {
  id: string;
  label: string;
  path: string;
};

export const STEPS: Step[] = [
  { id: "q1", label: "Q1 – Basic Info", path: "q1" },
  { id: "q1a", label: "Q1A – Extra Details", path: "q1a" },
  { id: "q1b", label: "Q1B – More Data", path: "q1b" },
  { id: "q2", label: "Q2 – Preferences", path: "q2" },
  { id: "q3", label: "Q3 – Options", path: "q3" },
  { id: "q4", label: "Q4 – Review", path: "q4" },
  { id: "q5", label: "Q5 – Final", path: "q5" },
];

export function getStepIndex(stepId: string) {
  return STEPS.findIndex(s => s.id === stepId);
}

export function getNextStep(current: string) {
  const index = getStepIndex(current);
  return index >= 0 && index < STEPS.length - 1 ? STEPS[index + 1].path : null;
}

export function getPrevStep(current: string) {
  const index = getStepIndex(current);
  return index > 0 ? STEPS[index - 1].path : null;
}
