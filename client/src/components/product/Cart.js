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
    }

    componentDidMount = () => {
        APIGetItems()
        .then( (result) => {this.setState({ items: result.data });})
        .catch( error => console.log(error))
      };

    
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
        
        if(cartlist.length>0) {
            prettycart = cartlist.map((item) => {
            return  <li><Link to={`detail/${item.id}`}>{item.name + ": " + item.price}</Link></li>
           });  
        }
           else {
               console.log("you thought");
               return null;
           }
        

        console.log(prettycart);

       

    return (
        <div>
            <br/><br/><br/>In your cart you have {this.props.qty} items.
            <br/><br/><ul>
                {prettycart}
            </ul>
        </div>
        );
        }
}


