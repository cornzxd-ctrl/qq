"use client";

import { useRouter } from "next/navigation";
import { STEPS, getNextStep, getPrevStep } from "../data/steps";

export default function StepPage({ params }: { params: { step: string } }) {
  const router = useRouter();
  const { step } = params;

  const StepComponent = require(`../steps/${step}/page.tsx`).default;

  const next = getNextStep(step);
  const prev = getPrevStep(step);

  const currentStep = STEPS.find(s => s.id === step);

  if (!currentStep) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">Step not found</h1>
        <button
          onClick={() => router.push("/builder/q1")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go to Start
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Quote Builder</h1>
        <p className="text-sm text-gray-500">Step: {currentStep.label}</p>
      </header>

      <main className="bg-white p-6 rounded shadow-sm">
        <StepComponent />
      </main>

      <footer className="mt-6 flex justify-between">
        <button
          disabled={!prev}
          onClick={() => prev && router.push(`/builder/${prev}`)}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          ← Back
        </button>

        <button
          disabled={!next}
          onClick={() => next && router.push(`/builder/${next}`)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-40"
        >
          Next →
        </button>
      </footer>
    </div>
  );
}
