import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

import './game-selector.styles.scss';

import GameDataModal from '../game-data-modal/game-data-modal.component';

const GameSelector = props => {
  const [finalChoice, setFinalChoice] = useState({});

  const { gamesData} = props.gamesData;

  const gameChoiceClick = game => {
    setFinalChoice(game)
  };

  console.log(finalChoice);
  return (
    <div className="game-selector">
      {
        gamesData.slice(0, 10).map((game, idx) => {
          const { slug, name } = game;

          return (
            <div className="game-option" key={idx}>
              <FaGamepad className="game-option-icon" />
              <p className="game-option-name" onClick={() => gameChoiceClick(game)}>{name}</p>
            </div>
          )
        })
      }
      <GameDataModal finalChoice={finalChoice} />
    </div>
  );
};

export default GameSelector;