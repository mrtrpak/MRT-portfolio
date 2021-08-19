import React, { useState, useEffect } from 'react';

import './game-data-modal.styles.scss';

const GameDataModal = props => {
  const [finalSelected, setFinalSelected] = useState(false);
  const { slug } = props;

  useEffect(() => {
  });
  
  return (
    <div className="game-data-modal">
      <h4 className="game-data-title">title</h4>
    </div>
  );
};

export default GameDataModal;