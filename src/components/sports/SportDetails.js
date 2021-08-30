import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {BrowserRouter as Router, useHistory, Link} from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";


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
      <ReactBootstrap.Button className="return_button" style={{marginTop: '180px'}} onClick={handleHistory}>back</ReactBootstrap.Button>
      <div className="cards">
        
          <h3>Name:{team?.strAlternate}</h3>
          <div> 
          <ul>
            <li> 
          <p>Country:{team?.strCountry}</p> 
          </li>
          <li> 
          <p>Nicknames:{team?.strKeywords}</p>
          </li>
            <li> 
          <a href={`https://${team?.strWebsite}`} target="_blank">Website</a>
          </li>
          <li> 
          <a href={`https://${team?.strFacebook}`} target="_blank">Facebook</a>
          </li>
          <li> 
          <a href={`https://${team?.strYoutube}`} target="_blank">Youtube</a>
          </li>
          <li>
          <a href={`https://${team?.strTwitter}`} target="_blank">Twitter</a>
          </li>
          <li> 
          <a href={`https://${team?.strInstagram}`} target="_blank">Instagram</a>
          </li>

          </ul>
                
          </div>
      </div>
      </div>
    
  );
};

export default SportDetails;