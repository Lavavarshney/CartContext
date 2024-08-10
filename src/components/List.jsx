import {React,useState} from 'react'
import { useLoaderData} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';
import Add from './Add';
import Card from './Card';

function List() {
   // const [imageSrc, setImageSrc] = useState("");
    const data=useLoaderData()
  const[istoggle,setIstoggle]=useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {


 setSelectedItem(item);
 setIstoggle(true)
 navigate('/add', { state: { item } });
   console.log(item)


  };

   //addItem(item)
   //console.log(item);
    
   
   // console.log(filteredItems)
    
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>PRODUCT LIST</h1>
        <div className='flex flex-wrap' >
        {data.length === 0 && <p>No products found.</p>}
            {data.map((item) => (
                 
           
                <div className="shadow-card rounded-lg p-6 my-4 w-full min-h-[80px] flex flex-col items-center text-center sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300  hover:scale-105" key={item.id}
               >
                 {console.log('Item Image:', item.image)}  
           
                    
                    <Card
                 img={item.image}
                 title={item.title}
                price={item.price}>
                 <button className='bg-blue-600 text-white p-2 rounded-xl  hover:bg-purple-600'
               
                 onClick={() => handleAddToCart(item)}
               >
                 Add to Cart
               </button>
               </Card>
              
               
             </div>
                
            ))}  </div>    
         
           
    
     </div>  
    )
   
}



export default List

export const proInfoLoader = async () => {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
     // (data => {
        // Assuming the API returns an object with an 'image' field that contains the image URL
       // setImageSrc(data.image);
     // })
      console.log('Fetched data:', data);
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
}


