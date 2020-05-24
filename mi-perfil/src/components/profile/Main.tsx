import React, { useState } from "react";
import "../../styles/profile/Main.css";
import Sidebar from "./Sidebar";
import Page from "./Page";

const Main = () => {
  const [selectedView, useSelectedView] = useState("");

  return (
    <div className="app-main">
      <Sidebar setSelectedView={useSelectedView} />
      <Page view={selectedView} />
    </div>
  );
};

export default Main;
