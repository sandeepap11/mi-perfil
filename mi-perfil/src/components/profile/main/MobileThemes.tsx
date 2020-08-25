import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { isNullOrUndefined } from "util";
import { keys } from "../../../utils/Constants";
import { ThemeContext } from "../../../App";

export const MobileThemes = () => {
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

  const setTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    sessionStorage.setItem(keys.theme, themeId);
  };

  return (
    <div className={"settings-menu"}>
      <div>
        <FontAwesomeIcon
          icon={currentTheme === "0" ? faSun : faMoon}
          onClick={() => setTheme(currentTheme === "0" ? "1" : "0")}
        />
      </div>
    </div>
  );
};
