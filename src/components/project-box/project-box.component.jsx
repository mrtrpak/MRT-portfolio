import React from 'react';

import './project-box.styles.scss';

const ProjectBox = ({ projects }) => {
  console.log(projects, "box");

  return (
    <div className="box" style={{
      // backgroundImage: `url(${ projects.clip })`,
      // height: "100%",
      // width: "auto",
      // backgroundSize: "cover",
      // backgroundPosition: "center"
    }}>
      <div className="title">
        { projects.title }
      </div>
    </div>
  );
}

export default ProjectBox;