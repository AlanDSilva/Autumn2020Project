import React, {useState} from "react";
import CartNavbar from "./CartNavbar";
import CartPayment from "./CartPayment";
import "./cart.css";
export default function Cart() {
    const [quantity, setQuantity] = useState(1)
  
    const cart = JSON.parse(localStorage.getItem("cart"));
  
    if (cart.length === null)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );
    return (
        <div>
        <div className="container px-4 py-5 mx-auto">
            <CartNavbar />
            {cart.map((item, index) => {
            return (
                <div className="row d-flex justify-content-center border-top" key={index}>
                <div className="col-5">
                    <div className="row d-flex">
                    <div className="book">
                        {" "}
                        <img
                        src={item.photo_url}
                        className="book-img"
                        />{" "}
                    </div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <h6 className="mob-text">{item.name}</h6>
                        <p className="mob-text">{item.description}</p>
                    </div>
                    </div>
                </div>
                <div className="my-auto col-7">
                    <div className="row text-right">
                    <div className="col-4">
                        <p className="mob-text">{item.category}</p>
                    </div>
                    <div className="col-4">
                        <div className="row d-flex justify-content-end px-3">
                        <p className="mb-0" id="cnt1">
                            {quantity}
                        </p>
                        <div className="d-flex flex-column plus-minus">
                            {" "}
                            <span className="vsm-text plus" onClick={() => setQuantity(quantity+1)}>+</span>
                            <span className="vsm-text minus" onClick={() => {
                                if(quantity > 0) setQuantity(quantity-1)
                            }}>-</span>{" "}
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className="mob-text">${item.price*quantity}</h6>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
            {/* here is payment */}
            <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card">
                <div className="row">
                    <CartPayment />
                    <div className="col-lg-4 mt-2">
                    <div className="row d-flex justify-content-between px-4">
                        <p className="mb-1 text-left">Subtotal</p>
                        <h6 className="mb-1 text-right">$23.49</h6>
                    </div>
                    <div className="row d-flex justify-content-between px-4">
                        <p className="mb-1 text-left">Shipping</p>
                        <h6 className="mb-1 text-right">$2.99</h6>
                    </div>
                    <div
                        className="row d-flex justify-content-between px-4"
                        id="tax"
                    >
                        <p className="mb-1 text-left">Total (tax included)</p>
                        <h6 className="mb-1 text-right">$26.48</h6>
                    </div>{" "}
                    <button className="btn-block btn-blue">
                        {" "}
                        <span>
                        {" "}
                        <span id="checkout">Checkout</span>{" "}
                        <span id="check-amt">$26.48</span>{" "}
                        </span>{" "}
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
