import "./ShopHeader.css";
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";



    function ShopHeader(props) {
      
        const {count}=props
     
             const [open, setOpen] = useState(false);
             const handleOpen = () => {
                 setOpen(!open);
       };
           

    return(
        <div className="header">
            <div className="headerpart">
                <Link className="logoparts" to='/'><div className='logopart'><h2><span className='logotitle'>SHOP</span>LANE</h2></div> </Link>

                <div className='cart'>
                    <div className='dropdown'>
                        <button className="login-signup" onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg><div><p className="login">Login</p><p className="or-signup">or Sign Up</p></div><img className="droparrow" src= "https://img.favpng.com/18/3/13/arrow-computer-icons-drop-down-list-symbol-png-favpng-1gyXNt5eAdQFuYAWNsthDxn5g.jpg"alt="arrow"/>
                        
                        </button>
                        {(
                        <ul className="menu">
                            <li className="menu-list">
                                <Link className="link" to="/login" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>login</Link>
                            </li>
                           <li className="menu-list">
                            <Link className="link" to="/signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>Sign up</Link>
                           </li>
                           <li className="menu-list">
                            <Link className="link" to="/favourites"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>Favourites</Link>
                           </li>
                           <li className="menu-list">
                            <Link className="link" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>Cart</Link>
                           </li>
                        </ul>
                        ) } 
                    </div>
                    <div className="Addtocart">
                        <Link className="link" to="/cart"><img src="https://www.pngfind.com/pngs/m/311-3119177_svg-shop-cart-shopping-cart-icon-svg-hd.png" alt="cart"></img></Link>
                        <span>{count}</span></div>
                </div>
            </div>

    
        <nav className="navigate">
            <ul>
                <li>
                    <Link className="navigation" to="/">All</Link></li>
                <li> <Link className="navigation"to="/electronics">Electronics</Link></li>
                <li><Link className="navigation"to="/jewellery">Jewellery</Link></li>
                <li><Link className="navigation"to="/men'sclothing">Men's Clothing</Link></li>
                <li><Link className="navigation"to="/womensclothing">Women's Clothing</Link></li>
            </ul>
        </nav>
        </div>
    )
}
export default ShopHeader;