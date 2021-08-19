import React, {useState, useEffect } from 'react';

import './soccer-table.styles.scss';

import { soccerToken } from '../../utils/secret';

import SoccerTableHeaders from '../soccer-table-headers/soccer-table-headers.component';

const SoccerTable = (props) => {
  const { code } = props;
  

  const [standingsInfo, setStandingsInfo] = useState({ table: {}});
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(false);

    const fetchSoccerData = async () => {
      await fetch(
        `https://api.football-data.org/v2/competitions/${code}/standings`,
        { method: "GET",  headers: { "X-Auth-Token": soccerToken }})
        .then(response => response.json())
        .then(json => setStandingsInfo({ table: json.standings[0].table }))
        .catch(err => console.log(err));
      }; 
      fetchSoccerData();
      setIsMounted(true);
      
  }, [code]);

  return (
    <div className="soccer-table-container">
      <table className="soccer-table">
        <SoccerTableHeaders />
        <tbody>
          { !isMounted ? null : 
            Object.entries(standingsInfo.table).map((team, idx) => {
              const { name, crestUrl } = team[1].team;
              const { 
                position, gamesPlayed, won, draw, lost, points,
                goalsFor, goalsAgainst, goalDifference
              } = team[1];

              return (
                <tr key={idx} className={`team-data-row ${position}-pos`}>
                  <td className="data position">{position}</td>
                  <td className="data">{name}</td>
                  <td className="data">
                    <img className="crestUrl" src={crestUrl} alt="team logo" />
                  </td>
                  <td className="data">{gamesPlayed}</td>
                  <td className="data">{won}</td>
                  <td className="data">{draw}</td>
                  <td className="data">{lost}</td>
                  <td className="data points">{points}</td>
                  <td className="data">{goalsFor}</td>
                  <td className="data">{goalsAgainst}</td>
                  <td className="data data-last">{goalDifference}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default SoccerTable;