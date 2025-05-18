import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useDarkMode } from '../context/DarkModeContext';
import { useCurrency } from '../context/CurrencyContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { darkMode, setDarkMode } = useDarkMode();
  const { currency, setCurrency } = useCurrency();

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">🏠 Rent Rhythm</h1>
      <div className="flex gap-4 items-center">
        <select
          value={theme}
          onChange={(e) => toggleTheme(e.target.value)}
          className="p-1 rounded"
        >
          <option value="adventure">Adventure</option>
          <option value="forest">Forest</option>
          <option value="city">City</option>
        </select>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-1 rounded"
        >
          <option value="USD">$ USD</option>
          <option value="GBP">£ GBP</option>
          <option value="EUR">€ EUR</option>
        </select>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 text-lg"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
