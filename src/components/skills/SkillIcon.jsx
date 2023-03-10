import React from "react";
import "./Skills.css";

export default function SkillIcon({ skill }) {
  return (
    <div className="skill-container">
      <i className={`skill-icon ${skill.class}`}></i>
      <p>{skill.title}</p>
    </div>
  );
}
