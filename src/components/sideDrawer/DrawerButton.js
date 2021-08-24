import './DrawerButton.css'
import React from 'react';


const DrawerButton = props => {
    console.log(props)
    return (

    <button className="toggle-button" onClick={props.click}> 
        <div className="button_line" />
        <div className="button_line" />
        <div className="button_line" />
    </button>

);
    }
export default DrawerButton;