import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
// components
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/product/Products";
import Services from "./components/Services";
import Help from "./components/Help";
import Location from "./components/Location";
import Cart from "./components/product/Cart";
import Detail from "./components/product/Detail";
import AddProduct from "./components/AddProduct";

import axios from "axios";
import constants from "./constants.json";

class App extends Component {
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
    axios
      .get(constants.baseAddress + "/api/items")
      .then((result) => {
        this.setState({ items: result.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <Router>
        <Navbar
          isAuthenticated={this.state.isAuthenticated}
          logOut={this.logOut}
        />
        <div>
          <Route
            path="/services"
            exact
            render={(routeProps) => <Services {...routeProps} />}
          />
          <Route
            path="/help"
            exact
            render={(routeProps) => <Help {...routeProps} />}
          />
          <Route
            path="/cart"
            exact
            render={(routeProps) => <Cart {...routeProps} />}
          />
          <Route
            path="/location"
            exact
            render={(routeProps) => <Location {...routeProps} />}
          />
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <Products items={this.state.items} {...routeProps} />
            )}
          />
          <Route
            path="/login"
            exact
            render={(routeProps) => (
              <Login
                isAuthenticated={this.state.isAuthenticated}
                loginSuccess={this.onLogin}
                loginFail={this.onLoginFail}
                redirectPathOnSuccess="/"
                {...routeProps}
              />
            )}
          />
          <Route
            path="/register"
            exact
            render={(routeProps) => (
              <Register
                isAuthenticated={this.state.isAuthenticated}
                redirectPathOnSuccess="/"
                {...routeProps}
              />
            )}
          />
          <Route
            path="/addproduct"
            exact
            render={(routeProps) => <AddProduct {...routeProps} />}
          />
          <Route
            path="/detail/:id"
            exact
            render={(routeProps) => (
              <Detail items={this.state.items} {...routeProps} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
