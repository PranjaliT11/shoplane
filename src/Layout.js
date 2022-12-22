import { Routes,Route } from "react-router-dom";
import React from 'react';
import AllProducts from './Components/AllProducts/AllProducts';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import ShopHeader  from "./Components/ShopHeader/ShopHeader";
import Cart from "./Components/Cart/Cart";
import Favourites from "./Components/Favourites/Favourites";
import { useState } from "react";




function Layout(){

    const [Favourite,setFavourites] = useState([]);
    const [cart,setCart] = useState([]);

    function addToCart(params){
       
      

        let addedItem = cart
        if(addedItem.includes(params)){
          addedItem.splice(addedItem.indexOf(params),1)
        }else{
          addedItem.push(params)
        }
        setCart([...addedItem])
        
  }
  function addToFavourites(params){
       
    let favproduct = Favourite
    if(favproduct.includes(params)){
      favproduct.splice(favprod.indexOf(params),1)
    }else{
      favproduct.push(params)
    }
    setFavourites([...favproduct])
}


    return(
        <>
        <ShopHeader count={cart.length}/>

        <Routes>
            <Route path='/' element={ <AllProducts cat={''} addToCart={addToCart} cart={cart} Favourite={Favourite} addToFavourites={addToFavourites} /> }></Route>
            <Route path='/electronics' element={ <AllProducts cat={'electronics'} addToCart={addToCart} cart={cart} Favourite={Favourite} addToFavorites={addToFavourites} />}></Route>
    <Route path='/jewellery' element={ <AllProducts cat={'jewellery'} addToCart={addToCart} cart={cart} Favourite={Favourite} addToFavorites={addToFavourites} />}></Route>
    <Route path='/menclothing' element={ <AllProducts cat={"men's clothing"} addToCart={addToCart} cart={cart} Favourite={Favourite} addToFavourites={addToFavourites} />}></Route>
    <Route path='/womensclothing' element={ <AllProducts cat={"women's clothing"} addToCart={addToCart} cart={cart} Favourite={Favourite} addToFavourites={addToFavourites} />}></Route>
        
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} />}></Route>
        <Route path='/favourites' element={< Favourites Favourite={Favourite} cart={cart}  addToFavourites={addToFavourites} addToCart={addToCart} />}></Route>

    </Routes>
        
</>

    )
}
export default Layout