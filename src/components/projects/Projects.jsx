import React, { useState } from 'react';

import ProjectList from './ProjectList';
import { projectData } from '../../services/ProjectData';
import ProjectDetail from './ProjectDetail';

function Projects() {
  const initialState = projectData[0]
  const [project, setProject] = useState(initialState)



  return (
    <section className='projects-container'>
        <ProjectList setProject={setProject} projectData={projectData} />
        { project.title === "" ? <></> : <ProjectDetail project={project}/>}
    </section>
  )
}

export default Projects;