import CartContext from "./cart-context"
import React,{useEffect, useState,} from "react";
import axios from "axios";
let tempid = 0
const CartProvider = (props) => {
    const [addItems, setAddItems] = useState([]);



  const addItemToCartHandler = (item) => {
    let newCartItem = {}

    console.log(item._id)
      let cartItems = [...addItems]
      let hasItem = false;
      cartItems.forEach((product) => {
        console.log(product)
        if (product.id === item.id) {
          hasItem = true;
          tempid = product._id
    product.quantity = Number(product.quantity) + Number(item.quantity);
        }
    newCartItem = product 
      })
      if (hasItem) {
        console.log(tempid)
        setAddItems(cartItems);
        axios.put(`https://crudcrud.com/api/818f4c82b4984122b342808558ef9f1e/cart/${tempid}`,newCartItem)
        .then((res) => {
          console.log('cart updated',res)
        }).catch((err) => {
          console.log('cart is not updated',err)
        })

      } else {
        setAddItems((prevItems) => {  
          return [...prevItems, item]; 
        });
        axios.post(`https://crudcrud.com/api/818f4c82b4984122b342808558ef9f1e/cart/${email}`,item)
        .then((res) => {
          console.log('posted successfully',res)
        })
        .catch((err) => {
          console.log(err)
        })
      }
  }


 useEffect(() => {
  axios.get(`https://crudcrud.com/api/818f4c82b4984122b342808558ef9f1e/cart/${email}`).then((res) => {
    console.log(res)
    setAddItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
},[]) 

  const removeItemfromCartHandler = (item) => {
    console.log('delete id ',item._id)
      const cartItems = [...addItems];
      cartItems.forEach((product, index) => {
        if (product.id === item.id) {
          cartItems.splice(index, 1);
          setAddItems(cartItems);
        }
      });
      axios.delete(`https://crudcrud.com/api/818f4c82b4984122b342808558ef9f1e/cart/${item._id}`)
      .then((res) => {
        console.log('deleted successfully',res)
      }).catch((err) => {
        console.log('cant able to delete',err)
      })
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

  const [email,setEmail] = useState('');
  const emailHandler = (email) => {
   let cleanEmail = email.replace(/[^a-zA-Z0-9]/g,'')
    setEmail(cleanEmail)
  }
  


  const cartContext = {
    items: addItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
    email:emailHandler,
    emailId:email,
  };
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;    