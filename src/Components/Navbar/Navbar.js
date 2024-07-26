import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faCircleUser,faBars} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='navbar'>
            <div className="toggle-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
        <ul className={`sidebar ${showMenu ? 'show' : ''}`}>
            <li ><a href="/">Home</a></li>
            <li ><a href="/shop">Shop</a></li>
            <li><a href="/mtn">Mtn Bundle</a></li>
            <li><a href="/at">Tigo Bundle</a></li>
        </ul>
        <ul className='nav-menu'>
            <li ><button><a href="/">Home</a></button></li>
            <li ><button><a href="/shop">Shop</a></button></li>
            <li><button><a href="/mtn">Mtn Bundle</a></button></li>
            <li><button><a href="/at">Tigo Bundle</a></button></li>
        </ul>
        <div className="login-cart">
            <a href="/cart">
              <button><FontAwesomeIcon icon={faShoppingCart} style={{}} /></button>
             </a>
            <div className="cart-count">0</div>
            <a href="/signin">
            <button style={{background:'rgba(51, 51, 51, 1)'}}>
            <FontAwesomeIcon icon={faCircleUser} style={{color:'white'}} />
            </button>
            </a>
           
        </div>

      
    </div>
  )
}

export default Navbar
