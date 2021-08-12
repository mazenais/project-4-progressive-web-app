import React from 'react'
import {
    useParams
  } from "react-router-dom";

const SportDetails = () => {
    let { name } = useParams();
    console.log('name :>>', name);
    return (
        <div>
            <h2>Details</h2>
            <p>You have selected {name}</p>
        </div>
    )
}

export default SportDetails
