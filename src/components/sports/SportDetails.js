import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {BrowserRouter as Router, useHistory} from "react-router-dom"

const SportDetails = ({items}) => {

const history = useHistory();

const handleHistory = () => {
  history.push("/sports")

}

  let { idTeam } = useParams();
  console.log("idTeam :>>", idTeam);
  
  const [team, setTeam] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
      );

      console.log(result.data);
      setTeam(result.data.teams[0])
      setIsLoading(false)
    };
    fetchItems()
  }, []);
 

  return (
    <div>
      <button onClick={handleHistory}>back</button>
      <h2>Details</h2>
      <p>{team?.strDescriptionEN}</p>
     
    </div>
    
  );
};

export default SportDetails;