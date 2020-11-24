import {useState, useEffect} from 'react'
import axios from 'axios'
import constants from '../constants.json';

function GetItemAPI() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(constants.baseAddress+'/api/items')
            setProducts(res)
            // console.log(res)
        }
        getProducts();
    },[])
    
    return {
        products: [products, setProducts],
    }
}

export default GetItemAPI;