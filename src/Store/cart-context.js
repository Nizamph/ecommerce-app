import React from "react";


const CartContext = React.createContext({
  items: [],
  addItem:(item) => {},
  removeItem:(id) => {},
  token:'',
  isLoggedIn:false,
  login: (token)=> {},
  logout: () => {},
  emailAdd:() => {},
  emailId:'',
  crud: () => {},
  crudItem: []
})

export default CartContext;
