import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../src/context/AuthContext";
import "./Login.css";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };

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
        <p>email</p>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          required
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <div>
        <button className="submit_button" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
