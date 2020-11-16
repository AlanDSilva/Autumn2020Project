import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import React, { Component } from 'react';
// components
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userInfo: null
      };
  }

  onLogin = (result) => {
    this.setState({ isAuthenticated: true })
    this.setState({userInfo: result})
    this.checkData();
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }
  

  render() {
      return ( 
        
        <Router>
          <Navbar/>
              <div>
                  <Route path="/login" exact render={(routeProps) => <Login
                                                                            // checkData = { this.checkData}
                                                                            // isAuthenticated={this.state.isAuthenticated}
                                                                            // loginSuccess = { this.onLogin }
                                                                            // loginFail = { this.onLoginFail }
                                                                            // userInfo={ this.state.userInfo }
                                                                            // redirectPathOnSuccess="/verify"
                                                                            {...routeProps} />} />
                  <Route path="/register" exact render={(routeProps) => <Register
                                                                        {...routeProps}/>} 
                                                                        />                                                        
              </div>  
        </Router>    
      );
  }
}

export default App;
