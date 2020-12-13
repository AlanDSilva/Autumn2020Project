import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
// components
import Login from "./auth/Login";
import Register from "./auth/Register";
import Products from "../product/Products";
import Services from "./Services";
import Help from "./Help";
import Location from "./Location";
import Cart from "../product/Cart";
import Detail from "../product/Detail";

import APIGetItems from '../../api/APIGetItems'
import AddProduct from '../cms/AddProduct'
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      items: [],
    };
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  logOut = () => {
    this.setState({ isAuthenticated: false });
  };

  componentDidMount = () => {
    APIGetItems()
    .then( (result) => {this.setState({ items: result.data });})
    .catch( error => console.log(error))
  };

  render() {
    return (
      <>
        <Switch>
          <Route  path="/services"   exact render={(routeProps) => <Services {...routeProps} />}/>
          <Route  path="/help"       exact render={(routeProps) => <Help {...routeProps} />}/>
          <Route  path="/cart"       exact render={(routeProps) => <Cart {...routeProps} />} />
          <Route  path="/location"   exact render={(routeProps) => <Location {...routeProps} />} />
          <Route  path="/"           exact render={(routeProps) => <Products items={this.state.items} {...routeProps} /> } />
          <Route  path="/login"      exact render={(routeProps) => (  <Login
                                                                 isAuthenticated={this.state.isAuthenticated}
                                                                  loginSuccess={this.onLogin}
                                                                  loginFail={this.onLoginFail}
                                                                  redirectPathOnSuccess="/"
                                                                  {...routeProps}/>)} />
          <Route  path="/register"   exact render={(routeProps) => ( <Register
                                                                  isAuthenticated={this.state.isAuthenticated}
                                                                  redirectPathOnSuccess="/"  
                                                                  {...routeProps} /> )} />
          <Route  path="/addproduct"  exact render={(routeProps) => <AddProduct {...routeProps} />}  />
          <Route  path="/detail/:id"  exact render={(routeProps) => ( <Detail items={this.state.items} {...routeProps} />  )} />
        </Switch>
      </>
    );
  }
}
export default Pages;
