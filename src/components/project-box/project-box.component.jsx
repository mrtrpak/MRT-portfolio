import React from 'react';

import './project-box.styles.scss';

const ProjectBox = ({ projects }) => {
  console.log(projects, "box");

  return (
    <div className="project">
          <div className="gif" style={{ backgroundImage: `url(${projects[0].clip})` }}>
            <h3 className="project-title">
              { projects.title }
            </h3>
          </div>
          <p className="project-info">
            { projects.info }
          </p>
          <div>
            <p>TO REPO</p>
          </div>
        </div>
  );
}

export default ProjectBox;