import './DrawerButton.css'
import React from 'react';


const drawerButton = props => (
    <button className="toggle-button" onClick={props.click}> 
        <div classname="button_line" />
        <div classname="button_line" />
        <div classname="button_line" />
    </button>

);

export default drawerButton;