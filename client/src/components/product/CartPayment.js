import React from 'react'

export default function CartPayment() {
    return (
        <>
            <div className="col-lg-3 radio-group">
                  <div className="row d-flex px-3 radio"> <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" />
                    <p className="my-auto">Credit Card</p>
                  </div>
                  <div className="row d-flex px-3 radio gray"> <img className="pay" src="https://i.imgur.com/OdxcctP.jpg" />
                    <p className="my-auto">Debit Card</p>
                  </div>
                  <div className="row d-flex px-3 radio gray mb-3"> <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" />
                    <p className="my-auto">PayPal</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row px-2">
                    <div className="form-group col-md-6"> <label className="form-control-label">Name on Card</label> <input type="text" id="cname" name="cname" placeholder="Johnny Doe" /> </div>
                    <div className="form-group col-md-6"> <label className="form-control-label">Card Number</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444" /> </div>
                  </div>
                  <div className="row px-2">
                    <div className="form-group col-md-6"> <label className="form-control-label">Expiration Date</label> <input type="text" id="exp" name="exp" placeholder="MM/YYYY" /> </div>
                    <div className="form-group col-md-6"> <label className="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***" /> </div>
                  </div>
                </div>
        </>
    )
}
