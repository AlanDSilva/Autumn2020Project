import React from "react";
import CartNavbar from "./CartNavbar";
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'
import "./cart.css";
export default function Cart() {

    const items = JSON.parse(localStorage.getItem("cart"));
    const totalPrice = items.reduce((accumulator, current) => accumulator + current.price, 0)

    function onRemoveItem(index) {
        items.splice(index, 1);
        console.log(items)
    }

    if (items === null)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem", marginTop:'2rem' }}>Cart Empty</h2>
    );
    return (
        <div>
        <div className="container px-4 py-5 mx-auto">
            <CartNavbar />
            {items.map((item, index) => {
            return (
                <div key={index}>
                    <CartItem 
                     photo={item.photo_url} name = {item.name} desc = {item.description}
                                category = {item.category} quantity = {1} 
                                totalPrice = {item.price}
                                onRemoveItem = {onRemoveItem}
                                index={index}
                    />
                </div>
            );
            })}
            <CartCheckout  price = {totalPrice}/>
        </div>
        </div>
    );
}
