import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

import './game-selector.styles.scss';

const GameSelector = props => {
  const [isFinal, setIsFinal] = useState(false);
  const [finalGame, setFinalGame] = useState({});

  const { gamesData} = props.gamesData;

  console.log(gamesData.slice(0, 10).map((game, idx) => {
    return game.name;
  }));

  return (
    <div className="game-selector">
      {
        gamesData.slice(0, 10).map((game, idx) => {
          const { slug, name } = game;

          return (
            <div className="game-option">
              <FaGamepad className="game-option-icon" />
              <p className="game-name" key={idx} id={slug}>{name}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default GameSelector;