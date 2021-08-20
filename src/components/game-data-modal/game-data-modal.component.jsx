import React, { useState, useEffect } from 'react';

import './game-data-modal.styles.scss';

const GameDataModal = props => {
  const [hidden, setHidden] = useState("hidden");

  const { finalChoice } = props;

  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      console.log(finalChoice === true, "use effect test");
    } else {
      setHidden("");
    }
  }, [finalChoice]);
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">{finalChoice.name}</h4>
    </div>
  );
};

export default GameDataModal;