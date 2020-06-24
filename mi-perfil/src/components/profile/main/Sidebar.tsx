import React from "react";
import {
  faCog,
  faHome,
  faUser,
  faImage,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import "../../../styles/profile/Sidebar.css";
import IconIntro from "./IconIntro";
import BlogMain from "../blog/BlogMain";
import About from "../about/About";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";

interface SidebarProps {
  location: any;
}

const Sidebar = (props: SidebarProps) => {
  if (
    !menuItems.map(menuItem => menuItem.path).includes(props.location.pathname)
  ) {
    return <Redirect to={"/blog"} />;
  }

  return (
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
        <div className="menu-site-logo-name">SANDEEP MADAVU</div>
      </Link>

      {menuItems.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          menuItem={menuItem}
          isSelected={props.location.pathname.includes(menuItem.path)}
        />
      ))}
    </nav>
  );
};

export default withRouter(Sidebar);

export interface MenuItemType {
  id: number;
  name: string;
  iconName: IconDefinition;
  view: any;
  path: string;
  isSettings: boolean;
}

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Home",
    iconName: faHome,
    view: <BlogMain />,
    path: "/blog",
    isSettings: false
  },
  {
    id: 2,
    name: "About",
    iconName: faUser,
    view: <About />,
    path: "/about",
    isSettings: false
  },
  {
    id: 3,
    name: "Gallery",
    iconName: faImage,
    view: <IconIntro iconName={faImage} />,
    path: "/gallery",
    isSettings: false
  },
  {
    id: 4,
    name: "Settings",
    iconName: faCog,
    path: "/settings",
    view: <IconIntro iconName={faCog} />,
    isSettings: true
  }
];
