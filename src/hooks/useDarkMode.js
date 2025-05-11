import { useState, useEffect } from 'react';

export default function useDarkMode() {
  // 1) theme state defaults to light
  const [theme, setTheme] = useState('light');

  // 2) on mount, read localStorage or OS preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // 3) whenever theme changes, explicitly add/remove the class and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return [theme, setTheme];
}
