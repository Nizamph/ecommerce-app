import React from "react";


const CartContext = React.createContext({
  Items: [],
  addItems:(item) => {},
  removeItem:(id) => {},
  token:'',
  isLoggedIn:false,
  login: (token)=> {},
  logout: () => {}
})

export default CartContext;
