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
    this.handleQty = this.handleQty.bind(this);
    this.handleItems = this.handleItems.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.state = {
      items: [],
      cartQty: 0,
      cartItems: []
    };
  }

  handleQty(q) {
    this.setState({cartQty : q});
  }

  handleItems(id) {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, id]      
    }));

  }

  emptyCart() {
    this.setState(prevState => ({
      cartItems: []      
    }));
  }

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
          <Route  path="/cart"       exact render={(routeProps) => <Cart cart={this.state.cartItems}
                                                                  qty={this.state.cartQty}
                                                                  onQtyChange={this.handleQty}
                                                                  onItemChange={this.handleItems}
                                                                  emptyCart={this.emptyCart}
                                                                  {...routeProps} />} />
          <Route  path="/location"   exact render={(routeProps) => <Location {...routeProps} />} />
          <Route  path="/"           exact render={(routeProps) => <Products items={this.state.items}
                                                                  cart={this.state.cartItems}
                                                                  qty={this.state.cartQty}
                                                                  onQtyChange={this.handleQty}
                                                                  onItemChange={this.handleItems}
                                                                  {...routeProps} /> } />
          <Route  path="/login"      exact render={(routeProps) => (  <Login
                                                                  logIn={this.props.status}
                                                                  loginSuccess={this.props.onLogin}
                                                                  redirectPathOnSuccess="/"
                                                                  {...routeProps}/>)} />
          <Route  path="/register"   exact render={(routeProps) => ( <Register
                                                                  redirectPathOnSuccess="/"
                                                                  logIn={this.props.status} 
                                                                  {...routeProps} /> )} />
          <Route  path="/addproduct"  exact render={(routeProps) => <AddProduct {...routeProps} />}  />
          <Route  path="/detail/:id"  exact render={(routeProps) => ( <Detail items={this.state.items} {...routeProps} />  )} />
        </Switch>
      </>
    );
  }
}
export default Pages;
