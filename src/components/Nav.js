import React, { useContext } from "react";
import {
  AuthContext,
  AuthContextProvider,
} from "../../src/context/AuthContext";
import DrawerButton from "../components/sideDrawer/DrawerButton";

import "../components/Nav.css";

const Nav = (props) => {
  const { user } = useContext(AuthContext);

  console.log("user :>> ", user);

  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div>
          <DrawerButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">Premier League</div>
      </nav>
      <main
        style={{ position: "fixed", marginTop: "18px", marginLeft: "10px" }}
      >
        <p>{user ? user.email : "Not logged in"}</p>{" "}
      </main>
    </header>
  );
};

export default Nav;
