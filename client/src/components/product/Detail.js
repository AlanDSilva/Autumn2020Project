import React from 'react'
import {Link} from 'react-router-dom'
import '../style/detailProduct.css'
// import ProductItem from '../utils/productItem/ProductItem'

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.AddtoCart = this.AddtoCart.bind(this);
        this.state = {
          item : []
        };

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        if (id) {
            this.props.items.forEach(item => {
                if(item.id === id) this.setState({item})
            })
        }
    }

    AddtoCart(props) {
        console.log("added to cart: " + props);
        if (this.products.cart.includes(props)) {
            console.log("already in cart");
        }
        else {
        this.props.onQtyChange(this.props.cart.length + 1);
        this.props.onItemChange(props);         
        }         
         }
    
    render() {
        const {item} = this.state
        const {products} = this.props
        console.log(item);
        console.log(this.props);
        return (
            <div className="containerItem">
                <div className="detail">
                    <img src={item.photo_url} alt=""/>
                    <div className="box-detail">
                        <div className="row">
                            <h2>{item.name}</h2>
                        </div>
                        <span>$ {item.price}</span>
                        <p>{item.category}</p>
                        <p>{item.description}</p>
                        {//<button className="btn btn-info btn" name={item.id} onClick={e=> this.AddtoCart(e.target.name)}>Add to cart</button>
                        }
                    </div>
                </div>

                <div>
                <h2>Related products</h2>
                {/* <div className="products">
                    {
                        products.map(product => {
                            return product.category === item.category 
                                ? <ProductItem key={product.id} product={product} /> : null
                        })
                    }
                </div> */}
                </div>
            </div>

            
        )
    }
}


