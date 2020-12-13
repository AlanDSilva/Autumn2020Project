import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
// style
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// notification style
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import APIRegister from '../../../api/APIRegister'

// style
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // noti
  toast.configure();
  function notify(value) {
    if (value == 1) toast.success('Create success ^_^') 
    else if (value == 2) toast.error("Password must be more than 6 characters")
    else if (value == 3) toast.warning("Invalid username")
    else toast.warning("Missing input or invalid file")
  }
  // register
  function register(event) {
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
    // check if email is valid
    if (username.length < 4 ) {
        notify(3);
    }      
    // then check that password is more than 6
    else if(password.length < 6 )  notify(2); //warning noti
    else {
          APIRegister(formData, config) 
          .then(function (res) {
            console.log(res.data);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("tokenUser", res.data.token);
            localStorage.setItem("photo_url", res.data.photo_url); //store the username to the localstorage for futher use
            props.history.push(props.redirectPathOnSuccess); // direct to main page if login success
            notify(1);
          })
          .catch(function (error) {
            notify(4)
            console.log(error);
          });
      }
    }

  const classes = useStyles();
  // if someone try to go to register but still logged in, goes back to main page
  if (props.isAuthenticated) {
    return(<React.Fragment><Redirect to='/' /></React.Fragment>)
  } else {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={ register }>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField  variant="outlined" required fullWidth id="email" label="Email Address" autoComplete="email"
                                                                                   value={username}
                                                                                   onChange={(e) => {
                                                                                     setUsername(e.target.value);
                                                                                   }}/>
            </Grid>

            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth  id="lastName" 
                                                                                    type="file"
                                                                                    onChange={(e) => {
                                                                                      setSelectedFile(e.target.files[0]);
                                                                                    }}  />
            </Grid>
            
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth label="Password" type="password" autoComplete="current-password"
                                                                                   value={password}
                                                                                   onChange={(e) => {
                                                                                     setPassword(e.target.value);
                                                                                   }}  />
            </Grid>
          </Grid>
          <Button  type="submit"  fullWidth variant="contained" color="primary" className={classes.submit} >
                Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <Link to="/login" variant="body2"> {"Already have an account? Sign in"} </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}}
