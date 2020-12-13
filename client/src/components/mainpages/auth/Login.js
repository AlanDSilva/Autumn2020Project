import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
// style
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
// notification style
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import APILogin from '../../../api/APILogin'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/collection/4511514)', //from https://unsplash.com/collections/4511514/clothing
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const classes = useStyles();
  
  // noti
  toast.configure();
  function notify(value) {
    value == 1 ? toast.success('Welcome back, customer :)') : toast.error("Wrong username or password :(")
  }
  // login
  function login(event)
  {
    event.preventDefault();
    console.log(username, password)
    // send to api
    APILogin(username, password)
      .then(res => {
        if(res.data){
            notify(1); // 1 mean success
            localStorage.setItem("username", username);
            localStorage.setItem("tokenUser", res.data.token);
            localStorage.setItem("photo_url", res.data.photo_url); //store the email to the localstorage for futher use
            props.history.push(props.redirectPathOnSuccess); // direct to main page if login success
            props.loginSuccess(); //set state to logged in 
        }
      })
      .catch(error => {
        console.log(error.response);
        notify(2); // fail
      });
  }
  if (props.isAuthenticated) { //if somebody tries to goes back to register
    return(<React.Fragment><Redirect to='/' /></React.Fragment>)
  } else {
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar> 
            <Typography component="h1" variant="h5">Sign in</Typography>
            
            {/* form */}
            <form className={classes.form} noValidate onSubmit={login}>
              <TextField variant="outlined" margin="normal" fullWidth required label="Username"
                                                                          type="text"
                                                                          value={username}
                                                                          onChange={(e) => {
                                                                            setUsername(e.target.value);
                                                                          }} />
              <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password"  autoComplete="current-password"
                                                                               name="password" value={password}
                                                                               onChange={(e) => {
                                                                                 setPassword(e.target.value);
                                                                               }}/>  
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"  />
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs> </Grid>
                <Grid item>
                  <Link to="/register" variant="body2"> {"Don't have an account? Sign Up"} </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}