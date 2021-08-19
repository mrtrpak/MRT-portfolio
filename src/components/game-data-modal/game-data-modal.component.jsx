import React, { useState, useEffect } from 'react';

import './game-data-modal.styles.scss';

import { key } from '../../utils/secret';

const GameDataModal = props => {
  const [hidden, setHidden] = useState("hidden");
  const [gameTrailers, setGameTrailers] = useState({});

  const { finalChoice } = props;

  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      console.log(finalChoice === true, "use effect test");
    } else {
      setHidden("");

      const fetchGameData = async () => {
        await fetch(`https://api.rawg.io/api/games/${finalChoice.slug}/movies?key=${key}`)
        .then(response => response.json())
        .then(json => setGameTrailers(json))
        .catch(err => err);
        console.log("fetch");
      };
      fetchGameData();

    }
  }, [finalChoice]);
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">title</h4>
    </div>
  );
};

export default GameDataModal;