import React, { useState } from 'react';

import './soccer.styles.scss';

import SoccerTable from '../../components/soccer-table/soccer-table.component';

const SoccerPage = () => {
   const [league, setLeague] = useState({
     title: "Bundesliga",
     code: "BL1" 
    });

  const { title, code } = league;

  return (
    <div className="soccer-page">
      <div className="league-option-buttons">
        <button className="league-button" onClick={
          () => setLeague({ title: "English Premier League", code: "PL" })
        }>
          English Soccer League
        </button>
        <button className="league-button" onClick={
          () => setLeague({ title: "Deutsche Fußball-Bundesliga", code: "BL1" })
        }>
          German Soccer League
        </button>
        <button className="league-button" onClick={
          () => setLeague({ title: "Campeonato Nacional de Liga de Primera División", code: "PD" })
        }>
          Spanish Soccer League
        </button>
      </div>
      <h4 className="league-title">
        {title}
      </h4>
      <SoccerTable code={code} />
    </div>
  );
};

export default SoccerPage;