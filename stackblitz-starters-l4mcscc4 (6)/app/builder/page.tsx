"use client";
import Link from "next/link";

export default function BuilderHome() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Builder Wizard</h1>
      <p>Select where you want to go next:</p>

      <ul style={{ lineHeight: "2rem", fontSize: "1.1rem" }}>
        <li>
          <Link href="/builder/data/q1">Go to Q1</Link>
        </li>
        <li>
          <Link href="/builder/data/q1a">Go to Q1a</Link>
        </li>
        <li>
          <Link href="/builder/data/q1b">Go to Q1b</Link>
        </li>
        <li>
          <Link href="/builder/data/q2">Go to Q2</Link>
        </li>
        <li>
          <Link href="/builder/data/q3">Go to Q3</Link>
        </li>
        <li>
          <Link href="/builder/data/q4">Go to Q4</Link>
        </li>
        <li>
          <Link href="/builder/data/q5">Go to Q5</Link>
        </li>
      </ul>

      <p style={{ marginTop: 20 }}>
        If these links work, routing is officially stable and we can safely
        keep building the real app UI.
      </p>
    </div>
  );
}
