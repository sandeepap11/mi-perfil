import React from "react";
import {
  faCog,
  faHome,
  faUser,
  faTrain,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import "../../../styles/profile/Sidebar.css";
import IconIntro from "./IconIntro";
import BlogMain from "../blog/BlogMain";
import About from "../about/About";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { personal } from "../../../utils/Constants";
import { routes } from "../../../utils/Config";
import TravelBlogMain from "../../gallery/TravelBlogMain";

interface SidebarProps {
  location: any;
}

const Sidebar = (props: SidebarProps) => {
  if (
    !menuItems.reduce((result, menuItem) => {
      result = result || props.location.pathname.includes(menuItem.path);
      return result;
    }, false)
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
    path: routes.home,
    isSettings: false
  },
  {
    id: 2,
    name: "About",
    iconName: faUser,
    view: <About />,
    path: routes.about,
    isSettings: false
  },
  {
    id: 3,
    name: "Travel",
    iconName: faTrain,
    view: <TravelBlogMain />,
    path: routes.travel,
    isSettings: false
  },
  {
    id: 4,
    name: "Settings",
    iconName: faCog,
    path: routes.settings,
    view: <IconIntro iconName={faCog} />,
    isSettings: true
  }
];
