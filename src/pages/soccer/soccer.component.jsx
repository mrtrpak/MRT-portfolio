import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './soccer.styles.scss';

import soccerToken from '../../utils/secret';




const SoccerPage = () => {
  const [response, setResponse] = useState([]);

  const getLeagueStandings = league => {
    return axios.request({
      url: `https://api.football-data.org/v2/competitions/${league}/standings`,
      method: "get",
      headers: { "X-Auth-Token": soccerToken }
    })
    .then(res => setResponse(res))
    .catch(err => err);
  };

  useEffect(() =>{
    getLeagueStandings("PL")
  }, []);

  console.log(response);

  return (
    <div>
      {response}
    </div>
  );
};

export default SoccerPage;