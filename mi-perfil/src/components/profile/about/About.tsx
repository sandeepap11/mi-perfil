import * as React from "react";
import "../../../styles/profile/About.css";

export default function About() {
  return (
    <div className="profile-about-main">
      <div className="profile-about-content">
        <div className="profile-about-picture"></div>
        <h1 className="profile-about-header">Hello, I am Sandeep!</h1>
        <p className="profile-about-text">
          I am a Front-End developer specializing in React JS.
        </p>
      </div>
      <div className="profile-about-social"></div>
    </div>
  );
}
