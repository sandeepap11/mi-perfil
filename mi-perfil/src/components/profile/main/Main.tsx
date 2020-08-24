import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar, { menuItems } from "./Sidebar";
import "../../../styles/profile/Main.css";
import BlogMain from "../blog/BlogMain";
import { routes } from "../../../utils/Config";
import { Blog } from "../blog/Blog";
import TravelBlogMain from "../../gallery/TravelBlogMain";
import { TravelBlog } from "../../gallery/TravelBlog";
import { createBrowserHistory } from "history";

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
          <Route exact path={routes.blogTags}>
            <div className="main-page">
              <BlogMain />
            </div>
          </Route>
          <Route exact path={routes.blogSearch}>
            <div className="main-page">
              <BlogMain />
            </div>
          </Route>
          <Route exact path={routes.blog}>
            <div className="main-page">
              <Blog />
            </div>
          </Route>
          <Route exact path={routes.travelBlogTags}>
            <div className="main-page">
              <TravelBlogMain />
            </div>
          </Route>
          <Route exact path={routes.travelBlogSearch}>
            <div className="main-page">
              <TravelBlogMain />
            </div>
          </Route>
          <Route exact path={routes.travelBlog}>
            <div className="main-page">
              <TravelBlog />
            </div>
          </Route>
          <Route>
            <div className="main-page">
              <h1 className="main-error-page">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
