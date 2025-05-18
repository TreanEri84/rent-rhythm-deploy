import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeDisplay() {
  const { theme } = useTheme();

  const mascots = {
    adventure: { bg: '/adventure.png', mascot: '/fox.png', message: 'Let’s go on an adventure!' },
    forest: { bg: '/forest.png', mascot: '/squirrel.png', message: 'Time to gather and grow!' },
    city: { bg: '/city.png', mascot: '/pigeon.png', message: 'Fly smart through your finances!' }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <img
        src={mascots[theme].bg}
        alt="Theme background"
        className="w-full max-w-xl rounded-xl shadow-md mb-4"
      />
      <div className="text-center">
        <img
          src={mascots[theme].mascot}
          alt="Mascot"
          className="w-24 h-24 mx-auto animate-bounce"
        />
        <p className="text-sm mt-1 italic">{mascots[theme].message}</p>
      </div>
    </div>
  );
}
