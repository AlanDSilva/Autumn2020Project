import React from 'react'
import CartPayment from "./CartPayment";
export default function Cartcheckout(props) {
    return (
        <>
            <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card">
                <div className="row">
                    <CartPayment />
                    <div className="col-lg-4 mt-2">
                    <div className="row d-flex justify-content-between px-4">
                        <p className="mb-1 text-left">Subtotal</p>
                        <h6 className="mb-1 text-right">${props.price}</h6>
                    </div>
                    <div className="row d-flex justify-content-between px-4">
                        <p className="mb-1 text-left">Shipping</p>
                        <h6 className="mb-1 text-right">$0</h6>
                    </div>
                    <div
                        className="row d-flex justify-content-between px-4"
                        id="tax"
                    >
                        <p className="mb-1 text-left">Total (tax included)</p>
                        <h6 className="mb-1 text-right">${props.price}</h6>
                    </div>{" "}
                    <button className="btn-block btn-blue" onClick={props.onCheckOut}>
                        {" "}
                        <span>
                        {" "}
                        <span id="checkout" >Checkout</span>{" "}
                        <span id="check-amt">${props.price}</span>{" "}
                        </span>{" "}
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
