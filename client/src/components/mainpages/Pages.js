import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
// components
import Login from "./auth/Login";
import Register from "./auth/Register";
import Products from "../product/Products";
import Help from "./Help";
import Cart from "../product/Cart";
import Detail from "../product/Detail";
import History from "../mainpages/History";
import APIGetItems from '../../api/APIGetItems'
import AddProduct from '../cms/AddProduct'
import { trackPromise } from 'react-promise-tracker';
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    trackPromise(
      APIGetItems()
      .then( (result) => {this.setState({ items: result.data })})
      .catch(error => console.log(error))
    );
  }
 
  render() {
    return (
      <>
        <Switch>
          <Route  path="/help"       exact render={(routeProps) => <Help {...routeProps} />}/>
          <Route  path="/history"    exact render={(routeProps) => <History {...routeProps} />}/>
          <Route  path="/cart"       exact render={(routeProps) => <Cart {...routeProps} redirectPathOnFail="/login" redirectPathOnSuccess="/history" setCounter={this.props.setCounter}/>} />
          <Route  path="/"           exact render={(routeProps) => <Products items={this.state.items} onAddToCart={this.props.onAddToCart} {...routeProps} /> } />
          <Route  path="/login"      exact render={(routeProps) => (  <Login
                                                                  logIn={this.props.status}
                                                                  loginSuccess={this.props.onLogin}
                                                                  redirectPathOnSuccess="/"
                                                                  {...routeProps}/>)} />
          <Route  path="/register"   exact render={(routeProps) => ( <Register
                                                                  redirectPathOnSuccess="/"
                                                                  loginSuccess={this.props.onLogin}
                                                                  logIn={this.props.status} 
                                                                  {...routeProps} /> )} />
          <Route  path="/addproduct"  exact render={(routeProps) => <AddProduct onUpdateItem={this.onUpdateItem} redirectPathOnSuccess="/" {...routeProps} />}  />
          <Route  path="/detail/:id"  exact render={(routeProps) => ( <Detail items={this.state.items} onAddToCart={this.props.onAddToCart} {...routeProps} />  )} />
        </Switch>
      </>
    );
  }
}
export default Pages;