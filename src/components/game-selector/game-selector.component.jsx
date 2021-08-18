import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

import './game-selector.styles.scss';

import { key } from '../../utils/secret';

const GameSelector = props => {
  const [isFinal, setIsFinal] = useState(false);
  const [gameSlug, setGameSlug] = useState("");

  const { gamesData} = props.gamesData;

  const gameChoiceClick = slug => {
    setGameSlug(slug);
  }

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
    </div>
  );
};

export default GameSelector;