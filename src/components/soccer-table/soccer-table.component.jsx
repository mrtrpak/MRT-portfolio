import React, {useState, useEffect } from 'react';

import './soccer-table.styles.scss';

import { soccerToken } from '../../utils/secret';

import TableHeaders from '../table-headers/table-headers.component';

const SoccerTable = (props) => {
  const { code } = props;
  

  const [standingsInfo, setStandingsInfo] = useState({ table: {}});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);

    const fetchData = async () => {
      await fetch(
        `https://api.football-data.org/v2/competitions/${code}/standings`,
        { method: "GET",  headers: { "X-Auth-Token": soccerToken }})
        .then(response => response.json())
        .then(json => setStandingsInfo({ table: json.standings[0].table }))
        .catch(err => console.log(err));
      };

      fetchData();
      setIsMounted(true);

      console.log(standingsInfo);
  }, [code]);

  return (
    <table className="soccer-table">
      <TableHeaders />
      <tbody>
        { !isMounted ? <tr></tr> : 
          Object.entries(standingsInfo.table).map((team, idx) => {
            return (
              <tr key={idx}>
                {console.log(team[1].team.name)}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default SoccerTable;