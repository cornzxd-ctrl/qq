"use client";

import { useQuote } from "@/context/QuoteContext";
import StepWrapper from "@/components/StepWrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Confetti from "react-confetti";

export default function Q6Page() {
  const { data } = useQuote();
  const router = useRouter();

  const [celebrate, setCelebrate] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    try {
      setLoading(true);

      // enable fireworks 🎉
      setCelebrate(true);

      // save before transition
      await fetch("/api/saveQuote", {
        method: "POST",
        body: JSON.stringify(data),
      });

      // small celebration delay
      setTimeout(() => {
        router.push("/designer");
      }, 1400);
    } catch (err) {
      console.error(err);
      alert("Save failed — try again.");
      setLoading(false);
      setCelebrate(false);
    }
  }

  const q1 = data.q1 || {};
  const q2 = data.q2 || {};
  const q3 = data.q3 || {};
  const q4 = data.q4 || {};
  const q5 = data.q5 || {};

  return (
    <>
      {celebrate && <Confetti recycle={false} numberOfPieces={500} />}

      <StepWrapper
        title="Review Your Setup"
        description="Here’s a clean preview of what your final product will use."
        nextEnabled={false}
      >
        <div className="space-y-6">

          <div className="text-green-400 font-semibold text-center">
            ✔ All steps completed — ready to design your quote!
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              {q1.companyName || "Your Company"}
            </h2>
            <p className="opacity-80">
              {q1.contactName || "Primary Contact"} — {q1.email || "email"}
            </p>
            {q1.website && <p className="opacity-80">{q1.website}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3 text-white">Service</h3>
              <p className="text-gray-300">{q2.serviceType || "—"}</p>
              <p className="bg-black/40 text-gray-300 p-2 rounded text-sm mt-1">
                {q2.description || "No description"}
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3 text-white">Location</h3>
              <p className="text-gray-300">{q3.address || "—"}</p>
              <p className="text-gray-300">{q3.city} {q3.state} {q3.zip}</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3 text-white">Schedule</h3>
              <p className="text-gray-300">Start: {q4.startDate || "—"}</p>
              <p className="text-gray-300">Timeframe: {q4.timeframe || "—"}</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3 text-white">Budget</h3>
              <p className="text-gray-300">
                {q5.budget ? `$${q5.budget}` : "—"}
              </p>
              {q5.notes && (
                <p className="bg-black/40 text-gray-300 p-2 rounded text-sm mt-2">
                  {q5.notes}
                </p>
              )}
            </div>
          </div>

          <details className="bg-black/40 border border-gray-700 rounded p-4 text-sm text-green-400">
            <summary className="cursor-pointer text-gray-300">Developer View</summary>
            <pre className="mt-3 overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>

          <div className="pt-4 border-t border-gray-700">
            <button
              disabled={loading}
              onClick={handleContinue}
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow disabled:opacity-50"
            >
              {loading ? "Saving & Preparing..." : "Continue to Designer →"}
            </button>
          </div>
        </div>
      </StepWrapper>
    </>
  );
}
