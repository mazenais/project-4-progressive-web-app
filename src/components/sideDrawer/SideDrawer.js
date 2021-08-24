import React from 'react';
import '../sideDrawer/SideDrawer.css'
import CloseButton from './CloseButton';

const SideDrawer = props => (

    <nav className="side-drawer">
        <CloseButton className="close-button"click={props.drawerClickHandler}/>
        <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
        </ul>
    </nav>
);

export default SideDrawer;