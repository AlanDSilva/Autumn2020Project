import React from 'react'
import { Link } from "react-router-dom";
import Cart from "../style/cart.svg";
export default function Items(props) {
    const {logIn} = props
    
    let logged = 0;
    if(localStorage.tokenUser === undefined) {
      logged = 0;
    }
    else logged = localStorage.tokenUser.length;

    const addItem = <li>
                        {logIn || logged > 0 ? (
                                  <img
                                    style={{
                                      height: "45px",
                                      width: "45px",
                                      borderRadius: "50%",
                                      border: "4px solid brown",
                                    }}
                                    alt="profile_photo"
                                    src={localStorage.getItem("photo_url")}
                                  ></img>
                                ) : null
                        }
                  </li>

    return (
            <>
                <li className="nav-item">
                  <Link
                    to="/help"
                    className="nav-link js-scroll-trigger nav-items"
                  >
                    <b className="navbar-items">Help!</b>
                  </Link>
                </li>

                
                {/* login */}
                <li>
                  <Link
                    to="/login"
                    className={logIn || logged > 0 ? "hidden" : 'nav-link js-scroll-trigger'}
                  >
                    <b>Login</b>
                  </Link>
                </li>
                {/* logout */}
                <li>
                  <Link
                    to="/"
                    className={logIn || logged > 0 ? "nav-link js-scroll-trigger" : 'hidden'}
                    onClick={() => {
                      localStorage.clear();
                      props.logOut();
                    }}
                  >
                    <b>Log-out</b>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/history"
                    className={logIn || logged > 0 ? "nav-link js-scroll-trigger" : 'hidden'}
                  >
                    <b>History</b>
                  </Link>
                </li>
                <div className="cart-icon">
                  <span> {localStorage.counter ? localStorage.counter : 0 }</span>
                  <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                  </Link>
                </div>
                {addItem}
                {/* add product */}
                <li>
                  <Link
                    to="/AddProduct"
                    className={logIn || logged > 0 ? "nav-link js-scroll-trigger" : 'hidden'}
                  >
                    <b>Add Item</b>
                  </Link>
                </li>
                </>
    )
}