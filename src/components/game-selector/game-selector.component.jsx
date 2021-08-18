import React, { useState } from 'react';

import './game-selector.styles.scss';

const GameSelector = props => {
  const [isFinal, setIsFinal] = useState(false);
  const [finalGame, setFinalGame] = useState({});

  const { gamesData} = props.gamesData;

  console.log(gamesData.slice(0, 10).map((game, idx) => {
    return game.name;
  }));

  return (
    <div className="game-data">
      {

      }
    </div>
  );
};

export default GameSelector;