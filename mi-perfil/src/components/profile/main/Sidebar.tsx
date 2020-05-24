import React, { useState, useEffect } from "react";
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

export interface MenuItemType {
  id: number;
  name: string;
  iconName: IconDefinition;
  view: any;
  isSettings: boolean;
}

const MenuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Home",
    iconName: faHome,
    view: <IconIntro iconName={faHome} />,
    isSettings: false
  },
  {
    id: 2,
    name: "About",
    iconName: faUser,
    view: <IconIntro iconName={faUser} />,
    isSettings: false
  },
  {
    id: 3,
    name: "Contact",
    iconName: faPhoneAlt,
    view: <IconIntro iconName={faPhoneAlt} />,
    isSettings: false
  },
  {
    id: 4,
    name: "Skills",
    iconName: faCheck,
    view: <IconIntro iconName={faCheck} />,
    isSettings: false
  },
  {
    id: 5,
    name: "Settings",
    iconName: faCog,
    view: <IconIntro iconName={faCog} />,
    isSettings: true
  }
];

interface SidebarProps {
  setSelectedView: (selectedView: any) => void;
}

const Sidebar = ({ setSelectedView }: SidebarProps) => {
  const [selectedViewState, setSelectedViewState] = useState(MenuItems[0].view);

  useEffect(() => setSelectedView(selectedViewState), []);

  const setSelectedViewMethod = (selectedView: any) => {
    setSelectedViewState(selectedView);
    setSelectedView(selectedView);
  };

  return (
    <nav className="menu-sidebar">
      {MenuItems.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          menuItem={menuItem}
          setSelectedView={setSelectedViewMethod}
          isSelected={selectedViewState === menuItem.view}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
