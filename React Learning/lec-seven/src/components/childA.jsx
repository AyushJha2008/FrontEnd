import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ChildA = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChildA;
