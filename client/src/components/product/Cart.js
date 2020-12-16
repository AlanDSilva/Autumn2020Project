import React from "react";
import CartNavbar from "./CartNavbar";
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'
import "./cart.css";
export default function Cart() {
    const [cart, setCart] = React.useState([]);
    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
    const [finalCart, setFinalCart] = React.useState([]);
    const addToCart = (item) => setCart((currentCart) => {
        console.log(item)
        return [...currentCart, item]
    });

    const removeFromCart = (item) => {
        console.log(item)
        setCart((currentCart) => {
            
        const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

        if (indexOfItemToRemove === -1) {
            return currentCart;
        }
        setFinalCart(currentCart)
        return [
            ...currentCart.slice(0, indexOfItemToRemove),
            ...currentCart.slice(indexOfItemToRemove + 1),
            
        ];
        });
        
    };
    const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

    const items = JSON.parse(localStorage.getItem("cart"));

    function onCheckOut() {
        console.log(finalCart)
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
                <>
                    <CartItem key={index} photo={item.photo_url} name = {item.name} desc = {item.description}
                                category = {item.category} quantity = {amountOfItems(item.id)} 
                                addToCart = {() => addToCart(item)} removeFromCart = {() => removeFromCart(item)}
                                totalPrice = {amountOfItems(item.id)*item.price}
                    />
                </>
            );
            })}
            {/* here is payment */}
            <CartCheckout price = {cartTotal} onCheckOut = {onCheckOut}/>
        </div>
        </div>
    );
}
