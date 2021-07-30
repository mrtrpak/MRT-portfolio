import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';


import './projects.styles.scss';

import { projects } from './projects.data';

const ProjectsPage = () => {

  return (
    <div>
      {
        projects.map(project => (
          <div>
            <div className="project">
              <img src={ project.clip } alt="Gif clip" className="gif" />
              <div className="title-container">
                <h3 className="project-title">
                  { project.title }
                </h3>
              </div>
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