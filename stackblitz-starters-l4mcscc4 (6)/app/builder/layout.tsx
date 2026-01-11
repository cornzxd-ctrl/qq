"use client";

import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const steps = [
  "/builder/data/q1",
  "/builder/data/q1a",
  "/builder/data/q2",
  "/builder/data/q3",
  "/builder/data/q4",
  "/builder/data/q5",
];

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  let index = steps.indexOf(pathname);
  if (index === -1) index = steps.findIndex((s) => pathname.startsWith(s));
  const progress = index >= 0 ? ((index + 1) / steps.length) * 100 : 0;
  const next = index >= 0 && index < steps.length - 1 ? steps[index + 1] : undefined;
  const prev = index > 0 ? steps[index - 1] : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full border-b p-4 flex justify-between items-center bg-white">
        <h1 className="font-semibold text-lg">Experience Builder</h1>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm border px-3 py-1 rounded bg-white hover:bg-gray-50">
            Dev Home
          </Link>
          <button
            className="text-sm border px-3 py-1 rounded bg-white hover:bg-gray-50"
            onClick={() => {
              if (typeof window !== "undefined") window.location.reload();
            }}
            title="Reset (dev)"
          >
            Reset (Dev)
          </button>
        </div>
      </header>

      <div className="w-full bg-gray-200 h-2">
        <div
          className="bg-blue-600 h-2 transition-all"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <main className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname || "builder-unknown"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full p-4 flex justify-between bg-white border-t">
        <div>
          {prev ? (
            <Link href={prev} className="px-4 py-2 border rounded bg-white hover:bg-gray-50">
              ← Back
            </Link>
          ) : (
            <span className="px-4 py-2 text-gray-400">← Back</span>
          )}
        </div>
        <div>
          {next ? (
            <Link href={next} className="px-4 py-2 bg-blue-600 text-white rounded hover:opacity-95">
              Next →
            </Link>
          ) : (
            <span className="px-4 py-2 text-gray-400">Next →</span>
          )}
        </div>
      </footer>
    </div>
  );
}