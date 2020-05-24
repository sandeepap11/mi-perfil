import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/profile/IconIntro.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconIntroProps {
  iconName: IconDefinition;
}

const IconIntro = ({ iconName }: IconIntroProps) => {
  return (
    <div
      className="icon-into-main"
      style={{
        color: "#fff",
        fontSize: "50px"
      }}
    >
      <FontAwesomeIcon icon={iconName} />

      <p style={{ color: "greenyellow", fontSize: "18pxpx" }}>
        COMING SOON ...
      </p>
    </div>
  );
};

export default IconIntro;
