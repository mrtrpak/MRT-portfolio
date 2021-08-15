import React, { useState } from 'react';

import './gamer.styles.scss';

import GameData from '../../components/game-data/game-data.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';

const GamerPage = () => {
  const [gameQuery, setGameQuery] = useState("");
  const [gameData, setGameData] = useState({ gameData: []});

  const onChange = e => {
    const { value } = e.target;
    const removeSpaces = value ? value.replace(/\s/g , "-") : null;

    setGameQuery(removeSpaces.toLowerCase());
    console.log(gameQuery);
  }
  
  return (
    <div className="gamer-page">
      <h2 className="gamer-page-title">
        title
      </h2>
      <GameData />
      <div className="game-query">
        <input onChange={onChange.toString()} type="text" className="game-text" 
          id="game-query-input" placeholder="Enter a game title here"
          on />
        <CustomApiButton btnTitle={"Find Game"} className="game-submit-btn" />
      </div>
    </div>
  );
};

export default GamerPage;