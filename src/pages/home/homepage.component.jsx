import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="home-page">
    <h1 className="home-name">
      { (window.innerWidth > 950) ? "I AM" : ""}
      <span className="my-name"> MICHAEL TRPAK</span>
    </h1>
    <h2 className="home-title">
    { (window.innerWidth > 950) ? "FULL STACK WEB DEVELOPER" : "WEB DEVELOPER"}
    </h2>
  </div>
);

export default HomePage;