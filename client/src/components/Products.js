import React, {useContext} from 'react'
import {GlobalState} from '../GlobalState'
function Products() {
    const state = useContext(GlobalState);
    console.log(state)
    return (
        <div>
            <br/><br/><br/>
            <h1>Here is products</h1>
        </div>
    )
}

export default Products
