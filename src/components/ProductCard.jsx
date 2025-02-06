import '../styles/products.css';
import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure correct import path
import { useNavigate } from 'react-router-dom';
import '../styles/products.css';

export default function ProductCard({ product }) {
    const {addToCart} = useCart();
    const navigate = useNavigate();
  const handleAddToCart = () =>{
    addToCart(product); 
    navigate('/cart')//redirects user to cart page
  }
  return (
    <div className="single-card">
      <div className="img-area">
        <img src={product.image} alt={product.name} />
        <div className="overlay">
          <button onClick={handleAddToCart}className='add-to-cart'>Add to cart</button>
        </div>
      </div>
      <div className="info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <p className='priceDescript'>{product.description}</p>
      </div>
    </div>
  );
}

//created an entire component out of the  return jsx for the product card styling. then placed "productCard" component inside of data.map instead of the code above being there.
//passed product as props to this component