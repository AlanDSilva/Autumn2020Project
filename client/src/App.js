import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import React, { Component } from 'react';
// components
import Navbar from './components/Navbar'
import Login from './components/Login2'
import Register from './components/Register'
import Products from './components/Products'
import Services from './components/Services'
import Help from './components/Help'
import Location from './components/Location'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userInfo: null
        ,isAuthenticated: false
      };
  }

  onLogin = (result) => {
    this.setState({ isAuthenticated: true })
    // this.setState({userInfo: result}) 
  }

  logOut = () => {
    this.setState({isAuthenticated : false})
  }
  

  render() {
      return ( 
        <Router>
          <Navbar isAuthenticated={this.state.isAuthenticated}  logOut = {this.logOut}/>
              <div>
                  <Route path="/services" exact render={(routeProps) => <Services  {...routeProps}/>} 
                                                                        />  
                  <Route path="/help" exact render={(routeProps) => <Help {...routeProps}/>} 
                                                                        />  
                  <Route path="/cart" exact render={(routeProps) => <Cart {...routeProps}/>} 
                                                                        />  
                  <Route path="/location" exact render={(routeProps) => <Location {...routeProps}/>} 
                                                                        />  
                  <Route path="/" exact render={(routeProps) => <Products isAuthenticated={this.state.isAuthenticated}
                                                                        {...routeProps}/>} 
                                                                        />  
                  <Route path="/login" exact render={(routeProps) => <Login
                                                                            checkData = { this.checkData}
                                                                            isAuthenticated={this.state.isAuthenticated}
                                                                            loginSuccess = { this.onLogin }
                                                                            loginFail = { this.onLoginFail }
                                                                            userInfo={ this.state.userInfo }
                                                                            redirectPathOnSuccess="/"
                                                                            {...routeProps} />} />
                  <Route path="/register" exact render={(routeProps) => <Register
                                                                            isAuthenticated={this.state.isAuthenticated}
                                                                            redirectPathOnSuccess="/login"
                                                                        {...routeProps}/>} 
                                                                        />
                  <Route path="/addproduct" exact render={(routeProps) => <AddProduct {...routeProps}/>} 
                                                                      />            
                                                                                                                      
              </div>  
        </Router>    
      );
  }
}

export default App;
