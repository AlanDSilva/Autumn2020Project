import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import constants from "../constants.json";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const register = (event) => {
    event.preventDefault();

    // setup form data and configuration
    let formData = new FormData();
    formData.append("username", username);
    formData.append("file", selectedFile);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(constants.baseAddress + "/api/users", formData, config)
      .then(function (response) {
        console.log(response.data);
        props.history.push(props.redirectPathOnSuccess);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <br />
      <br />
      <br />
      <br />
      <h3>Register form</h3>
      <form onSubmit={register} encType="multipart/form-data">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <br />
        Photo:
        <input
          type="file"
          //value={selectedFile}
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
          }}
        />{" "}
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
