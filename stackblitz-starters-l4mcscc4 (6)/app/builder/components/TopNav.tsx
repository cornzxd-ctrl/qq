export default function TopNav() {
  return (
    <header style={{ width: "100%", padding: "1rem 2rem", borderBottom: "1px solid #e5e5e5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2 style={{ margin: 0 }}>Builder System</h2>
      <button style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #ccc", background: "white" }} onClick={() => window.location.reload()}>
        Reset (Dev)
      </button>
    </header>
  );
}
