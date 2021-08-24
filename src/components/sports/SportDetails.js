import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {BrowserRouter as Router, useHistory, Link} from "react-router-dom"


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
      <button className="return_button" style={{marginTop: '180px'}} onClick={handleHistory}>back</button>
      <div className="cards">
            <h3>Name:{team?.strAlternate}</h3>
            <p>Country:{team?.strCountry}</p> 
            <p>Nicknames:{team?.strKeywords}</p>
            <a href={"team?.strWebsite"}>Website</a>
            <a href={team?.strFacebook}>Facebook</a>
            <a href={"team?.strYoutube"}>Youtube</a>
            <a href={"team?.strTwitter"}>Twitter</a>
            <a href={"https://google.com"}>Google</a>
            <a href="/teams/{team.strWebsite}">w</a>
                

      </div>
      </div>
    
  );
};

export default SportDetails;