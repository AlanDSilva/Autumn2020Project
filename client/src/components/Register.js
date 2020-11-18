import React from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
import constants from '../constants.json';

export default function Register(props) {
  function register(event) {
    event.preventDefault();
    // get value from the form
    var firstname = event.target['firstname'].value;
    var lastname = event.target['lastname'].value;
    var email = event.target['email'].value;
    var password = event.target['password'].value;

    axios.post(constants.baseAddress +'/api/users', {
          firstname,
          lastname,
          email,
          password
    })
    .then(function (response) {
          props.history.push(props.redirectPathOnSuccess);
    })
    .catch(function (error) {
          console.log(error);
    });
    } 
    return (
        <div> <br/><br/><br/><br/>
            <form onSubmit={ register }>
                Firstname: <input type="text" name="firstname"/><br />
                Lastname: <input type="text" name="lastname"/><br/>
                Email: <input type="text" name="email"/><br/>
                pass : <input type="password" name="password"/><br/>
                <button type="submit" value="hello">Register</button>
            </form>
        </div>
      );
}