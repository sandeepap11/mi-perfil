import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar, { menuItems } from "./Sidebar";
import "../../../styles/profile/Main.css";
import BlogMain from "../blog/BlogMain";
import { routes } from "../../../utils/Config";
import { Blog } from "../blog/Blog";
import TravelBlogMain from "../../gallery/TravelBlogMain";
import { TravelBlog } from "../../gallery/TravelBlog";
import { ThemeContext } from "../../../App";
import { isNullOrUndefined } from "util";
import { themes } from "./Settings";
import Finished from "../../finished/Finished";

const Main = () => {
  const [currentTheme] = React.useContext(ThemeContext);

  return (
    <Router>
      <div
        className={`main-container ${
          isNullOrUndefined(currentTheme)
            ? themes[0].className
            : themes[Number(currentTheme)].className
        }`}
      >
        <Sidebar />
        <Switch>
          {menuItems.map((menuItem) => (
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
          <Route exact path={routes.finished}>
            <div className="main-page">
              <Finished />
            </div>
          </Route>
          <Route exact path={routes.finishedSearch}>
            <div className="main-page">
              <Finished />
            </div>
          </Route>
          <Route exact path={routes.pageNotFound}>
            <div className="main-page">
              <h1 className="main-error-page">Page Not Found</h1>
            </div>
          </Route>
          <Route>
            <div className="main-page">
              <h1 className="main-error-page">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </div>
      <Switch></Switch>
    </Router>
  );
};

export default Main;
