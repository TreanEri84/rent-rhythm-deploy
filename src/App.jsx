import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ThemeDisplay from './components/ThemeDisplay.jsx';
import ThemeSelector from './components/ThemeSelector.jsx';
import Mascot from './components/Mascot.jsx';
import CurrencySelector from './components/CurrencySelector.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';
import Greeting from './components/Greeting.jsx';
import BudgetPools from './components/BudgetPools.jsx';
import MilestoneProgress from './components/MilestoneProgress.jsx';
import { Progress } from './components/ui/progress.jsx';
import { Button } from './components/ui/button.jsx';

import ThemeContextProvider from './contexts/ThemeContext';
import CurrencyContextProvider from './contexts/CurrencyContext';
import DarkModeContextProvider from './contexts/DarkModeContext';

const RENT_GOAL = 1500;
const BUFFER = 200;

function App() {
  const [savings, setSavings] = useState(0);
  const [showCelebrate, setShowCelebrate] = useState(false);

  const topUp = () => {
    const next = savings + 100;
    setSavings(next);
    if (next >= RENT_GOAL + BUFFER) {
      setShowCelebrate(true);
      setTimeout(() => setShowCelebrate(false), 2000);
    }
  };

  const goal = RENT_GOAL + BUFFER;
  const percent = Math.min((savings / goal) * 100, 100);

  return (
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <DarkModeContextProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <div className="max-w-xl mx-auto px-4 py-8">
              <div className="flex justify-between items-center mb-4">
                <ThemeSelector />
                <CurrencySelector />
                <DarkModeToggle />
              </div>
              <Greeting /> {/* Greets user by first name */}
              <ThemeDisplay />
              <Mascot /> {/* Shows mascot based on selected theme */}
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-2">Rent + Buffer Progress</h2>
                <Progress value={percent} />
                <div className="mt-2 text-sm">
                  Saved: <b>${savings}</b> / <b>${goal}</b>
                </div>
                <Button onClick={topUp} className="mt-4">
                  Top Up Savings
                </Button>
                {showCelebrate && (
                  <div className="mt-4 text-green-600 font-bold animate-bounce">
                    🎉 Target Reached! 🎉
                  </div>
                )}
              </div>
              <BudgetPools /> {/* Visual budgeting categories with icons */}
              <MilestoneProgress /> {/* Progress bar w/ checkpoints and rewards */}
            </div>
          </div>
        </DarkModeContextProvider>
      </CurrencyContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
