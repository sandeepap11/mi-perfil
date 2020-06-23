import * as React from "react";
import "../../../styles/profile/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      <div className="profile-about-social">
        <a target="blank" href="https://twitter.com/sandeep_madavu">
          <FontAwesomeIcon icon={faTwitter as any} />
        </a>
        <a target="blank" href="https://github.com/sandeepap11">
          <FontAwesomeIcon icon={faGithub as any} />
        </a>
        <a href="mailto:webmaster@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}
