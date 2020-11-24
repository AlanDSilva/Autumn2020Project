import React from 'react';
import axios from 'axios';
import constants from '../constants.json';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],   
        }
    }

    componentDidMount = () => {
        axios.get(constants.baseAddress+'/api/items').then(result => {
          this.setState({data: result.data})
        }).catch(error => {
        console.error(error);
      })
    }

    render() {
        console.log(this.state.data)
        var products = this.state.data.map((item) => {
            return  <div className="card-deck" key={item.id}>
                    <div className="card">
                        <img className="card-img-top" src={item.photo_url} alt="Card image cap" style={{width:'300px', height:'250px'}} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Category :{item.category}</p>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-muted">Price: {item.price}</small></p>
                            <button type="button" className="btn btn-primary">Add to cart </button>
                        </div>
                    </div>&nbsp;
                    </div>
        });
        return (
            <div><br/><br/><br/>Hello Products
                <div className="card-deck">
                {products}
                </div>
            </div>
            
        );
    }
}


