import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

import './game-selector.styles.scss';

import GameDataModal from '../game-data-modal/game-data-modal.component';

const GameSelector = props => {
  const [gameSlug, setGameSlug] = useState("");

  const { gamesData} = props.gamesData;

  const gameChoiceClick = slug => {
    setGameSlug(slug);
  };

  return (
    <div className="game-selector">
      {
        gamesData.slice(0, 10).map((game, idx) => {
          const { slug, name } = game;

          return (
            <div className="game-option" key={idx}>
              <FaGamepad className="game-option-icon" />
              <p className="game-name" onClick={() => gameChoiceClick(slug)}>{name}</p>
            </div>
          )
        })
      }
      <GameDataModal slug={gameSlug} />
    </div>
  );
};

export default GameSelector;