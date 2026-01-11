"use client";

import Link from "next/link";

export default function BuilderEdit() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Edit / Jump To Step</h1>
      <p>Select where you want to go:</p>

      <ul style={{ lineHeight: "2rem", fontSize: "1.1rem" }}>
        <li><Link href="/builder/steps/q1">Q1</Link></li>
        <li><Link href="/builder/steps/q1a">Q1a</Link></li>
        <li><Link href="/builder/steps/q1b">Q1b</Link></li>
        <li><Link href="/builder/steps/q2">Q2</Link></li>
        <li><Link href="/builder/steps/q3">Q3</Link></li>
        <li><Link href="/builder/steps/q4">Q4</Link></li>
        <li><Link href="/builder/steps/q5">Q5</Link></li>
        <li><Link href="/builder/steps/q6">Q6</Link></li>
      </ul>

      <p style={{ marginTop: 20 }}>
        This is mainly for testing / editing navigation.
      </p>
    </div>
  );
}
