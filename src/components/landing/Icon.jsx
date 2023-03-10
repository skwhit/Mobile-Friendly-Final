import React from "react";
import { useNavigate } from "react-router-dom";

export default function Icon({ icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    icon.title === "Email"
      ? window.open(icon.link, "emailWindow")
      : icon.index < 6
      ? window.open(icon.link, "_blank")
      : navigate(icon.link);
  };

  return (
    <button className={`icon-container icon-${icon.id}`} onClick={handleClick}>
      <div className="icon">
        <i className={icon.faClass}></i>
        <p>{icon.title}</p>
      </div>
      <div className="icon-title">
        {/* <p>{icon.title}</p> */}
      </div>
    </button>
  );
}
