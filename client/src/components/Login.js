import React from 'react';
import { Redirect, Link } from "react-router-dom";

import constants from '../constants.json';
import axios from 'axios';

export default function Login(props) {
  // login
  function login(event)
  {
    event.preventDefault();
    // get email and password from the forms
    const email = event.target['email'].value;
    const password = event.target['password'].value;
    // send to api
    axios
      .post(constants.baseAddress+'/api/login', { email, password })
      .then(res => {
        if(res.data){
            localStorage.setItem('email', email);
            localStorage.setItem('tokenUser', res.data.token) //store the email to the localstorage for futher use
            props.history.push(props.redirectPathOnSuccess); // direct to main page if login success
            // props.loginSuccess(); //set state to logged in 
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  
    return (
      <div> <br/><br/><br/>
          <form onSubmit={ login }>
                Email: <input type="text" name="email"/><br/>
                pass : <input type="password" name="password"/><br/>
                <button type="submit" value="hello">Login</button>
                <Link to="/register">Register Here</Link>
            </form>
      </div>
    );
  
}