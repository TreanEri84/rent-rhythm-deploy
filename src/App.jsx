import React, { useState } from "react";
import TopUpButton from "./components/TopUpButton";
import BudgetProgress from "./components/BudgetProgress";
import CelebrationMessage from "./components/CelebrationMessage";
// import other components as needed

export default function App() {
  // Budgeting state
  const [savings, setSavings] = useState(0);
  const [goal, setGoal] = useState(1200); // or pull from props/config
  const [showCelebration, setShowCelebration] = useState(false);

  const topUp = (amount) => {
    const newSavings = savings + amount;
    setSavings(newSavings);
    if (newSavings >= goal) setShowCelebration(true);
  };

  const resetCelebration = () => setShowCelebration(false);

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", padding: 24 }}>
      <h1>Rent Rhythm</h1>
      <BudgetProgress savings={savings} goal={goal} />
      <TopUpButton topUp={topUp} />
      {/* ...other sections */}
      <CelebrationMessage
        show={showCelebration}
        resetCelebration={resetCelebration}
        goal={goal}
      />
    </div>
  );
}
