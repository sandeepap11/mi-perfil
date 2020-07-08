import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar, { menuItems } from "./Sidebar";
import "../../../styles/profile/Main.css";
import BlogMain from "../blog/BlogMain";

const Main = () => {
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
          <Route exact path={"/blog/:tag"}>
            <div className="main-page">
              <BlogMain />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
