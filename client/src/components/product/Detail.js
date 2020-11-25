import React from 'react'
import {Link} from 'react-router-dom'
import '../style/detailProduct.css'
// import ProductItem from '../utils/productItem/ProductItem'

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
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
    render() {
        const {item} = this.state
        const {products} = this.props
        console.log(item)
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
                        <Link to="/cart" className="cart">Buy Now</Link>
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


