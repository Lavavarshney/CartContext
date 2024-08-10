import React from "react";
import List from "./List";
function Card({img,title,price,children}){
 // console.log('Image URL:', img); // Add this line to inspect the image URL
return(
    
   <div className="card  p-4 mb-5 flex flex-col justify-between" style={{minHeight:'90%', width: '300px' }}>
  
  <img className= "object-cover mb-4" src= {img} alt={title} style={{ width: '300px', height: 'auto', maxHeight: '400px' }}  />
  
   
  <div className="card-body flex-1">
  <ul>
   <li> <h2 className="text-2xl font-bold mb-3" >{title}</h2></li>
   <li> <h2 className="font-bold" >{price} Rs</h2></li>
   <li className="mt-3">{children}</li>
    </ul>
  
  </div>
</div>

);
}
export default Card
