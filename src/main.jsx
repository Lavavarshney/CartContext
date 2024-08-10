import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import List from './components/List.jsx'
import Add from './components/Add.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import { proInfoLoader } from './components/List.jsx'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <List />,
      loader: proInfoLoader,
    },
    {
      path: 'add',
      element: <Add />,
    },
]}
   
]);

function Main() {
  return (
    <CartProvider>
      
      <RouterProvider router={router} />
   
    </CartProvider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);