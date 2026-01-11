"use client";

import { useQuote } from "@/context/QuoteContext";
import StepWrapper from "@/components/StepWrapper";

export default function Q3Page() {
  const { data, updateStep } = useQuote();
  const q3 = data.q3 || {};

  return (
    <StepWrapper
      title="Project Location"
      description="Where is this job taking place?"
      nextEnabled={!!q3.address}
    >
      <div className="space-y-4">
        <div>
          <label className="label">Job Address *</label>
          <input
            className="input"
            value={q3.address || ""}
            onChange={(e) =>
              updateStep("q3", { ...q3, address: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">Additional Notes (Optional)</label>
          <textarea
            className="input"
            value={q3.notes || ""}
            onChange={(e) =>
              updateStep("q3", { ...q3, notes: e.target.value })
            }
          />
        </div>
      </div>
    </StepWrapper>
  );
}
