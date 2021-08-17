import React, { useState } from 'react';

import './gamer.styles.scss';

import { key } from '../../utils/secret';

import GameData from '../../components/game-data/game-data.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';

const GamerPage = () => {
  const [gameQuery, setGameQuery] = useState("");
  const [gameData, setGameData] = useState({ gameData: []});
  const [finalChoice, setFinalChoice] = useState(false);
  const [call, setCall] = useState(0);

  const onChange = e => {
    const { value } = e.target;
    const removeSpaces = value.toString().replace(/\s/g , "-");

    setGameQuery(value ? removeSpaces.toLowerCase() : null);
  };

  
  const fetchCall = () => { 
    fetch(`https://api.rawg.io/api/games?key=${key}&search=${gameQuery}`)
    .then(response => response.json())
    .then(data => setGameData({ gameData: data.results }))
    .catch(err => console.log(err));
    setCall(call + 1);
    console.log(call);
  };
  
  console.log(gameData);
  
  const getGameOptions = () => {

    // if (gameData) {
    //   gameData.gameData.slice(0, 10).map((game, idx) => (
    //     document.getElementById("game-options").append(
    //       <p className="game-option" key={idx}>{game[idx].name}</p>
    //     )
    //   ))
    // } else return;
  } 

  const onClick = () => {
    fetchCall();
    getGameOptions();
  };

  const handleEnterKeypress = e => {
    if (e.key === "Enter") {
      fetchCall();
      getGameOptions();
    } else {
      return
    }
  };

  return (
    <div className="gamer-page">
      <h2 className="gamer-page-title">
        title
      </h2>
      <div className="game-data-container">
        {
          !finalChoice ? 
            <div id="game-options"></div>
          : <GameData />
        }
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