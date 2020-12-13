import React from 'react'
import Navbar from './Navbar'
export default function Header(props) {
    return (
        <div>
            <Navbar logIn = {props.status} logOut = {props.logOut}/>
        </div>
    )
}
