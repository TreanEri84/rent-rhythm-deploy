import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  // Example initial values; replace with your logic or fetch from API/localStorage
  const [savings, setSavings] = useState(0);
  const [goal, setGoal] = useState(1200); // Rent + buffer, set as needed
  const [showCelebration, setShowCelebration] = useState(false);

  const topUp = (amount) => {
    const newSavings = savings + amount;
    setSavings(newSavings);
    if (newSavings >= goal) setShowCelebration(true);
  };

  const resetCelebration = () => setShowCelebration(false);

  return (
    <BudgetContext.Provider
      value={{
        savings,
        goal,
        setGoal,
        topUp,
        showCelebration,
        resetCelebration,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
