import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemType } from "./Sidebar";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface MenuItemProps {
  menuItem: MenuItemType;
  isSelected: boolean;
}

const MenuItem = ({ menuItem, isSelected }: MenuItemProps) => {
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
    >
      <Link to={menuItem.path}>
        <div
          className={
            isSelected && menuItem.isSettings ? "settings-menu-selected" : ""
          }
        >
          <FontAwesomeIcon icon={menuItem.iconName} />
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
