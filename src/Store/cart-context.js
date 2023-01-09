import React from "react";


const CartContext = React.createContext({
  Items: [],
  addItems:(item) => {},
  removeItem:(id) => {}
})

export default CartContext;
