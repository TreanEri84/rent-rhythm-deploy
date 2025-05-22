import React from "react";

export default function BudgetProgress({ savings, goal }) {
  // Ensure savings and goal are defined numbers for calculations and formatting
  const safeSavings = typeof savings === "number" && !isNaN(savings) ? savings : 0;
  const safeGoal = typeof goal === "number" && !isNaN(goal) && goal !== 0 ? goal : 1;
  const percent = Math.min((safeSavings / safeGoal) * 100, 100);

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
        ${safeSavings.toLocaleString()} / ${safeGoal.toLocaleString()} saved
      </div>
    </div>
  );
}
