import axios from 'axios';

const API = {
  getStandings: code => {
    // const KEYS = require("./secret") || null;
    return axios.request({
      url: `https://api.football-data.org/v2/competitions/${code}/standings`,
      method: "get",
      headers: { 
        "X-Auth-Token": process.env.soccerKey,
        "Access-Control-Allow-Origin": "*"
       }
    })
  }
};

export default API;