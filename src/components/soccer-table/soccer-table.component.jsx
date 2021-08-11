import React, {useState, useEffect } from 'react';

import './soccer-table.styles.scss';

import { soccerToken } from '../../utils/secret';

const SoccerTable = (props) => {
  const { code } = props;
  const tableHeaders = [
    "POS", "TEAM NAME", "GP", "W", "D", "L", "P", "GF", "GA", "GD"
  ];

  const [standingsInfo, setStandingsInfo] = useState({
    0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {},
    10: {}, 11: {}, 12: {}, 13: {}, 14: {}, 15: {}, 16: {}, 17: {}, 18: {},
    19: {}, 20: {}
  });

  // useEffect(() => {
  //   fetch(`https://api.football-data.org/v2/competitions/${code}/standings`,
  //   { method: "GET",  headers: { "X-Auth-Token": soccerToken }})
  //   .then(response => response.json())
  //   .then(json => Object.entries(json.standings[0].table).map(
  //     (team, idx) => (
  //       setStandingsInfo({ ...standingsInfo, [idx]: {team}})
  //     )
  //   .then(console.log(standingsInfo))
  //   ))
  //   .catch(err => console.log(err));
  // });

  return (
    <table className="soccer-table">
      <thead className="soccer-headers-row">
        <tr>
          { tableHeaders.map(
            header => (<th key={header} className="soccer-header">{header}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default SoccerTable;

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