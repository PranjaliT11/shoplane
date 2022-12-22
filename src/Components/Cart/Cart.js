import './Cart.css';





function Cart(props){

    const {cart,addToCart}=props

    function TotalSub(params){
        let sum = 0
        for(let i = 0;i<params.length;i++)
        {
            sum=sum+params[i].price
        }
        return Math.floor(sum)
    }
    function CartTotal(params){
        if(params>0){
            let Total = params+10;
            return Total;

        }else{
            return 0
        }
    }
    return(
        <div className='cart-division'>
            {cart.length}{cart.map((card,index)=>{
             return(<div className='cart-products' key={index}>

                <div className='cart-product-images'>
                    <img className='cart-image' src={card.image}alt='product'/>
                </div>
                <div className='cart-product-details'>
                    <p className='cart-product-title'>Brand,<br/><span>{card.title}</span></p>
                    <div className='cart-price-tag'>{card.price}</div>
                    </div>
                    <div className='delete-button'>
                        <button onClick={()=>addToCart(card)}className="deleteToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                        </button>
                        </div>
                        


             </div>
             )})}
             <div className='empty-cart'><h2> Your Cart is Empty</h2>
             </div>
             <div className='cart-total'>
                <div className='table'><h3>Order Summary</h3></div>
                <div className='table'><p>SubTotal</p><span className='cart-product-price'>${TotalSub(cart)}</span></div>
                <div className='table'><p>Shopping Estimate</p><span className='cart-product-price'>$10</span></div>
                <div className='table'><p>Tax Estimate</p><span className='cart-product-price'>$10</span></div>
                <div className='table-total'><p>Order Total</p><span>${CartTotal(TotalSub(cart))}</span></div>
                </div>
             
            

        </div>
    )
}

export default Cart;