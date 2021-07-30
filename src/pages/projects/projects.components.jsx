import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';


import './projects.styles.scss';

import { projects } from './projects.data';

const ProjectsPage = () => {

  return (
    <div className="projects-container">
      {
        projects.map(project => (
        <div className="project">
          <div className="gif" style={{ backgroundImage: `url(${project.clip})` }}>
            <h3 className="project-title">
              { project.title }
            </h3>
          </div>
          <p className="project-info">
            { project.info }
          </p>
          <div>
            <p>TO REPO</p>
            <AiOutlineGithub />
          </div>
        </div>
      ))
      }
    </div>
  );  
};

export default ProjectsPage;