import React from "react";
import { useBudget } from "../contexts/BudgetContext";

export default function BudgetProgress() {
  const { savings, goal } = useBudget();
  const percent = Math.min((savings / goal) * 100, 100);

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
        ${savings.toLocaleString()} / ${goal.toLocaleString()} saved
      </div>
    </div>
  );
}
