import React from 'react'

export default function CartNavbar() {
    return (
        <>
            <div className="row d-flex justify-content-center">
          <div className="col-5">
            <h4 className="heading">Shopping Bag</h4>
          </div>
          <div className="col-7">
            <div className="row text-right">
              <div className="col-3">
                <h6 className="mt-2">Category</h6>
              </div>
              <div className="col-3">
                <h6 className="mt-2">Quantity</h6>
              </div>
              <div className="col-3">
                <h6 className="mt-2">Price</h6>
              </div>
              <div className="col-3">
                <h6 className="mt-2"></h6>
              </div>
            </div>
          </div>
        </div>   
        </>
    )
}
