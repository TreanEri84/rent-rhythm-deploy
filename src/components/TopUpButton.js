import React, { useState } from "react";

export default function TopUpButton({ topUp }) {
  const [amount, setAmount] = useState("");

  const handleTopUp = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0) {
      topUp(amt);
      setAmount("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="number"
        value={amount}
        min="1"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Add amount"
        style={{ padding: "0.5rem", borderRadius: 8, border: "1px solid #ccc" }}
      />
      <button
        onClick={handleTopUp}
        style={{
          background: "var(--accent, #4caf50)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Top Up Savings
      </button>
    </div>
  );
}
