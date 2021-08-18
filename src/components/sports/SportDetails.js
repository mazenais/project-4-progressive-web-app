import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BrowserRouter as Router, useHistory} from "react-router-dom"
import axios from 'axios'
import SportDetailsItem from './SportDetailsItem'

const SportDetails = () => {

const history = useHistory();

const handleHistory = () => {
  history.push("/sports")

}

  let { name } = useParams();
  console.log("name :>>", name);
  

  const [sportDescription, setSportDescription] = useState([])

  const fetchData = () => {
    const teamsAPI = `https://www.thesportsdb.com/api/v1/json/1/search_all_seasons.php?id=4328`;

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
      <button onClick={handleHistory}>back</button>
      <h2>Details</h2>
      <p>{name}</p>
    
    </div>
    
  );
};

export default SportDetails;