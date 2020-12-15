import React from 'react';
import {Link} from "react-router-dom";

import '../style/items.css'

export default class Products extends React.Component {
    constructor(props) {
        super(props);
       this.AddtoCart = this.AddtoCart.bind(this);
    }

    
    AddtoCart(props) {
        console.log("added to cart: " + props);
        if (this.props.cart.includes(props)) {
            console.log("already in cart");
        }
        else {
        this.props.onQtyChange(this.props.cart.length + 1);
        this.props.onItemChange(props);         
        }         
         }
     
    render() {
        console.log(this.props.cart);
        console.log(this.props.qty);
            
        

        var products = this.props.items.map((item) => {
            return  <div className="card-deck" key={item.id}>
                    <div className="card">
                        <img className="card-img-top img" src={item.photo_url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Category :{item.category}</p>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-muted">Price: {item.price}</small></p>
                            <div className="btn">
                             <Link className="btn btn-info btn" to={`detail/${item.id}`}>View</Link>
                            </div>
                            <div className="btn">
                                <button className="btn btn-info btn" name={item.id} onClick={e=> this.AddtoCart(e.target.name)}>Add to cart</button>
                            </div>
                        </div>
                    </div>&nbsp;
                    </div>
        });
        return (
            <div className="containerItem">
                <div className="card-deck">
                {products}
                </div>
            </div>
            
        );
    }
}


