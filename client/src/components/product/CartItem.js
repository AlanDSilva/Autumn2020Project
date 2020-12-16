import React from 'react'

export default function Cartitem(props) {
    const {key,photo,name,desc,category,quantity,
    addToCart,removeFromCart,totalPrice} = props
  
    return (
        <>
            <div className="row d-flex justify-content-center border-top" key={key}>
                <div className="col-5">
                    <div className="row d-flex">
                    <div className="book">
                        {" "}
                        <img
                        src={photo}
                        className="book-img"
                        />{" "}
                    </div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <h6 className="mob-text">{name}</h6>
                        <p className="mob-text">{desc}</p>
                    </div>
                    </div>
                </div>
                <div className="my-auto col-7">
                    <div className="row text-right">
                    <div className="col-4">
                        <p className="mob-text">{category}</p>
                    </div>
                    <div className="col-4">
                        <div className="row d-flex justify-content-end px-3">
                        <p className="mb-0" id="cnt1">
                            {quantity}
                        </p>
                        <div className="d-flex flex-column plus-minus">
                            {" "}
                            <span className="vsm-text plus" onClick={addToCart}>+</span>
                            <span className="vsm-text minus" onClick={removeFromCart} >_</span>{" "}
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className="mob-text">${totalPrice}</h6>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
