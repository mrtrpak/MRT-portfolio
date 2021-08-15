import React from 'react';

import './game-query.styles.scss';

import CustomApiButton from '../custom-api-button/custom-api-button.component';

const GameQuery = () => (
  <div>
    <input type="text" />
    <CustomApiButton title={"Find Game"} 
      onClick={() => console.log('hello')} />
  </div>
);

export default GameQuery;