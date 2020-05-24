import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import Main from "./components/profile/Main";

function App() {
  return (
    <Router>
      <div>
        {/*
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">{"<About />"}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
