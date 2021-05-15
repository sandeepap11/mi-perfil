import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/profile/main/Main";
import { keys } from "./utils/Constants";

export const ThemeContext = React.createContext<any>(null);

function App() {
  useEffect(() => {
    const theme = localStorage.getItem(keys.theme);

    if (!theme) {
      localStorage.setItem(keys.theme, "0");
    } else {
      setCurrentTheme(theme);
    }
  }, []);

  const [currentTheme, setCurrentTheme] = useState("0");

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
