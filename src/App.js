import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import SportGrid from "./components/sports/SportGrid";
import Login from "./login-folder/Login"

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SportDetails from "./components/sports/SportDetails";

const App = () => {
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
    <div className="container">
      <Header />
      
      <Router>
      <nav>
          <ul>
            <li>
              <Link exact to="/sports">Home</Link>
            </li>
            <li>
              <Link exact to="/Login">Log In</Link>
            </li>
          </ul>
        </nav>

      <Switch>
          <Route exact path="/sports">
          <SportGrid isLoading={isLoading} items={items} />
          </Route>
          <Route exact path="/sports/:idTeam">
            <SportDetails/>
          </Route>
          <Route exact path="/Login">
          <Login/>
          </Route>
          
        </Switch>

      </Router>
    </div>
  );
};

export default App;
