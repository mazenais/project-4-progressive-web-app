import React from "react";
import { Link } from "react-router-dom";

const SportItem = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/sports/${item.strSport}`}>
      <h3>{ item.strSport }</h3>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.strSportThumb} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.strSport}</h1>
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
