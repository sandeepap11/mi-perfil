import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTimes } from "@fortawesome/free-solid-svg-icons";
import { onReturn } from "../../../utils/Common";
import { keys } from "../../../utils/Constants";
import { ThemeContext } from "../../../App";

export const Settings = () => {
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const setTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem(keys.theme, themeId);
    setIsSettingsOpen(false);
  };

  return (
    <div className={"settings-menu"}>
      <div
        className={isSettingsOpen ? "settings-menu-selected" : ""}
        onClick={() => setIsSettingsOpen(true)}
      >
        <FontAwesomeIcon icon={faPalette} />
      </div>

      {isSettingsOpen && (
        <div className="setting-menu-options-main">
          <div className="settings-menu-options">
            <div className="settings-menu-options-header">
              <h1>Select Theme</h1>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setIsSettingsOpen(false)}
              />
            </div>
            <ul role="radiogroup">
              {themes.map((theme) => (
                <li
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  role="radio"
                  aria-checked={currentTheme === theme.id}
                  tabIndex={0}
                  onKeyDown={(event) =>
                    onReturn(event, () => setTheme(theme.id))
                  }
                >
                  <div
                    className={
                      currentTheme === theme.id ? "selected-theme" : ""
                    }
                  ></div>
                  {theme.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export const themes = [
  {
    id: "0",
    name: "Default",
    className: "default-theme",
  },
  {
    id: "1",
    name: "Light",
    className: "light-theme",
  },
  {
    id: "2",
    name: "Dark",
    className: "dark-theme",
  },
];
