
import React,{useContext} from 'react';
import CartContext from '../Store/cart-context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(props) {
  const cartCtx = useContext(CartContext)
  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity = quantity + Number(item.quantity)
  });
  return (
  
    <Navbar expand="lg" className='navbar navbar-dark bg-dark fixed-top' >
      <Container className='container-fluid'>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-auto navbar-brand">
            <Nav.Link href="#home" className="nav-item nav-link px-4 " >Home</Nav.Link>
            <Nav.Link href="#store" className="nav-item nav-link px-4" >Store</Nav.Link>
            <Nav.Link href="#link" className="nav-item nav-link px-4" >About</Nav.Link>
           
          </Nav>
          <button onClick={props.onShowCart} className="btn btn-secondary btn-lg active navbar-nav nav-link px-4 border-primary border border-3 text-primary"  >Cart</button> 
          <span className='text-info'>{quantity}</span>
          {console.log('this is quantity',quantity)}
        </Navbar.Collapse>
            
      </Container>
    </Navbar>
  

    
  );
}

export default Navigation;