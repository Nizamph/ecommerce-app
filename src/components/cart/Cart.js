import productsArr from "../../backend/Data";
import ModalOverlay from "../UI/Modal";
import classes from './Cart.module.css'
const Cart = () => {
  const cartlList = productsArr.map((item) => {
    return(
      <div className={classes.cartlist}>
      <img src={item.imageUrl} alt={item.title} className={classes.image}></img>
      <div style={{width:"100px",marginTop:"20px",fontWeight:"bold"}}> {item.title}</div>
       <div style={{marginLeft:"65px",marginTop:"22px"}}>
       {`$ ${item.price}`}
       </div>
        <div>
          <input type="text" style={{width:"35px",borderRadius:"5px",marginLeft:"100px",marginTop:"15px"}} className="border-info"></input>
          <button className="ms-5 bg-danger text-white" style={{borderRadius:"5px",border:'none'}}>Remove</button>
        </div>
      </div>
      
      )
  }) 
  return(
  
    <ModalOverlay>
<div className={classes.headings}> 
<strong>ITEMS</strong>
<strong style={{marginLeft:"200px"}}>PRICE</strong>
<strong style={{marginLeft:"130px"}}>QUANTITY</strong>
    </div>
    {cartlList}
  </ModalOverlay>
  )
 
}



export default Cart;