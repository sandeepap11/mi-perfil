import React, { useState } from "react";
import {
  faHome,
  faUser,
  faTrain,
  faBars,
  faTimes,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import "../../../styles/profile/Sidebar.css";
import BlogMain from "../blog/BlogMain";
import About from "../about/About";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { personal } from "../../../utils/Constants";
import { routes } from "../../../utils/Config";
import TravelBlogMain from "../../gallery/TravelBlogMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItemHamburger from "./MenuItemHamburger";
import { Settings } from "./Settings";
import { MobileThemes } from "./MobileThemes";

interface SidebarProps {
  location: any;
}

const Sidebar = (props: SidebarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  if (
    !menuItems.reduce((result, menuItem) => {
      result = result || props.location.pathname.includes(menuItem.path);
      return result;
    }, false)
  ) {
    return <Redirect to={"/blog"} />;
  }

  return (
    <>
      <nav className="menu-sidebar">
        <Link
          to={"/"}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="menu-site-logo"></div>
          <div className="menu-site-logo-name">
            {personal.myName.toUpperCase()}
          </div>
        </Link>

        {menuItems.map(menuItem => (
          <MenuItem
            key={menuItem.id}
            menuItem={menuItem}
            isSelected={props.location.pathname.includes(menuItem.path)}
          />
        ))}
        <Settings />
      </nav>
      <nav className="menu-sidebar-mobile">
        <div className="menu-sidebar-hamburger">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="menu-sidebar-menu-items">
              <div className="menu-sidebar-menu-header">
                <div className="menu-sidebar-menu-name">SANDEEP MADAVU</div>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setShowMenu(false)}
                />
              </div>
              {menuItems.map(menuItem => (
                <MenuItemHamburger
                  key={menuItem.id}
                  menuItem={menuItem}
                  hideMenuMethod={() => setShowMenu(false)}
                />
              ))}
            </div>
          )}
        </div>
        <Link
          to={"/"}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="menu-site-logo"></div>
        </Link>
        <MobileThemes />
      </nav>
    </>
  );
};

export default withRouter(Sidebar);

export interface MenuItemType {
  id: number;
  name: string;
  iconName: IconDefinition;
  view: any;
  path: string;
}

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Home",
    iconName: faHome,
    view: <BlogMain />,
    path: routes.home
  },
  {
    id: 2,
    name: "About",
    iconName: faUser,
    view: <About />,
    path: routes.about
  },
  {
    id: 3,
    name: "Travel",
    iconName: faTrain,
    view: <TravelBlogMain />,
    path: routes.travel
  }
];
