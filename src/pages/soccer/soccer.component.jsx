import React, { useEffect, useState } from 'react';

import './soccer.styles.scss';

import { soccerToken } from '../../utils/secret';

const SoccerPage = () => {
  let [response, setResponse] = useState([]);
  const [league, setLeague] = useState("BL1");

  
  useEffect(() => {
    setLeague("PL");
    console.log(league);
  }, [league, setLeague]);

  return (
    <div style={{ height: "300px"}}>
      <h1>hello hoolojadkfna</h1>
    </div>
  );
};

export default SoccerPage;