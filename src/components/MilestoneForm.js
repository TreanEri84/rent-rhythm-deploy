import React, { useState } from "react";

export default function MilestoneForm({ onAdd }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(""); // User feedback for invalid input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label || !amount || !date) {
      setError("Please fill out all fields.");
      return;
    }
    if (Number(amount) <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }
    setError("");
    onAdd({ label, amount: Number(amount), date, reached: false });
    setLabel("");
    setAmount("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "2rem",
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "flex-end",
      }}
      aria-label="Add a savings milestone"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="milestone-label" style={{ fontSize: 12, marginBottom: 2 }}>
          Name
        </label>
        <input
          id="milestone-label"
          type="text"
          placeholder="Milestone name"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={{
            flex: "2 1 140px",
            minWidth: 100,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          autoFocus
          aria-required="true"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="milestone-amount" style={{ fontSize: 12, marginBottom: 2 }}>
          Amount
        </label>
        <input
          id="milestone-amount"
          type="number"
          placeholder="Target amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={1}
          style={{
            flex: "1 1 80px",
            minWidth: 80,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          aria-required="true"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="milestone-date" style={{ fontSize: 12, marginBottom: 2 }}>
          Date
        </label>
        <input
          id="milestone-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            flex: "1 1 120px",
            minWidth: 120,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        style={{
          background: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer",
          height: 40,
        }}
        aria-label="Add milestone"
      >
        Add
      </button>
      {error && (
        <div style={{ color: "red", width: "100%", fontSize: 13, marginTop: 4 }}>
          {error}
        </div>
      )}
    </form>
  );
}
