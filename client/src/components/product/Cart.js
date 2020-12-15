import React from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import constants from "../../constants.json";
import APIGetItems from '../../api/APIGetItems';

export default class Cart extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
       items: []
        };
        this.Purchase = this.Purchase.bind(this);
        this.Delete = this.Delete.bind(this);
        
    }

    componentDidMount = () => {
        APIGetItems()
        .then( (result) => {this.setState({ items: result.data });})
        .catch( error => console.log(error))
      };


      Purchase () {
            
    }


    Delete() {
        this.props.onQtyChange(0);
        this.props.emptyCart();  
    }
    
    render() {
        console.log(this.props.qty)
        console.log(this.props.cart)

        var cartlist = this.state.items.map((item) => {
            if (this.props.cart.includes(item.id)) {
                return item;
            }
        });
        console.log(cartlist)

        var prettycart = [];
        
        if(this.props.qty>0) {
            prettycart = cartlist.map((item) => {
            return  <li><Link to={`detail/${item.id}`}>{item.name + ": " + item.price}</Link></li>
           });  
        }
           else {
               console.log("you thought");
               prettycart = null;
           }
        
       

        console.log(prettycart);

       

    return (
        <div>
            <br/><br/><br/>In your cart you have {this.props.qty} items.
            <br/><br/><ul>
                {prettycart}
            </ul>
            <br/><br/>
            <div className="btn">
                <button className="btn btn-info btn" onClick={this.Purchase}>Purchase all</button>
            </div>
            <div className="btn">
                <button className="btn btn-info btn" onClick={this.Delete}>Empty cart</button>
            </div>
        </div>
        );
        }
}


