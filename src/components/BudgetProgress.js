import React from "react";

export default function BudgetProgress({ savings, goal }) {
  const percent = Math.min(
    (Number(savings || 0) / Number(goal || 1)) * 100,
    100
  );

  return (
    <div style={{ margin: "1rem 0" }}>
      <div
        style={{
          background: "#eee",
          borderRadius: 10,
          height: 24,
          width: "100%",
          overflow: "hidden",
          marginBottom: 6,
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #4caf50 70%, #81c784 100%)",
            width: `${percent}%`,
            height: "100%",
            borderRadius: 10,
            transition: "width 0.5s",
          }}
        />
      </div>
      <div style={{ fontWeight: "bold" }}>
        ${typeof savings === "number" ? savings.toLocaleString() : (Number(savings) || 0).toLocaleString()} / ${typeof goal === "number" ? goal.toLocaleString() : (Number(goal) || 0).toLocaleString()} saved
      </div>
    </div>
  );
}
