import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemType } from "./Sidebar";
import { Link } from "react-router-dom";

interface MenuItemProps {
  menuItem: MenuItemType;
  isSelected: boolean;
}

const MenuItem = ({ menuItem, isSelected }: MenuItemProps) => {
  return (
    <>
      {menuItem.isSettings ? (
        <div className={"settings-menu"}>
          <div className={isSelected ? "settings-menu-selected" : ""}>
            <Link
              to={menuItem.path}
              style={{ height: "100%", width: "100%" }}
              aria-label={menuItem.name}
            >
              <FontAwesomeIcon icon={menuItem.iconName} />
            </Link>
          </div>
        </div>
      ) : (
        <Link
          to={menuItem.path}
          style={{ height: "100%", width: "100%" }}
          aria-label={menuItem.name}
        >
          <div
            className={"menu-item-main"}
            style={
              isSelected
                ? {
                    color: "goldenrod"
                  }
                : {}
            }
          >
            <div
              className={
                isSelected ? "menu-item-circle-selected" : "menu-item-circle"
              }
            >
              <FontAwesomeIcon icon={menuItem.iconName} />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MenuItem;
