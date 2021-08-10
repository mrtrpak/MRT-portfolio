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
      <div className="league-options">
        <button className="league-option" onClick={
          () => setLeague({ title: "Premier League", code: "PL" })
        }>
          English Premier League
        </button>
        <button className="league-option" onClick={
          () => setLeague({ title: "Bundesliga", code: "BL1" })
        }>
          German Bundesliga
        </button>
        <button className="league-option" onClick={
          () => setLeague({ title: "La Liga", code: "PD" })
        }>
          Spanish La Liga
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