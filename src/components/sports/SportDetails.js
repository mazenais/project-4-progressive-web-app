import React  from "react";
import { useParams } from "react-router-dom";
import {BrowserRouter as Router, useHistory} from "react-router-dom"

const SportDetails = ({items}) => {

const history = useHistory();

const handleHistory = () => {
  history.push("/sports")

}

  let { name } = useParams();
  console.log("name :>>", name);
  
 

  return (
    <div>
      <button onClick={handleHistory}>back</button>
      <h2>Details</h2>
      <p>{name}</p>
     
    </div>
    
  );
};

export default SportDetails;