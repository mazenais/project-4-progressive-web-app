import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const SportDetails = () => {
  let { name } = useParams();
  console.log("name :>>", name);
  

  const [sportDescription, setSportDescription] = useState([])

  const fetchData = () => {
    const teamsAPI = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;

    const getTeamDetails = axios.get(teamsAPI)

    axios.all([getTeamDetails]).then(
      axios.spread((...allData) => {
        const allDataTeams = allData[0].data.strTeam


        setSportDescription(allDataTeams)
      })
    )
  }
useEffect(() => {
  fetchData()
}, [])
 

  return (
    <div>
      <h2>Details</h2>
      <p>{name}</p>
      Team name is: { sportDescription }
    </div>
    
  );
};

export default SportDetails;