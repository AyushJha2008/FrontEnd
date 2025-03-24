import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/childA';

// Creating Theme Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='cont' style={{ backgroundColor: theme === 'light' ? "beige" : "black", minHeight: "100vh", padding: "20px" }}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
