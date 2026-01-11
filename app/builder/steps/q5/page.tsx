"use client";

import { useQuote } from "@/context/QuoteContext";
import StepWrapper from "@/components/StepWrapper";

export default function Q5Page() {
  const { data, updateStep } = useQuote();
  const q5 = data.q5 || {};

  const complete = !!q5.budget;

  return (
    <StepWrapper
      title="Budget & Scope"
      description="Help us estimate the right solution."
      nextEnabled={complete}
    >
      <div className="space-y-4">

        <div>
          <label className="label">Estimated Budget *</label>
          <input
            type="number"
            className="input"
            value={q5.budget || ""}
            onChange={(e) =>
              updateStep("q5", { ...q5, budget: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">Additional Notes (Optional)</label>
          <textarea
            className="input"
            value={q5.notes || ""}
            onChange={(e) =>
              updateStep("q5", { ...q5, notes: e.target.value })
            }
          />
        </div>

      </div>
    </StepWrapper>
  );
}
