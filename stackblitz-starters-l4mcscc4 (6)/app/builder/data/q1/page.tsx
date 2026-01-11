"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Q1 — Initial Data Capture</h1>
      <p>We start collecting core setup information here.</p>

      <div style={{ marginTop: 30 }}>
        <Link href="/builder/data/q1a">
          <button>Continue →</button>
        </Link>
      </div>
    </div>
  );
}
