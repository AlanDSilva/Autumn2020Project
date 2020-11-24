import React, {createContext, useState, useEffect} from 'react'
import GetItemsAPI from './api/GetItemsAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    // const [token, setToken] = useState(false)
    GetItemsAPI();
    const state = {
        // token: [token, setToken],
        productsAPI: GetItemsAPI(),
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}