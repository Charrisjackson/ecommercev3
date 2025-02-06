import Navbar from "../components/Navbar";
import '../styles/products.css'
import '../styles/product2.css'

import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Footer from '../components/Footer'

import ProductCard from "../components/ProductCard";

export default function Products() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]) //original data for rest(all button)
  const productItems = [...new Set(data.map((val) => val.category))]  ///take unique values and store in product item for filtering by button click



  // The useEffect hook runs side effects in functional components.
  useEffect(() => {
    fetch("https://ecommercev3-jpea.vercel.app/products") //fetch for http request
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
  }, []); //[] makes sure that it only runs once when the component is first rendered.

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
   
    <Navbar/>
  
     
    <Filter  productItems = {productItems} 
    filterItems={filterItems} 
    setData={setData} 
    originalData ={originalData}
    filterPrices={filterPrices}
    />

       <div className="wrapper">
       {data.map((product) => (
              
              <ProductCard key={product.id} product={product} /> 
             
        
         
         ))}
       </div>

    

    
          <Footer/>
       
    
        
   
    </>
  );
}
