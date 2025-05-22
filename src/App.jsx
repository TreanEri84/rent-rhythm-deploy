import React, { useState } from "react";
import TopUpButton from "./components/TopUpButton";
import BudgetProgress from "./components/BudgetProgress";
import CelebrationMessage from "./components/CelebrationMessage";
import MascotDisplay from "./components/MascotDisplay";
import ThemeSelector from "./components/ThemeSelector";
import MilestoneForm from "./components/MilestoneForm";
import MilestoneList from "./components/MilestoneList";
// import other components as needed

export default function App() {
  // Budgeting state
  const [savings, setSavings] = useState(0);
  const [goal, setGoal] = useState(1200); // or pull from props/config
  const [theme, setTheme] = useState("fox"); // "fox", "squirrel", or "pigeon" 
  const [showCelebration, setShowCelebration] = useState(false);
  const [milestones, setMilestones] = useState([]);

  // Add savings to total and check for celebration
  const topUp = (amount) => {
    const newSavings = savings + amount;
    setSavings(newSavings);
    if (newSavings >= goal) setShowCelebration(true);
  };

  // Reset celebration modal
  const resetCelebration = () => setShowCelebration(false);

  // Add milestone to the list
  const handleAddMilestone = (milestone) => setMilestones([...milestones, milestone]);

  // Mark a milestone as reached
  const handleMarkReached = (idx) => {
    setMilestones((milestones) =>
      milestones.map((m, i) =>
        i === idx ? { ...m, reached: true } : m
      )
    );
  };

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", padding: 24 }}>
      <h1>Rent Rhythm</h1>
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <MascotDisplay theme={theme} />
      <BudgetProgress savings={savings} goal={goal} />
      <TopUpButton topUp={topUp} />
      <MilestoneForm onAdd={handleAddMilestone} />
      <MilestoneList
        milestones={milestones}
        savings={savings}
        onMarkReached={handleMarkReached}
      />
      <CelebrationMessage
        show={showCelebration}
        resetCelebration={resetCelebration}
        goal={goal}
      />
    </div>
  );
}
