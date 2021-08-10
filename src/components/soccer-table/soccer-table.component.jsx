import React from 'react';

import './soccer-table.styles.scss';

const SoccerTable = (props) => {
  const { code } = props;
  const tableHeaders = [
    "POS", "TEAM NAME", "GP", "W", "D", "L", "P", "GF", "GA", "GD"
  ];

  return (
    <table className="soccer-table">
      <tr className="soccer-headers-row">
        { tableHeaders.map(
          header => (<th className="soccer-header">{header}</th>)
        )}
      </tr>
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