import React, { useState } from "react";
import "./App.css";
import Main from "./components/profile/main/Main";
import { keys } from "./utils/Constants";

export const ThemeContext = React.createContext<any>(null);

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    sessionStorage.getItem(keys.theme)
  );

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <Main />
    </ThemeContext.Provider>
  );
}
export default App;
