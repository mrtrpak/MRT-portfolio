import React from 'react';

import './soccer-key-modal.styles.scss';

const SoccerKeyModal = () => {
  const headersKey = [
    "POS: position", "GP: games played", "W: wins (3 points per)",
    "D: draws (1 point per)", "L: loses (0 points per)", "PTS: total points",
    "GF: goals for", "GA: goals against", "GD: goal differential"
  ];
  
  return (
    <div className="soccer-key-modal">
      <h4 className="key-modal-title">
        <span className="key-title-text">SOCCER KEY</span>
      </h4>
      <ul className="headers-key-list">
        {
          headersKey.map((text, idx) => (
            <li key={idx} className="headers-key-text">{text}</li> 
          ))
        }
      </ul>
      <p className="color-key">
        <span className="green-key-description key-description">The GREEN colored teams </span>
        indicate they are in a position to possibly qualify for the UEFA Champions League next season.
      </p>
      <p className="color-key">
        <span className="red-key-description key-description">The RED colored teams </span>
        indicate they are in danger of being relegated from the league to a lower level league.
      </p>
    </div>
  );
};

export default SoccerKeyModal;