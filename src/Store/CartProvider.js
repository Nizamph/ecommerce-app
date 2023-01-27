import CartContext from "./cart-context"
import React,{useState} from "react";
const CartProvider = (props) => {

    const[addItems, setAddItems] = useState([]);
  const addItemToCartHandler = (item) => {

    let cartItems = [...addItems]
    let hasItem = false;
    cartItems.forEach((product) => {
      if (product.id === item.id) {
        hasItem = true;
  product.quantity = Number(product.quantity) + Number(item.quantity);
      }
    })
    if (hasItem) {
      setAddItems(cartItems);
    } else {
      setAddItems((prevItems) => {
        return [...prevItems, item]; 
      });
      
    }
  }

  const removeItemfromCartHandler = (item) => {
    const cartItems = [...addItems];
    cartItems.forEach((product, index) => {
      if (product.id === item.id) {
        cartItems.splice(index, 1);
        setAddItems(cartItems);
      }
   
    });
  }

  let initialToken = localStorage.getItem('token')
  const[token, setToken] = useState(initialToken)
  const loginHandler = (token) => {
     setToken(token)
     localStorage.setItem('token',token)
     setToken(localStorage.getItem('token'))
   
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  const userIsLoggedIn = !!token
  
  const cartContext = {
    items: addItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
  }; 
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;    