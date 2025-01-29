import Productnavbar from "./ProductNav";
import './products.css'
import './product2.css'

import { useEffect, useState } from "react";
import Filter from "./filter";
import Footer from './Footer'



export default function Products() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]) //original data for rest(all button)
  const productItems = [...new Set(data.map((val) => val.category))]  ///take unique values and store in product item for filtering by button click


  useEffect(() => {
    fetch("http://localhost:5005/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Properly invoke .json()
      })
      .then((response) => {
        // console.log(response); // Debugging: Log the response
        setData(Array.isArray(response) ? response : response.products || []);
        setOriginalData(Array.isArray(response) ? response : response.products || []) //storing original data
      })
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

//changing data displayed based on category
  const filterItems = (cat)=>{
    const newItems = originalData.filter((newval)=> newval.category === cat)
    setData(newItems)
  }

  //price filtering function
  const filterPrices = (min,max)=>{
   
    const priceFiltered = originalData.filter((product)=> {
      // converting price from str to int 
      const price = parseFloat(product.price);
       return price >= min && price <= max ;
    })
    console.log("Filtered Items:", priceFiltered);

    setData(priceFiltered)
  }

  return (
    <>
   
    <Productnavbar/>
  
     
    <Filter  productItems = {productItems} 
    filterItems={filterItems} 
    setData={setData} 
    originalData ={originalData}
    filterPrices={filterPrices}
    />

       <div className="wrapper">
       {data.map((product) => (
              
              <div key={product.id} className="single-card">
                  <div className="img-area">
                      <img src={product.image} alt="" />
                      <div className="overlay">
                          <button className='add-to-cart'>Add to cart</button>
                      </div>
                  </div>
                  <div className="info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <p>{product.description}</p>
              </div>
              </div>
        
         
         ))}
       </div>

       {/* <div key={product.id} className="card"> 
           <img className="productimage" src={product.image}/>
           <h1>{product.name}</h1>
           <p className="price"> ${product.price}</p>
           <p>{product.description}</p>
           <p><button className="cartbtn">Add to cart</button></p>
           
         </div> */}
    

    
          <Footer/>
       
    
        
   
    </>
  );
}
