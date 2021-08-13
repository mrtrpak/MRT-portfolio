import React from 'react';

import './gamer.styles.scss';

import GameData from '../../components/game-data/game-data.component';
import GameQuery from '../../components/game-query/game-query.component';

const GamerPage = () => (
  <div className="gamer-page">
    <h2 className="gamer-page-title">
      title
    </h2>
    <GameData />
    <GameQuery />
  </div>
);

export default GamerPage;