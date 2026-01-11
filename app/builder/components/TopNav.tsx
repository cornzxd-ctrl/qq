"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopNavProps = {
  title?: string;
  showReset?: boolean;
  showHome?: boolean;
  actions?: React.ReactNode;
};

// 🔥 Phase-Ready Global Builder Top Navigation
export default function TopNav({
  title = "Builder System",
  showReset = true,
  showHome = true,
  actions,
}: TopNavProps) {
  const pathname = usePathname();

  const isDev =
    typeof window !== "undefined" &&
    (process.env.NODE_ENV === "development" ||
      location.hostname === "localhost");

  return (
    <header
      style={{
        width: "100%",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      {/* LEFT */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {showHome && (
          <Link
            href="/"
            style={{
              fontSize: "0.9rem",
              border: "1px solid #ddd",
              padding: "6px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#333",
              background: "#fafafa",
            }}
          >
            ⟵ Home
          </Link>
        )}

        <h2 style={{ margin: 0 }}>{title}</h2>

        {/* Breadcrumb indicator */}
        <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>{pathname}</span>
      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {actions && actions}

        {/* Only show Reset in dev environments */}
        {showReset && isDev && (
          <button
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "white",
            }}
            onClick={() => window.location.reload()}
          >
            Reset (Dev)
          </button>
        )}
      </div>
    </header>
  );
}
