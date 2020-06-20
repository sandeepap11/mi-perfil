import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/profile/IconIntro.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconIntroProps {
  iconName: IconDefinition;
}

const IconIntro = ({ iconName }: IconIntroProps) => {
  return (
    <div
      className="icon-intro-main"
      style={{
        color: "#fff",
        fontSize: "5rem"
      }}
    >
      <FontAwesomeIcon icon={iconName} />

      <p style={{ color: "greenyellow" }}>COMING SOON ...</p>
    </div>
  );
};

export default IconIntro;
