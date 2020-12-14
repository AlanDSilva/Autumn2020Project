import React from 'react'

export default class Cart extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
            hammer: "time"        
        };
    }

    render() {
        console.log(this.props.qty);
    return (
        <div>
            <br/><br/><br/>In your cart you have {this.props.qty} items.
        </div>
        );
}
}

