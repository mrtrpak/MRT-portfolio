import React from 'react';

import './box.styles.scss';

const box = ({ title, clip }) => (
  <div className="box" style={{
    backgroundImage: `url(${ clip })`,
    height: "100%",
    width: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
    <div className="title">
      { title }
    </div>
  </div>
);

export default box;