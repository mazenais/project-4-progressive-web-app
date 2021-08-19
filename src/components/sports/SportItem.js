import React from "react";
import { Link } from "react-router-dom";

const SportItem = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/sports/${item.idTeam}`}>
      <h3>{ item.strAlternate }</h3>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.strTeamBadge} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.strAlternate}</h1>
            <h2>{item.strCountry}</h2>
            <ul>
              <li>
                <strong>Type:</strong> {item.strFormat}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SportItem;
