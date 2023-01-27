
import React,{useContext} from 'react';
import CartContext from '../Store/cart-context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Navigation(props) {
  const cartCtx = useContext(CartContext)
  console.log('this is from the navbar',cartCtx)
  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity = quantity + Number(item.quantity)
  });
  
  const LoggedIn = cartCtx.isLoggedIn
  const history = useHistory() 
  const logoutHandler = (event) => {
    event.preventDefault()
    cartCtx.logout()
    history.replace('/auth')
  }
  return (
  
    <Navbar expand="lg" className='navbar navbar-dark bg-dark fixed-top' >
      <Container className='container-fluid'>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-auto navbar-brand">
            <NavLink to="/" className="nav-item nav-link px-4 " >Home</NavLink>
            {LoggedIn && (
              <NavLink to="/Store" className="nav-item nav-link px-4" >Store</NavLink>
            )}
            <NavLink to="/About" className="nav-item nav-link px-4" style={{ColorChange:"white"}} >About</NavLink>
            <NavLink to="/ContactUs" className="nav-item nav-link px-4" > Contact Us</NavLink>
            {!LoggedIn && (
              <NavLink to="/auth" className="nav-item nav-link px-4" >Login</NavLink>
            )}
            {LoggedIn && (
                <Button type="button" onClick={logoutHandler} className="nav-item bg-dark btn-sm border border-3 nav-link px-4" >Logout</Button>
              )}
          
          </Nav>
          {LoggedIn && (
               <div>
              <button onClick={props.onShowCart} className="btn btn-secondary btn-lg active navbar-nav nav-link px-4 border-primary border border-3 text-primary"  >Cart</button> 
              <span className='text-info'>{quantity}</span>
              </div>
          )}
        
          
        </Navbar.Collapse>
            
      </Container>
    </Navbar>
  

    
  );
}

export default Navigation;