import React from 'react';
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

import axios from 'axios';
import constants from '../constants.json';

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
  
  // noti
  toast.configure();
  function notify(value) {
    if (value == 1) toast.success('Create success ^_^') 
    else if (value == 2) toast.error("Password must be more than 6 characters")
    else if (value == 3) toast.warning("Invalid Email")
    else toast.warning("Firstname, lastname is invalid")
  }
  // register
  function register(event) {
    event.preventDefault();
    // get value from the form
    var firstname = event.target['firstname'].value;
    var lastname = event.target['lastname'].value;
    var email = event.target['email'].value;
    var password = event.target['password'].value;
    
    // check if email is valid
    if (typeof email !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        notify(3);
      }
      else if (firstname.length == 0 ) notify(4) //check fname is valid
      else if (lastname.length == 0) notify(4)  //check lname is valid
      // then check that password is more than 6
      else if(password.length < 6 ) {
        notify(2); //warning noti
      }
      else {
        // everything works well
        axios.post(constants.baseAddress +'/api/users', {
          firstname,
          lastname,
          email,
          password
      })
      .then(function (response) {
          notify(1);
          props.history.push(props.redirectPathOnSuccess);
      })
      .catch(function (error) {
          notify(2)
          console.log(error);
      });
      }
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
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="fname" variant="outlined" required fullWidth id="firstName"  label="First Name" autoFocus
                                                                                    name="firstname"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" required fullWidth  id="lastName"  label="Last Name" autoComplete="lname"
                                                                                    name="lastname"  />
            </Grid>
            <Grid item xs={12}>
              <TextField  variant="outlined" required fullWidth id="email" label="Email Address" autoComplete="email"
                                                                                   name="email"/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth label="Password" type="password" autoComplete="current-password"
                                                                                   name="password"  />
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
} 
}