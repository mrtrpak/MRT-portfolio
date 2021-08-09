import React, { useEffect, useState } from 'react';

import './soccer.styles.scss';

import { soccerToken } from '../../utils/secret';

const SoccerPage = () => {
  const [response, setResponse] = useState({});
  
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
    <ul>

    </ul>
  );
};

export default SoccerPage;