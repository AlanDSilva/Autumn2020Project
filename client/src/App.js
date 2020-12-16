import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/headers/Header.js'
import MainPages from './components/mainpages/Pages'

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      logIn : false
      ,cart : [],
      counter: 0
    }
  }


  onLogin = () => {this.setState({ logIn: true })}
  onlogOut = () => {this.setState({ logIn: false })}

  onAddToCart = (item) => {
    var newCart = this.state.cart;
    newCart.push(item);
    localStorage.setItem("cart",JSON.stringify(newCart));
    // get counter
    var counter = JSON.parse(localStorage.getItem('cart')).length
    localStorage.setItem("counter",(counter)); //for global storage
    this.setState({ cart: newCart, counter })
  }

  render() {
    return (
      <Router>
          <div>
            <Header status={this.state.logIn} logOut = {this.onlogOut}/>
            <MainPages status={this.state.logIn} onLogin = {this.onLogin} onAddToCart = {this.onAddToCart}/>
          </div>
      </Router>
    );
  }
}

export default App;