import React, { useState } from "react";
import { Link } from "react-router-dom";

import constants from "../constants.json";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login
  const login = (event) => {
    event.preventDefault();
    // send to api
    axios
      .post(constants.baseAddress + "/api/login", { username, password })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          localStorage.setItem("username", username);
          localStorage.setItem("tokenUser", res.data.token);
          localStorage.setItem("photo_url", res.data.photo_url); //store the username to the localstorage for futher use
          props.history.push(props.redirectPathOnSuccess); // direct to main page if login success
          // props.loginSuccess(); //set state to logged in
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      {" "}
      <br />
      <br />
      <br />
      <h3>Login form</h3>
      <form onSubmit={login}>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
        <Link to="/register">Register Here</Link>
      </form>
    </div>
  );
}
