"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Q2 Page</h1>
      <p>Q2 works.</p>

      <div style={{ marginTop: 30, display:"flex", gap:20 }}>
        <Link href="/builder/data/q1a">← Back</Link>
        <Link href="/builder/data/q3">Continue →</Link>
      </div>
    </div>
  );
}
