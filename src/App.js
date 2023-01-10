import Home from "./pages/Home";
import Cart from "./components/cart/Cart";
import Navigation from "./components/Navbar";
import CartProvider from "./Store/CartProvider";
import {useState} from 'react'
import About from "./pages/About";
import { Route } from 'react-router-dom'

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
  return (
    <div>
      
    <CartProvider>
    <Navigation onShowCart={showCartHandler}/> 
    <Route path="/About">
      <About/>
     </Route>
     <Route path="/Home">
     <Home onShowCart={showCartHandler} products={productsArr} />
     </Route>
    {cartIsShown && <Cart onhideCart={hideCartHandler} products={productsArr}/>}
    </CartProvider>
    </div>
  );
}

export default App;
