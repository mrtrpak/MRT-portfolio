import React from 'react';

import './game-query.styles.scss';

import CustomApiButton from '../custom-api-button/custom-api-button.component';

const GameQuery = () => {
  
  return (
    <form className="game-query">
      <input type="text" className="game-text" 
        id="game-query-input" placeholder="Enter a game title here" />
      <CustomApiButton btnTitle={"Find Game"} 
        onClick={e => console.log(e.target.value)} className="game-submit-btn" />
    </form>
  );
};

export default GameQuery;