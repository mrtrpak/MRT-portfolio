import React, { useState } from 'react';

import './soccer.styles.scss';

const SoccerPage = () => {
   const [league, setLeague] = useState("BL1");
  
  // useEffect(() => {
  //   fetch("https://api.football-data.org/v2/competitions/BL1/standings", {
  //     method: "GET",
  //     headers: { "X-Auth-Token": soccerToken }
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json.standings[0].table);
  //     Object.entries(json.standings[0].table).map(team => {
  //       return console.log(team[1].team.name, "hello object keys");
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }, [response]);

  return (
    <div className="soccer-page">
      {/* <div className="league-options">
        <button className="league-option" onClick={setLeague("PL")}>
          English Premier League
        </button>
        <button className="league-option" onClick={setLeague("BL1")}>
          German Bundesliga
        </button>
        <button className="league-option" onClick={setLeague("PD")}>
          Spanish La Liga
        </button>
      </div> */}

    </div>
  );
};

export default SoccerPage;