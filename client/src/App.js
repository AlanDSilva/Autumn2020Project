import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/headers/Header.js'
import MainPages from './components/mainpages/Pages'

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      logIn : false
      ,cart : []
    }
  }

  onLogin = () => {this.setState({ logIn: true })}
  onlogOut = () => {this.setState({ logIn: false })}
  onAddToCart = (item) => {
    this.setState({ cart: [...this.state.cart, item] })
    localStorage.setItem("cart",item);
    console.log(localStorage)
    console.log(item)
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
  }_
}

export default App;