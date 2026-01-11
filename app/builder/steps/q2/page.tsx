"use client";
import { useQuote } from "@/context/QuoteContext";

export default function Q2Page() {
  const { data, updateStep } = useQuote();
  const q2 = data.q2 || {};

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Q2 – Service Details</h2>

      {/* SERVICE TYPE */}
      <div>
        <label className="block mb-1 font-medium">Service Type</label>
        <select
          className="border rounded p-2 w-full"
          value={q2.serviceType || ""}
          onChange={(e) =>
            updateStep("q2", {
              ...q2,
              serviceType: e.target.value,
            })
          }
        >
          <option value="">Select...</option>
          <option value="dumpster">Dumpster Rental</option>
          <option value="cleanup">Junk Cleanup</option>
          <option value="construction">Construction Waste</option>
        </select>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block mb-1 font-medium">Job Description</label>
        <textarea
          className="border rounded p-2 w-full"
          rows={3}
          value={q2.description || ""}
          onChange={(e) =>
            updateStep("q2", {
              ...q2,
              description: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
