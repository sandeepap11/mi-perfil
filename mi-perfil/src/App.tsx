import React, { useState } from "react";
import "./App.css";
import Main from "./components/profile/main/Main";
import { keys } from "./utils/Constants";
import { isNullOrUndefined } from "util";

export const ThemeContext = React.createContext<any>(null);

function App() {
  const theme = localStorage.getItem(keys.theme);

  if (isNullOrUndefined(theme)) {
    localStorage.setItem(keys.theme, "0");
  }

  const [currentTheme, setCurrentTheme] = useState(
    isNullOrUndefined(theme) ? "0" : theme
  );

  return (
    <>
      {!isNullOrUndefined(theme) && (
        <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
          <Main />
        </ThemeContext.Provider>
      )}
    </>
  );
}
export default App;
