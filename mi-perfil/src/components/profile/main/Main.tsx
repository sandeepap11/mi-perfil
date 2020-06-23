import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar, { menuItems } from "./Sidebar";
import "../../../styles/profile/Main.css";

export interface MainProps {}

const Main = (props: MainProps) => {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />

        <Switch>
          {menuItems.map(menuItem => (
            <Route key={menuItem.id} exact path={menuItem.path}>
              <div className="main-page">{menuItem.view}</div>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
