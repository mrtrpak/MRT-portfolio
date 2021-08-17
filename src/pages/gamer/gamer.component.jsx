import React, { useState } from 'react';

import './gamer.styles.scss';

import GameData from '../../components/game-data/game-data.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';
import { key } from '../../utils/secret';

const GamerPage = () => {
  const [gameQuery, setGameQuery] = useState("");
  const [gameData, setGameData] = useState({ gameData: []});

  const onChange = e => {
    const { value } = e.target;
    const removeSpaces = value.replace(/\s/g , "-");

    setGameQuery(value ? removeSpaces.toLowerCase() : null);
  };

  const onClick = e => {
    e.preventDefault();
    console.log(gameQuery);

    fetch(`https://api.rawg.io/api/games?key=${key}&search=${gameQuery}`)
      .then(response => response.json())
      .then(data => setGameData({ gameData: data.results }))
      .catch(err => console.log(err));
    };
    
    console.log(gameData);

  return (
    <div className="gamer-page">
      <h2 className="gamer-page-title">
        title
      </h2>
      <GameData />
      <div className="game-query">
        <input onChange={onChange} type="text" className="game-text" 
          id="game-query-input" placeholder="Enter a game title here"
          on />
        <CustomApiButton btnTitle={"Find Game"} className="game-submit-btn" 
          onClick={onClick} />
      </div>
    </div>
  );
};

export default GamerPage;