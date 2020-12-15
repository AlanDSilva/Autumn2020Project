import React from 'react'
import {Link} from 'react-router-dom'
import '../style/detailProduct.css'
import APIGetItem from '../../api/APIGetItem'
// import ProductItem from '../utils/productItem/ProductItem'

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          item : []
        };
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        APIGetItem(id)
        .then(item => this.setState({item: item.data[0]}))
        .catch(error => console.log(error))
    }
    render() {
        const {item} = this.state
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
                        <Link to="/cart" className="cart" onClick={this.props.onAddToCart.bind(this, item)}>Buy Now</Link>
                    </div>
                </div>

                <div>
                <h2>Related products</h2>
                {/* <div className="products">
                    {
                        prod u cts.map(product => {
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


