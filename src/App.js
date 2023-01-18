import Home from "./pages/Home";
import Cart from "./components/cart/Cart";
import Navigation from "./components/Navbar";
import CartProvider from "./Store/CartProvider";
import {useState} from 'react'
import About from "./pages/About";
import { Route } from 'react-router-dom'
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductList from "./pages/ProductList";




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
  return (
    <div>
      
    <CartProvider>
    <Navigation onShowCart={showCartHandler}/> 
    <Route path="/About">
      <About/>
     </Route>
     <Route path="/Store">
     <Store onShowCart={showCartHandler} products={productsArr} />
     </Route>
     <Route path="/Home">
      <Home/>
     </Route>
     <Route path="/ContactUs">
      <ContactUs onContactList={contactList}/>
     </Route>
     <Route path="/ProductList/:ProductId" >
      <ProductList/>
     </Route>
    {cartIsShown && <Cart onhideCart={hideCartHandler} products={productsArr}/>}
    </CartProvider>
    </div>
  );
}

export default App;
