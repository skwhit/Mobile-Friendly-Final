import ProjectCard from "./ProjectCard";
import "./Projects.css";

function ProjectList({ projectData, setProject }) {
  return (
    <div className="project-list-container">
      {projectData.map((item) => (
        <ProjectCard key={item.id} project={item} setProject={setProject} />
      ))}
    </div>
  );
}

export default ProjectList;
