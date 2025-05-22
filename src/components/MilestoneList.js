import React from "react";

export default function MilestoneList({ milestones, savings, onMarkReached }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Milestones</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {milestones.length === 0 && (
          <li style={{ color: "#888", fontStyle: "italic", padding: "0.5rem" }}>
            No milestones yet. Add one above!
          </li>
        )}
        {milestones.map((m, idx) => (
          <li
            key={idx}
            style={{
              background: m.reached ? "#e0ffe0" : "#f5f5f5",
              margin: "0.5rem 0",
              padding: "1rem",
              borderRadius: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            aria-label={`Milestone ${m.label}${m.reached ? " (reached)" : ""}`}
          >
            <div>
              <div style={{ fontWeight: "bold" }}>{m.label}</div>
              <div style={{ fontSize: 14, color: "#888" }}>
                Target: ${m.amount} by {m.date}
              </div>
              <div style={{ fontSize: 14 }}>
                Progress: ${Math.min(savings, m.amount)} / ${m.amount}
              </div>
            </div>
            {!m.reached && savings >= m.amount && (
              <button
                onClick={() => onMarkReached(idx)}
                style={{
                  background: "#4caf50",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                  cursor: "pointer"
                }}
                aria-label={`Mark ${m.label} as reached`}
              >
                Mark as Reached
              </button>
            )}
            {m.reached && (
              <span style={{ color: "#388e3c", fontWeight: "bold" }} aria-label="Reached milestone">
                ✓ Reached
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
