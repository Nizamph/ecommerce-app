import Home from "./pages/Home";
import Cart from "./components/cart/Cart";
import Navigation from "./components/Navbar";
import CartProvider from "./Store/CartProvider";
import React, {useState,useContext} from 'react'
import About from "./pages/About";
import { Route } from 'react-router-dom'
import { Switch,Redirect } from 'react-router-dom'
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductList from "./pages/ProductList";
import AuthPage from "./pages/AuthPage";
import CartContext from "./Store/cart-context";





function App() {
  const productsArr = [

    {
    id:'m1',
    
    title: 'Album 1',
    
    price: 100,

    quantity: 1,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:'m2',
    
    title: 'Album 2',
    
    price: 50,

    quantity:1,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id: 'm3',
    
    title: 'Album 3',
    
    price: 70,

    quantity:1,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id: 'm4',
    
    title: 'Album 4',
    
    price: 100,

    quantity:1,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    const[cartIsShown,setShowCart] = useState(false)
 
    const showCartHandler = () => {
      setShowCart(true)
    }

    const hideCartHandler = () => {
      setShowCart(false)
    }

    const contactList = async (contactData) => {
       const response = await fetch('https://ecommerce-app-90fa8-default-rtdb.firebaseio.com/contactinfo.json',{
        method:"POST",
        body:JSON.stringify(contactData),
        headers:{
          'Content-Type':'application/json'
        }
       })
       const data = await response.json()
       console.log(data)
    }


    const authCtx = useContext(CartContext)
    const loggedIn = authCtx.isLoggedIn

    console.log('this is from the app componenet', loggedIn)
  return (
 
      
    <React.Fragment>
    <Navigation onShowCart={showCartHandler}/>
    <Switch> 
    <Route path="/About">
      <About/>
     </Route>
     <Route path="/Store">
      {loggedIn  &&  <Store onShowCart={showCartHandler} products={productsArr} />}
      {!loggedIn &&  <Redirect to="/auth"/>}
     </Route>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route path="/ContactUs">
      <ContactUs onContactList={contactList}/>
     </Route>
     <Route path="/ProductList/:ProductId" >
     <ProductList/>
     </Route>
     <Route path="/auth">
      <AuthPage/>
     </Route>
     <Route path="*" >
      <Redirect to="/"/>
     </Route>
     </Switch>
    {cartIsShown && <Cart onhideCart={hideCartHandler} products={productsArr}/>}
    </React.Fragment>

  );
}

export default App;
