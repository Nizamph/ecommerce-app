import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import CartProvider from './Store/CartProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
);


