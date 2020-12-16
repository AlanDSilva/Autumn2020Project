import React, {Component} from 'react'
import APIGetHistory from '../../api/APIGetHistory'
export default class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            history : []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("tokenUser")
        const hello = {
            "token": token
        }
        APIGetHistory(hello) 
            .then( (results) => { 
                console.log(results)
                this.setState({history: results})
            })
            .catch(error => {
                console.log(error)
        })
    }
    render() {
        return (
            <div>
                    {this.state.history}
            </div>
        )
    }
    
}
