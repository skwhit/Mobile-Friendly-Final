import React, { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible((visible) => !visible);
    const projectList = document.body.querySelector(".project-list-container");
    const projectDetail = document.body.querySelector(".project-detail");
    projectList.classList.toggle("list-hidden");
    projectDetail.classList.toggle("detail-width-change");

  };
  return (
    <div className={`slider${!visible ? " slider-active": ""}`}>
      <button onClick={handleClick}>
        {visible ? (
          <i className="fa-solid fa-less-than"></i>
        ) : (
          <i className="fa-solid fa-greater-than"></i>
        )}
      </button>
    </div>
  );
}
