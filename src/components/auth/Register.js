import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../src/context/AuthContext";
import "./Login.css";
import * as ReactBootstrap from "react-bootstrap";
import { Input } from "react-bootstrap";

const Register = () => {
  const [state, setState] = useState({ email: "", password: "", name: "" });

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(state);
  };

  console.log("state", state);

  const history = useHistory();

  const handleHistory = () => {
    history.push("/sports");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button className="return_button" onClick={handleHistory}>
          back
        </button>
      </div>
      <label>
        <p>name</p>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
      </label>
      <label>
        <p>email</p>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
      </label>
      <label>
        <p>password</p>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
      </label>
      <div>
        <button className="submit_button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
