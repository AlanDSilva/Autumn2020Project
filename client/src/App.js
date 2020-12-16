import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/headers/Header.js'
import MainPages from './components/mainpages/Pages'
// notification style
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
  setCounter = (counter) => { 
    this.setState({counter})
    localStorage.setItem("counter", counter);
  }
  onAddToCart = (item) => {
    var newCart = this.state.cart;
    newCart.push(item);
    localStorage.setItem("cart",JSON.stringify(newCart));
    // get counter
    var counter = JSON.parse(localStorage.getItem('cart')).length
    localStorage.setItem("counter",(counter)); //for global storage
    this.setState({ cart: newCart, counter })
    toast.success('Item added to the shopping cart ^_^')
  }

  render() {
    toast.configure();
    return (
      <Router>
          <div>
            <Header status={this.state.logIn} logOut = {this.onlogOut}/>
            <MainPages status={this.state.logIn} onLogin = {this.onLogin} onAddToCart = {this.onAddToCart} setCounter = {this.setCounter}/>
          </div>
      </Router>
    );
  }
}

export default App;