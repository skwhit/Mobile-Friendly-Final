import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function ProjectCard({ project, setProject }) {
  // const navigate = useNavigate();

  const projects = document.body.querySelectorAll(".project-card-title");
  // const selectedProject = "background-color: #3f3f46; color: white";
  const selectedProject = "color: #C4A454";

  const defaultProject = "background-color: none; color: white";

  // projects[0].style = selectedProject;


  // document.getElementById("project-0").style = selectedProject;
  useEffect(() => {
    projects.forEach((project) => (project.style = defaultProject));
    document.getElementById("project-0").style = selectedProject;
  }, [])

  const handleClick = (e) => {
    setProject(project);
    document.getElementById("project-0").style = defaultProject;
    projects.forEach((project) => (project.style = defaultProject));
    e.target.style = selectedProject;
  };

  return (
    <div className="project-card">
      <button id={`project-${project.id}`} className="project-card-title" onClick={handleClick} autoFocus={project.id === 0 ? true : false}>
        {project.title}
      </button>
      {/* <div className="project-img-container">
        <img src={image} alt="project-image" />
      </div> */}
      {/* <div class="card-container">
        
        <p>{description}</p>
        <a href={github} target="_blank">
          <button class="src-code">Code</button>
        </a>
      </div> */}
    </div>
  );
}

export default ProjectCard;
