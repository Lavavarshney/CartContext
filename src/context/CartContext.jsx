import { createContext, useContext, useState } from "react";

export const initialState = {
  cart:[
    {
    id:1,
    item:"item",
    
    }
  ],
};
export const CartContext = createContext(initialState);
export const CartProvider=({children})=>{
  const[cart,setCart]=useState([]);
  
   const addItem = (item) => {
    const newItem = {
      id: item.id,
      title: item.title || 'Default Title', // Provide a default if title is missing
      price: item.price || 0,  
      img: item.image             // Provide a default if price is missing
      // Add any other properties you might need
    };
    setCart((val) => [...val, newItem]);
  };
   const deleteItem = (id) => {
     // Remove item based on ID
     setCart((prevItems) => prevItems.filter(item => item.id !== id));
   };
  
  
return (
  <CartContext.Provider value={{ cart, addItem,deleteItem}}>
      {children}
  </CartContext.Provider>
);
}

