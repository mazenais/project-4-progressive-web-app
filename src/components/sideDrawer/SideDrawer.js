import React, { useContext } from 'react';
import {
    Link
  } from "react-router-dom";
import '../sideDrawer/SideDrawer.css'
import { AuthContext } from '../../context/AuthContext'
import { ThemeContext } from '../../context/themeContext'



const SideDrawer = props => {
  const { user } = useContext(AuthContext)
    const { activeTheme, toggleTheme } = useContext(ThemeContext)

    const handleClick = () => {
        activeTheme === "light" ? toggleTheme("dark") : toggleTheme("light")
}

return (

    <nav className="side-drawer">
        
        <div>
          <button onClick={handleClick}>toggle</button>
          <p>{user ? user.email : "Not logged in"}</p>
          <ul>
          <li>
            <Link  to="/sports" target="_parent">Home</Link>
          </li>
          <li>
            <Link  to="/Login" target="_parent">Log In</Link>
          </li>
          <li>
            <Link  to="/Register" target="_parent">Register</Link>
          </li>
          <li>
            <Link  to="/ChatRoom" target="_parent">Chat Room</Link>
          </li>
        </ul>
        </div>
        
    </nav>
 );
}
export default SideDrawer