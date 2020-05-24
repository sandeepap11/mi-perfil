import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemType } from "./Sidebar";

interface MenuItemProps {
  setSelectedView: (selectedView: any) => void;
  menuItem: MenuItemType;
  isSelected: boolean;
}

const MenuItem = ({ setSelectedView, menuItem, isSelected }: MenuItemProps) => {
  const clickMethod = () => {
    setSelectedView(menuItem.view);
  };

  return (
    <div
      className={menuItem.isSettings ? "settings-menu" : "menu-item-main"}
      style={
        isSelected && !menuItem.isSettings
          ? {
              backgroundColor: "crimson",
              color: "goldenrod"
            }
          : {}
      }
      onClick={clickMethod}
    >
      <div
        className={
          isSelected && menuItem.isSettings ? "settings-menu-selected" : ""
        }
      >
        <FontAwesomeIcon icon={menuItem.iconName} />
      </div>
    </div>
  );
};

export default MenuItem;
