import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { keys } from "../../../utils/Constants";
import { ThemeContext } from "../../../App";

export const MobileThemes = () => {
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

  const setTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem(keys.theme, themeId);
  };

  return (
    <div className={"settings-menu"}>
      <div
        onClick={() =>
          setTheme(
            currentTheme === "0" ? "1" : currentTheme === "1" ? "2" : "0"
          )
        }
      >
        {currentTheme === "2" ? (
          <div className="mobile-default-theme-icon">
            <div></div>
            <div></div>
          </div>
        ) : (
          <FontAwesomeIcon icon={currentTheme === "0" ? faSun : faMoon} />
        )}
      </div>
    </div>
  );
};
