import React  from 'react';
import {Link} from "react-router-dom";
import './style/navbar.css'
import Cart from './style/cart.svg'

export default class Navbar extends React.Component {  
  
    render() {
        return (
            <div>
              {/* Navigation*/}
              <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
        <Link to="/" className="navbar-brand js-scroll-trigger"><b className="navbar-items">Store Name</b></Link>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link to="/services" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Service</b></Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/help" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Help!</b></Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/location" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Location</b></Link>
                      </li>

                      <li><Link to="/login" className={this.props.isAuthenticated ? 'hidden' : 'nav-link js-scroll-trigger'}>
                        <b>Login</b></Link>
                      </li>

                      <li className="nav-item" onClick={this.props.logOut}><Link to="/" className={this.props.isAuthenticated ? 'nav-link js-scroll-trigger' : 'hidden'}>
                        <b>Log-out</b>
                      </Link></li>

                      <div className="cart-icon">
                      <span>0</span>
                      <Link to="/cart">
                          <img src={Cart} alt="" width="30" />
                      </Link>
                      </div>

                      <li><Link to="/AddProduct" className={this.props.isAuthenticated ? 'nav-link js-scroll-trigger' : 'hidden'}>
                        <b>Add Product</b></Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
              
             </div>
          );
    }
}