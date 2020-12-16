import React, {useState} from "react";
import CartNavbar from "./CartNavbar";
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'
import APIAddHistory from '../../api/APIAddHistory'
import "./cart.css";
// notification style
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Cart(props) {
    toast.configure();
    const items = JSON.parse(localStorage.getItem("cart"));
    const totalPrice = (items !== null) ? items.reduce((accumulator, current) => accumulator + current.price, 0) : 0
    const [cart, setCart] = useState("")

    function onRemoveItem(id) {
        var removeIndex = items.map(item => item.id).indexOf(id);
        items.splice(removeIndex, 1);
        setCart(items)
        localStorage.setItem("cart", JSON.stringify(items));
        props.setCounter(JSON.parse(localStorage.getItem('cart')).length) 
    }
    function onCheckOut(event) {
        event.preventDefault();
        console.log(totalPrice, localStorage.getItem("tokenUser"), Date(), JSON.parse(localStorage.getItem("cart")))
        // check user token is valid
        if (localStorage.tokenUser !== undefined) {
            const items = JSON.parse(localStorage.getItem("cart"));
            const result = [];
            items.map(item => {
                var resultTemp = `${item.name} : ${item.price}`
                result.push(resultTemp)
            })
            console.log(result)

            const data = {
                "token" : localStorage.getItem("tokenUser")
                ,"items" : result
                ,"date" : Date()
                ,"price" : totalPrice
            }

            APIAddHistory(data) 
            .then( (results) => { 
                console.log(results)
                props.history.push(props.redirectPathOnSuccess);
                toast.success('Billing success !')
            })
            .catch(error => {
                toast.success('Billing fail !')
                console.log(error)
            })

        } else {
            alert('you need to log in')
            props.history.push(props.redirectPathOnFail);
        }
    }
    if (items === null) {
        return (
            <h2 style={{ textAlign: "center", fontSize: "5rem", marginTop:'2rem' }}>Cart Empty</h2>
          );
    } else 
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
                                id={item.id}
                    />
                </div>
            );
            })}
            <CartCheckout  onCheckOut = {onCheckOut} price = {totalPrice} encType="multipart/form-data"/>
        </div>
        </div>
    );
}
