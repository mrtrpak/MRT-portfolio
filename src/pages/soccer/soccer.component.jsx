import React, { useState } from 'react';

import './soccer.styles.scss';

import SoccerTable from '../../components/soccer-table/soccer-table.component';
import CustomApiButton from '../../components/custom-api-button/custom-api-button.component';

const SoccerPage = () => {
   const [league, setLeague] = useState({
     title: "Deutsche Fußball-Bundesliga",
     code: "BL1" 
    });

  const { title, code } = league;

  return (
    <div className="soccer-page">
      <div className="soccer-page-button-container">
        <CustomApiButton btnTitle={"English Soccer League"}  
          onClick={() => setLeague({ title: "English Premier League", code: "PL" })} />
        <CustomApiButton btnTitle={"German Soccer League"}
          onClick={() => setLeague({ title: "Deutsche Fußball-Bundesliga", code: "BL1" })} />
        <CustomApiButton btnTitle={"Spanish Soccer League"}
          onClick={() => setLeague({ title: "Campeonato Nacional de Liga de Primera División", code: "PD" })} />
      </div>
      <h4 className="league-title">
        {title}
      </h4>
      <SoccerTable code={code} />
    </div>
  );
};

export default SoccerPage;