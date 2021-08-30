import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './DrawerButton.css'


const DrawerButton = props => {
    console.log(props)
    return (
        <React.Fragment>
           <CssBaseline /> 
           { 
    <button className="toggle-button" onClick={props.click}> 
        <div className="button_line" />
        <div className="button_line" />
        <div className="button_line" />
    </button>
    }
    </React.Fragment>
);
    }
export default DrawerButton;