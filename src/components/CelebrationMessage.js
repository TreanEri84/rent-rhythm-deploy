import React from "react";
import Confetti from "react-confetti"; // Run: npm install react-confetti
import { useBudget } from "../contexts/BudgetContext";

export default function CelebrationMessage() {
  const { showCelebration, resetCelebration, goal } = useBudget();

  if (!showCelebration) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        pointerEvents: "all",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.3)",
      }}
      onClick={resetCelebration}
    >
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div
        style={{
          background: "#fff",
          padding: "2rem 3rem",
          borderRadius: 20,
          textAlign: "center",
          boxShadow: "0 6px 32px rgba(0,0,0,0.15)",
        }}
      >
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You reached your savings goal of <b>${goal.toLocaleString()}</b>!</p>
        <div style={{ marginTop: 12, fontSize: 16, color: "#888" }}>
          (Click anywhere to close)
        </div>
      </div>
    </div>
  );
}
