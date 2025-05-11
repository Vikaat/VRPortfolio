import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
      className={`
        p-2 rounded focus:outline-none focus:ring
        ${theme === 'dark'
          ? 'bg-yellow-600 text-black hover:bg-yellow-500'
          : 'bg-blue-600 text-white hover:bg-blue-500'}
      `}
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
