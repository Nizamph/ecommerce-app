
import ModalOverlay from "../UI/Modal";
import './Cart.css'
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const removeItemHandler = (product) => {
    cartCtx.removeItem(product)
  }
  const cartlList = cartCtx.items.map((product) => {
    return(
      
      <section className="container" style={{display: "block"}}>

        <div className="cart-row">
          <span className="cart-item cart-column">
          <img src={product.imageUrl} alt={product.title} className="cart-img"></img>
          <span>{product.title}</span>
          </span>
          <span className="cart-price cart-column">${product.price.toFixed(2)}
          <div className="ms-3">x{product.quantity}</div></span>
          <span className="cart-quantity cart-column">
         
            <button className="bg-danger border text-white" onClick={()=>removeItemHandler(product)} >REMOVE</button>
          </span>
        </div>
     
        </section>
        
      
      )
  })
 return(
  <ModalOverlay>
            <h2>CART</h2>
        <button className="cancel" onClick={props.onhideCart}>x</button>
        <div className="cart-row cart-header">
          <span className= "cart-item cart-column">ITEM</span>
          <span class="cart-price cart-column">PRICE</span>
          <span class="cart-quantity cart-column">QUANTITY</span>
        </div>
    {cartlList}
  </ModalOverlay>
    
 )
}



export default Cart;