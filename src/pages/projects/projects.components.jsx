import React from 'react';


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
                {project.title}
              </h3>
            </div>
            <div className="project-info">
              <p>
                {project.info}
              </p>
              <p className="project-link">TO GITHUB REPO</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProjectsPage;