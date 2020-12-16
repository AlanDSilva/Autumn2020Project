import React, {Component} from 'react'
import APIGetHistory from '../../api/APIGetHistory'
export default class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            buyHistory : []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("tokenUser")
        APIGetHistory(token) 
            .then( (results) => { 
                console.log(results.data)
                this.setState({buyHistory: results.data})
            })
            .catch(error => {
                console.log(error)
        })
    }
    
    render() {
        var results = this.state.buyHistory.map((h, index) => { 
            return <tbody key={index}>
                <tr>
                <th scope="row">{index}</th>
                <td>{h.p_date.slice(0, 25)}</td>
                <td>{h.items.map(i => {  return <div>{i}</div>})}</td>
                <td>${h.price}</td>
                </tr>
            </tbody>
        })
        
        return (
            <div style={{marginTop:'5%', marginLeft:'20%', width:'60%'}}>
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Time</th>
                            <th scope="col">Items</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        {results}
                    </table>
            </div>
        )
    }
    
}
