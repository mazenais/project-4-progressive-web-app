import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import SportGrid from "./components/sports/SportGrid";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`
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
      <SportGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
