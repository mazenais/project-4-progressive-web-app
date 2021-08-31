import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../sideDrawer/SideDrawer.css'


const SideDrawer = props => (

    <nav className="side-drawer">
        
        <div>
          <ul>
          <li>
            <Link exact to="/sports" target="_parent">Home</Link>
          </li>
          <li>
            <Link exact to="/Login" target="_parent">Log In</Link>
          </li>
          <li>
            <Link exact to="/Register" target="_parent">Register</Link>
          </li>
          <li>
            <Link exact to="/Chat" target="_parent">Chat Room</Link>
          </li>
        </ul>
        </div>
        
    </nav>
);

export default SideDrawer;