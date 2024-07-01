import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import login from '../Assets/login.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li ><button><a href="/">Home</a></button></li>
            <li ><button><a href="/shop">Shop</a></button></li>
            <li><button><a href="/mtn">Mtn Bundle</a></button></li>
            <li><button><a href="/at">Tigo Bundle</a></button></li>
        </ul>
        <div className="login-cart">
            <FontAwesomeIcon icon={faShoppingCart} style={{width:'20px',height:'30px'}}/>
            <div className="cart-count">0</div>
            <button style={{background:'rgba(51, 51, 51, 1)'}}>
            <FontAwesomeIcon icon={faCircleUser} style={{color:'white'}} />
            </button>
        </div>

      
    </div>
  )
}

export default Navbar
