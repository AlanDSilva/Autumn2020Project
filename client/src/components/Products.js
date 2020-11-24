import React from 'react';
import axios from 'axios';
import constants from '../constants.json';
// import Items from './Items';
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
            return <div className="card" key={item.id}>
                        <img className="card-img-top" src={item.photo_url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-muted">{item.price}</small></p>
                        </div>
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


