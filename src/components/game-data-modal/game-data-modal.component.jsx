import React, { useState, useEffect } from 'react';

import './game-data-modal.styles.scss';

const GameDataModal = props => {
  const [hidden, setHidden] = useState("hidden");
  const { slug } = props;

  useEffect(() => {
    if (!slug) {
      return
    } else {
      setHidden("");
      
    }
  }, [slug]);
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">title</h4>
    </div>
  );
};

export default GameDataModal;