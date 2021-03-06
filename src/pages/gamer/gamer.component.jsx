import React, { useState } from 'react';

import './gamer.styles.scss';

import GameSelector from '../../components/game-selector/game-selector.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';

const GamerPage = () => {
  const [gameQuery, setGameQuery] = useState("");
  const [gamesData, setGamesData] = useState({ gamesData: []});

  const onChange = e => {
    const { value } = e.target;
    const removeSpaces = value.toString().replace(/\s/g , "-");

    setGameQuery(value ? removeSpaces.toLowerCase() : null);
  };

  const fetchCall = () => { 
    //   if (process.env.NODE_ENV === 'development') {
    //     let { gameKey }  = require('../../utils/secret');
    //   } else if (process.env.NODE_ENV === 'production') {
    //     let gameKey = process.env.soccerKey;
    //   }
    
    // fetch(`https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key=${gameKey}&search=${gameQuery}`)
    // .then(response => response.json())
    // .then(data => setGamesData({ gamesData: data.results }))
    // .catch(err => err);
  };

  const onClick = () => {
    fetchCall();
  };

  const handleEnterKeypress = e => {
    if (e.key === "Enter") {
      fetchCall();
    } else return;
  };

  return (
    <div className="gamer-page">
      <h2 className="gamer-page-title">
        What Game Are You Looking For?
      </h2>
      <div className="game-data-container">
        <GameSelector gamesData={gamesData} />
      </div>
      <div className="game-query">
        <input 
          onChange={onChange} onKeyPress={handleEnterKeypress} 
          type="text" className="game-text" 
          id="game-query-input" placeholder="Enter a game title here"
        />
        <CustomApiButton btnTitle={"Find Game"} className="game-submit-btn" 
          onClick={onClick} />
      </div>
    </div>
  );
};

export default GamerPage;