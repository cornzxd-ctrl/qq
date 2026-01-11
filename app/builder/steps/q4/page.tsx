"use client";

import { useQuote } from "@/context/QuoteContext";
import StepWrapper from "@/components/StepWrapper";

export default function Q4Page() {
  const { data, updateStep } = useQuote();
  const q4 = data.q4 || {};

  const complete = !!q4.startDate && !!q4.timeframe;

  return (
    <StepWrapper
      title="Schedule Details"
      description="When do you need this service?"
      nextEnabled={complete}
    >
      <div className="space-y-4">

        <div>
          <label className="label">Preferred Start Date *</label>
          <input
            type="date"
            className="input"
            value={q4.startDate || ""}
            onChange={(e) =>
              updateStep("q4", { ...q4, startDate: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">Timeframe *</label>
          <select
            className="input"
            value={q4.timeframe || ""}
            onChange={(e) =>
              updateStep("q4", { ...q4, timeframe: e.target.value })
            }
          >
            <option value="">Select...</option>
            <option value="asap">ASAP</option>
            <option value="1-2 weeks">1–2 Weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

      </div>
    </StepWrapper>
  );
}
