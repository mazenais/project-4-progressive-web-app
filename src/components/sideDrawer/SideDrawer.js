import React from 'react';
import '../sideDrawer/SideDrawer.css'

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
        </ul>
    </nav>
);

export default sideDrawer;