import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import Items from './Items'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link to="/" className="navbar-brand js-scroll-trigger">
              <b className="navbar-items">Store Name</b>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <Items logIn = {this.props.logIn} logOut ={this.props.logOut}/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
