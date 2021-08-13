import React from 'react';

import './gamer.styles.scss';

import GameData from '../../components/game-data/game-data.component';
import GameQueryButton from '../../components/game-query-button/game-query-button.component';

const GamerPage = () => (
  <div>
    <h2>
      title
    </h2>
    <GameData />
    <GameQueryButton />
  </div>
);

export default GamerPage;