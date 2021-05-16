import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/profile/main/Main";
import { keys } from "./utils/Constants";

export const ThemeContext = React.createContext<any>(null);

function App() {
  const theme = localStorage.getItem(keys.theme);

  useEffect(() => {
    if (!theme) {
      localStorage.setItem(keys.theme, "0");
    }
  }, []);

  const [currentTheme, setCurrentTheme] = useState(theme ? theme : "0");

  return (
    <>
      {currentTheme && (
        <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
          <Main />
        </ThemeContext.Provider>
      )}
    </>
  );
}
export default App;
