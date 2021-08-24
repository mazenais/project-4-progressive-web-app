import React, { useState, useEffect } from "react";
import axios from "axios";

import SportGrid from "./components/sports/SportGrid";
import Register from './components/auth/Register'
import Login from "./components/auth/Login"
import { AuthContextProvider } from './context/AuthContext'
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SportDetails from "./components/sports/SportDetails";
import Nav from '../src/components/Nav'
import SideDrawer from './components/sideDrawer/SideDrawer'
import BackDrop from './components/Backdrop/BackDrop'
import { render } from "@testing-library/react";

const App = () => {
  
   state = {
    sideDrawerOpen: false
  };

  const drawerClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() 
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <BackDrop />
    }
  


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
      );

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    };
    fetchItems()
  }, []);
 
  return (
    <div className="container" style={{height: '100%'}}>
      <AuthContextProvider> 
     
      <Router>
      <Nav drawerClickHandler={this.drawerClickHandler} />
      {sideDrawer}
      {backdrop}

      <Switch>
          <Route exact path="/sports">
          <SportGrid isLoading={isLoading} items={items} />
          </Route>
          <Route exact path="/sports/:idTeam">
            <SportDetails/>
          </Route>
          <Route exact path="/Login">
          <Login />
          </Route>
          <Route exact path="/Register">
          <Register />
          </Route>
          
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
