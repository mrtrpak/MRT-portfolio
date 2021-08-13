import React from 'react';

import './gamer.styles.scss';

import GameData from '../../components/game-data/game-data.component';
import GameQueryButton from '../../components/game-query-button/game-query-button.component';

const GamerPage = () => (
  <div className="gamer-page">
    <h2 className="gamer-page-title">
      title
    </h2>
    <GameData />
    <GameQueryButton />
  </div>
);

export default GamerPage;