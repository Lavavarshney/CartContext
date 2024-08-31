import React, { useContext,useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import Card from './Card';
function Add() {
 
  const { cart, addItem, deleteItem } = useContext(CartContext);
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <p>No item selected</p>;
  }

  useEffect(() => {
    addItem(item);
  }, [item]);


console.log('Item:', item);
console.log('Cart:', cart);
  // Ensure the item has the required properties before adding it
 // const totprice=(val)=>{
let a=("price",cart.map((prev)=>(prev.price)))
//console.log(a);
const sum = a.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);



 // }
  return (
   <> 
     
    <h2 className='text-center text-5xl font-bold'>CART</h2>
    <div className='flex flex-wrap '> {/* Added justify-center and gap-4 */}
    
      {cart.length === 0 ? (
        <p >No items in cart</p>
      ) : (
       <ul className='w-full flex flex-wrap justify-center sm:justify-start gap-4' > {/* this line also made cards horizontal Ensure ul uses flex layout */}
          {cart.map((cartItem) => (
            <li key={cartItem.id} className=" transform transition-transform duration-300 hover:scale-105"> {/* Use li directly */}
              <Card
                img={cartItem.img}
                title={cartItem.title}
                price={cartItem.price}
              >
                <button className='bg-blue-600 text-white p-2 rounded-xl hover:bg-purple-600' onClick={() => deleteItem(cartItem.id)}>
                  Remove from Cart
                </button>
              </Card>
            </li>
          ))}
          <div className='w-full text-2xl font-bold text-center'>TOTAL PRICE: {sum} Rs</div> {/* Ensure total price spans full width */}
        </ul>
      )}
    </div>
  </>
);

      
    
  
}

export default Add;

