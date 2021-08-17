import React from 'react'
import { Link } from "react-router-dom";


const SportDetailsItem = (item) => {
    console.log(item);

    return (
        <Link to={`/sports/${item.strAlternate}`}>
            <h3>{item.strDescriptionEN}</h3>
    )
}

export default SportDetailsItem
