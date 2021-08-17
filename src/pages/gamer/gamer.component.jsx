import React, { useState } from 'react';

import './gamer.styles.scss';

import { key } from '../../utils/secret';

import GameData from '../../components/game-data/game-data.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';

const GamerPage = () => {
  const [gameQuery, setGameQuery] = useState("");
  const [gameData, setGameData] = useState({ gameData: []});
  const [finalChoice, setFinalChoice] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    const removeSpaces = value.replace(/\s/g , "-");

    setGameQuery(value ? removeSpaces.toLowerCase() : null);
  };

  const fetchCall = () => { fetch(`https://api.rawg.io/api/games?key=${key}&search=${gameQuery}`)
    .then(response => response.json())
    .then(data => setGameData({ gameData: data.results }))
    .catch(err => console.log(err));
    console.log(gameData);
  };

  const onClick = () => {
    fetchCall();
  };

  const handleEnterKeypress = e => {
    if (e.keyCode === 0) {
      fetchCall();
    };
  };

  return (
    <div className="gamer-page">
      <h2 className="gamer-page-title">
        title
      </h2>
      <div className="game-data-container">
        <GameData />
      </div>
      <div className="game-query">
        <input onChange={onChange} onKeyPress={handleEnterKeypress} type="text" className="game-text" 
          id="game-query-input" placeholder="Enter a game title here"
          on />
        <CustomApiButton btnTitle={"Find Game"} className="game-submit-btn" 
          onClick={onClick} />
      </div>
    </div>
  );
};

export default GamerPage;