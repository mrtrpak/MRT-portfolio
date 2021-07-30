import React from 'react';

import './projects.styles.scss';

import { projects } from './projects.data';
import ProjectBox from '../../components/project-box/project-box.component';

const ProjectsPage = () => {

  return (
    <div>
      {
        projects.map(project => (
          <ProjectBox key={project} projects={projects} />
        ))
      }
    </div>
  );  
};

export default ProjectsPage;