import React, { useContext } from 'react'
import {
    Link
  } from "react-router-dom";
  import { AuthContext, AuthContextProvider } from '../../src/context/AuthContext'

const Nav = () => {
    const {user} = useContext(AuthContext)

    console.log('user :>> ', user)


    return (
        <nav>
            <p>{user? user.email : "Not logged in"}</p>
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
      </nav>
    )
}

export default Nav
