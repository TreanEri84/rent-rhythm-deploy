import React, { useState } from "react";

export default function MilestoneForm({ onAdd }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label || !amount || !date) return;
    onAdd({ label, amount: Number(amount), date, reached: false });
    setLabel("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Milestone name"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        style={{ flex: "2 1 140px", minWidth: 100, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
      />
      <input
        type="number"
        placeholder="Target amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min={1}
        style={{ flex: "1 1 80px", minWidth: 80, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ flex: "1 1 120px", minWidth: 120, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
      />
      <button type="submit" style={{
        background: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        padding: "0.5rem 1rem",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Add
      </button>
    </form>
  );
}
