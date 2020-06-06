import React from "react";
import {
  faCog,
  faHome,
  faUser,
  faPhoneAlt,
  faCheck,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import "../../../styles/profile/Sidebar.css";
import IconIntro from "./IconIntro";
import BlogMain from "../blog/BlogMain";
import About from "../about/About";
import { withRouter, Redirect } from "react-router";

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
    name: "Contact",
    iconName: faPhoneAlt,
    view: <IconIntro iconName={faPhoneAlt} />,
    path: "/contact",
    isSettings: false
  },
  {
    id: 4,
    name: "Skills",
    iconName: faCheck,
    path: "/skills",
    view: <IconIntro iconName={faCheck} />,
    isSettings: false
  },
  {
    id: 5,
    name: "Settings",
    iconName: faCog,
    path: "/settings",
    view: <IconIntro iconName={faCog} />,
    isSettings: true
  }
];
