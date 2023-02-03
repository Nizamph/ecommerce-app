import CartContext from "./cart-context"
import React,{useEffect, useState,} from "react";
import axios from "axios";
const CartProvider = (props) => {
    const [addItems, setAddItems] = useState([]);



  const addItemToCartHandler = (item) => {

      let cartItems = [...addItems]
      let hasItem = false;
      cartItems.forEach((product) => {
        console.log('this is product',product)
        if (product.id === item.id) {
          hasItem = true;
    product.quantity = Number(product.quantity) + Number(item.quantity);
    axios.put(`https://crudcrud.com/api/4aa5a93c356742a680442cd447cb4345/cart/${product._id}`, product)
    .then((res) => {
      console.log('successfully updated',res)
    })
    .catch((err) => {
      console.log('Error updating item',err);
    });
        }
      })
      if (hasItem) {
        setAddItems(cartItems);
      } else {
        setAddItems((prevItems) => {  
          return [...prevItems, item]; 
        });
      }
      axios.post(`https://crudcrud.com/api/4aa5a93c356742a680442cd447cb4345/cart/${email}`,item).then((res) => {
        console.log('this is from post request',res)
      }).catch((err) => {
        console.log(err)
      })
      .catch((err) => {
        console.log('Error updating item',err);
      });
  }
 useEffect( () => {
  axios.get(`https://crudcrud.com/api/4aa5a93c356742a680442cd447cb4345/cart/${email}`).then((res) => {
    console.log(res)
    setAddItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
},[]) 

  const removeItemfromCartHandler = (item) => {
      const cartItems = [...addItems];
      cartItems.forEach((product, index) => {
        if (product.id === item.id) {
          cartItems.splice(index, 1);
          setAddItems(cartItems);
        }
      });
      axios.delete(`https://crudcrud.com/api/4aa5a93c356742a680442cd447cb4345/cart/${item._id}`)
      .then((res) => {
       console.log(res)
      }).catch((err) => {
        console.log(err)
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