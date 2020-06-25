import * as React from "react";
import "../../../styles/profile/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personal } from "../../../utils/Constants";
import { lang } from "../../../utils/Language";

export default function About() {
  return (
    <div className="profile-about-main">
      <div className="profile-about-content">
        <div className="profile-about-picture"></div>
        <h1 className="profile-about-header">{lang.en.about.header}</h1>
        <p className="profile-about-text">
          <strong>{lang.en.about.infoMain}</strong>
        </p>
        <p className="profile-about-text">{lang.en.about.infoSub}</p>
      </div>
      <div className="profile-about-social">
        {personal.socialLinks.map(socialLink => (
          <a key={socialLink.name} target="blank" href={socialLink.link}>
            <FontAwesomeIcon icon={socialLink.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}
