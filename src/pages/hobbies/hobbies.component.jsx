import React from 'react';

import './hobbies.styles.scss';

import CustomRouteButton from "../../components/custom-route-button/custom-route-button.component";

const HobbiesPage = () => (
  <div className="hobbies-page">
    <div className="hobbies-container">
      <div className="hobby">
        <h4 className="hobby-title">SOCCER FAN AND PLAYER</h4>
        <p className="hobby-text">
          I am deeply passionate about soccer and by leveraging the 
          data from api.football-data.org I can easily keep up to date
          on multiple league standings! 
        </p>
        <CustomRouteButton title={"league standings"} route={"/soccer"} /> 
      </div>
      <div className="hobby">
        <h4 className="hobby-title">VIDEO GAME ENTHUSIAST</h4>
        <p className="hobby-text">
          The scope and variety within video games and the overall growth
          of video games is astounding. Using api.rawg.io I can see who is 
          top dog in the video game world!
        </p>
        <CustomRouteButton title={"gamer"} route={"/gamer"} />
      </div>
    </div>
  </div>
);

export default HobbiesPage;