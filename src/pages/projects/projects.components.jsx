import React from 'react';

import './projects.styles.scss';

import { projects } from './projects.data';
const ProjectsPage = () => {

  return (
    
    <div className="projects-container">
      {
        projects.map(project => (
          <div className="project" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <div className="gif" style={{ backgroundImage: `url(${project.clip})` }}>
              <a href={project.url} className="website-link">
                GO TO WEBSITE
              </a>
            </div>
            <div className="project-info">
              <p className="project-text">
                {project.info}
              </p>
              <a className="project-link" href={project.gitUrl}>TO GITHUB REPO</a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProjectsPage;