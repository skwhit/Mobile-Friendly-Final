import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Slider from "../slider/Slider";

export default function ProjectDetail({ project }) {
  const { title, description, link, image, github } = project;

  const handleClick = (id) => () => {
    id === 1 ? window.open(link, "_blank") : window.open(github, "_blank");
  };

  return (
    <div className="project-detail">
      <Slider />
      <div className="detail-one">
        <div className="detail-img-container">
          <img src={image} alt="Project Image" />
        </div>
        <div className="detail-links">
          <button onClick={handleClick(1)}>
            <i className="fa-2x fa-solid fa-link"></i>Live Application
          </button>
          <button onClick={handleClick(2)}>
            <i className="fa-2x fa-brands fa-github"></i>Source Code
          </button>
        </div>
      </div>
      <div className="detail-two">
        <ul className="detail-list">
          {description.map((item) => (
            <li key={`${description.indexOf(item)}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
