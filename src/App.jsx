import React from 'react'
import { CartProvider } from './context/CartContext'

import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import List from './components/List'
function App() {

  return(
  <CartProvider>
   <Outlet/>
  </CartProvider>
   )
  
}

export default App
