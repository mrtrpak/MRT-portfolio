import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './soccer.styles.scss';

import { soccerToken } from '../../utils/secret';

const SoccerPage = () => {
  let [response, setResponse] = useState([]);
  const [league, setLeague] = useState("BL1");
  
  useEffect(() => {
    fetch("https://api.football-data.org/v2/competitions/BL1/standings", {
      method: "GET",
      headers: { "X-Auth-Token": soccerToken }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.standings[0].table)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      {response}
    </div>
  );
};

export default SoccerPage;