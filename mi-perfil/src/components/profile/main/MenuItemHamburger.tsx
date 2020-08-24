import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemType } from "./Sidebar";
import { Link } from "react-router-dom";

interface MenuItemProps {
  menuItem: MenuItemType;
  hideMenuMethod: () => void;
}

const MenuItemHamburger = ({ menuItem, hideMenuMethod }: MenuItemProps) => {
  return (
    <Link
      to={menuItem.path}
      style={{ height: "100%", width: "100%" }}
      onClick={hideMenuMethod}
      aria-label={menuItem.name}
    >
      <div className={"menu-item-hamburger"}>
        <FontAwesomeIcon icon={menuItem.iconName} />
        <div>{menuItem.name}</div>
      </div>
    </Link>
  );
};

export default MenuItemHamburger;
