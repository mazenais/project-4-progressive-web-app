import React, { useContext } from 'react';
import {
    Link
  } from "react-router-dom";
import '../sideDrawer/SideDrawer.css'
import { AuthContext } from '../../context/AuthContext'
import { ThemeContext } from '../../context/themeContext'
import * as ReactBootstrap from "react-bootstrap";



const SideDrawer = ({ drawerClickHandler }) => {
  const { user } = useContext(AuthContext)
    const { activeTheme, toggleTheme } = useContext(ThemeContext)

    const handleClick = () => {
        activeTheme === "light" ? toggleTheme("dark") : toggleTheme("light")
}

return (

    <nav className="side-drawer">
        
        <div onClick={drawerClickHandler}>
          <button onClick={handleClick}>toggle</button>
          <p>{user ? user.email : "Not logged in"}</p>
          <ul>
          <li>
            <Link to="/sports">Home</Link>
          </li>
          <li>
            <Link to="/Login" >
            Log In
            </Link>
          </li>
          <li>
            <Link to="/Register" >
            Register
            </Link>
          </li>
          <li>
            <Link to="/ChatRoom">Chat Room</Link>
          </li>
          
        </ul>
        </div>
    </nav>
 );
}
export default SideDrawer