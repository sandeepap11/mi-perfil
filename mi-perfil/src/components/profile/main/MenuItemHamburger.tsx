import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemType } from "./Sidebar";
import { Link } from "react-router-dom";

interface MenuItemProps {
  menuItem: MenuItemType;
  isSelected: boolean;
}

const MenuItemHamburger = ({ menuItem }: MenuItemProps) => {
  return (
    <Link to={menuItem.path} style={{ height: "100%", width: "100%" }}>
      <div className={"menu-item-main"}>
        <div className={"menu-item-circle"}>
          <FontAwesomeIcon icon={menuItem.iconName} />
        </div>
      </div>
    </Link>
  );
};

export default MenuItemHamburger;
