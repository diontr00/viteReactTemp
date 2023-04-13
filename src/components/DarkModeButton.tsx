import { useState, useEffect } from 'react';

import { Moon } from '../public/asset/icons/Moon';
import { Sun } from '../public/asset/icons/Sun';

function DarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const ThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="bg-black p-4 rounded-2xl text-white flex" onClick={ThemeSwitch}>
      <Moon />
      <Sun />
    </button>
  );
}

export default DarkMode;
