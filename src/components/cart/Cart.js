
import ModalOverlay from "../UI/Modal";
import './Cart.css'
import { useContext, useEffect} from "react";
import CartContext from "../../Store/cart-context";
import axios from "axios";
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  

  const removeItemHandler = (product) => {
     cartCtx.removeItem(product)
 
  }

  




  let hasItem = cartCtx.items.length>0


  
  const cartlList = (
    <div className="cart-items">
      {
    cartCtx.items.map((product) => {  
    return(
      <section className="container" style={{display: "block"}} key={product.id}>

        <div className="cart-row">
          <span className="cart-item cart-column ms-2">
          <img src={product.imageUrl} alt={product.title} className="cart-img"></img>
          <span  style={{fontWeight:"bold"}}>{product.title}</span>
          </span>
          <span className="cart-price cart-column" style={{marginLeft:"53px",fontWeight:"bold"}}>${product.price.toFixed(2)}
          <div className="ms-3">x{product.quantity}</div></span>
          <span className="cart-quantity cart-column">

            <button className="bg-dark p-2 border border-none text-white rounded-top rounded-bottom " style={{marginLeft:"49px"}} onClick={()=>removeItemHandler(product)} >REMOVE</button>
          </span>
        </div>
     
        </section>     
    )  
  })
  }
  </div>
  );


  let amount = 0;
  cartCtx.items.forEach((item) => {
    amount = amount+Number(item.price*item.quantity)
  })
 return(
  <ModalOverlay>
    <div className="cart-handler">

            <h2 style={{textAlign:'center'}}>CART</h2>
        <button className="cancel" onClick={props.onhideCart}>x</button>
        <div className="cart-row cart-header">
          <span className= "cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
        </div>
    {cartlList}
    <div className="total">
      <span>Total Amount</span>
      <span>${amount.toFixed(2)}</span>
    </div>
   {hasItem && <button className='btn-purchase'>Purchase</button>}
   </div>
  </ModalOverlay>
    
 )
}



export default Cart;