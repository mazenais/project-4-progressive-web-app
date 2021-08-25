import React, { useContext } from 'react'
import {
    Link
  } from "react-router-dom";
  import { AuthContext, AuthContextProvider } from '../../src/context/AuthContext'
  import DrawerButton from '../components/sideDrawer/DrawerButton'
  import '../components/Nav.css'
  
  


const Nav = props => {
    const {user} = useContext(AuthContext)

    console.log('user :>> ', user)


    return (
      <header className="toolbar"> 
        <nav className="toolbar-navigation">
          <div>
            <DrawerButton click={props.drawerClickHandler}/>
          </div>
            <div className="toolbar_logo"><a href="/"></a>The Premier League</div>
            <div className="spacer" />
          <div className="toolbar-navigation-items"> 
        <ul>
          <li>
            <Link exact to="/sports">Home</Link>
          </li>
          <li>
            <Link exact to="/Login">Log In</Link>
          </li>
          <li>
            <Link exact to="/Register">Register</Link>
          </li>
        </ul>
        </div>
      </nav>
      <main style={{marginTop: '18px'}}><p>{user? user.email : "Not logged in"}</p> </main>
      </header>
      
    )
}

export default Nav
