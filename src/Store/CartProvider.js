import CartContext from "./cart-context"
import React,{useEffect, useState,} from "react";
import axios from "axios";

let tempid = 0
const CartProvider = (props) => {
    const [addItems, setAddItems] = useState([]);
    


  const addItemToCartHandler = (item) => {
    let newCartItem = {}

    console.log('this is item id',item._id)
      let cartItems = [...addItems]
      let hasItem = false;
      cartItems.forEach((product) => {
        console.log(product)
        if (product.id === item.id) {
          hasItem = true;
          tempid = product._id;  
          console.log('this is product id',product._id)   
    product.quantity = Number(product.quantity) + Number(item.quantity);
    item.quantity = Number(product.quantity) + Number(item.quantity - 1);
        }
    newCartItem = item
      })  
      if (hasItem) {
        console.log('inside if')
         setAddItems(cartItems);
         console.log('add items',addItems)
        //  console.log('cart items',cartItems)
          axios.put(`https://crudcrud.com/api/e6736da0008c4fac8f77d9073b6924f6/cart${email}/${tempid}`,newCartItem)
          .then((res) => {
            console.log('updated successfully',res)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        console.log('inside else')
        // setAddItems((prevItems) => {  
        //   return [...prevItems, item]; 
        // });
        axios.post(`https://crudcrud.com/api/e6736da0008c4fac8f77d9073b6924f6/cart${email}`,item)
        .then((res) => {
          console.log('posted successfully',res)
          setAddItems([...addItems,res.data])
        })
        .catch((err) => {
          console.log(err)
        })
      }
  }


 useEffect(() => {
  const storedEmail = localStorage.getItem('email')
  setEmail(storedEmail)
  axios.get(`https://crudcrud.com/api/e6736da0008c4fac8f77d9073b6924f6/cart${storedEmail}`).then((res) => {
    console.log(res)
    setAddItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
},[localStorage.getItem('email')]) 

  const removeItemfromCartHandler = (item) => {
    console.log('delete id ',item._id)
      const cartItems = [...addItems];
      cartItems.forEach((product, index) => {
        if (product.id === item.id) {
          cartItems.splice(index, 1);
          setAddItems(cartItems);
        }
      });
      axios.delete(`https://crudcrud.com/api/e6736da0008c4fac8f77d9073b6924f6/cart${email}/${item._id}`)
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

  useEffect(() => {
    if(!token) {
      return
    }else {
      setTimeout(() => {
        localStorage.removeItem('token')
        setToken(null)
      },5 * 60 * 1000)
    }
  },[token])

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  const userIsLoggedIn = !!token
   console.log(userIsLoggedIn)


  const [email,setEmail] = useState('');
  const emailHandler = (email) => {
   let cleanEmail = email.replace(/[^a-zA-Z0-9]/g,'')
    setEmail(cleanEmail)
    localStorage.setItem('email',cleanEmail)
  }
  
  console.log('this is email',email)



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