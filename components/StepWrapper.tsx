"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useQuote } from "@/context/QuoteContext";

const steps = [
  "/builder/steps/q1",
  "/builder/steps/q2",
  "/builder/steps/q3",
  "/builder/steps/q4",
  "/builder/steps/q5",
  "/builder/steps/q6",
  "/builder/steps/ui-intro",
  "/builder/steps/ui-editor"
];


export default function StepWrapper({
  title,
  description,
  children,
  nextEnabled = true,
  onNext,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  nextEnabled?: boolean;
  onNext?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { saveQuote } = useQuote();

  const index = steps.indexOf(pathname);
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  const goBack = () => {
    if (!isFirst) router.push(steps[index - 1]);
  };

  const goNext = async () => {
    if (onNext) await onNext();   // let the page handle saving
    if (!isLast) router.push(steps[index + 1]);
  };
  

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-400 mt-1">{description}</p>}
      </div>

      <div>{children}</div>

      <div className="flex justify-between border-t pt-6 mt-8">
        {/* BACK BUTTON */}
        {!isFirst ? (
          <button
            onClick={goBack}
            className="px-5 py-3 rounded border border-gray-500 text-gray-200 hover:bg-gray-700"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {/* NEXT / SAVE BUTTON */}
        <button
          onClick={goNext}
          disabled={!nextEnabled}
          className={`px-6 py-3 rounded text-white ${
            nextEnabled
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
