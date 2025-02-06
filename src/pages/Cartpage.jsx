import React from 'react';
import {useCart} from '../context/CartContext'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import '../styles/styles.css'

import Home from './Home';
import { Link } from "react-router-dom";
import { width } from '@fortawesome/free-solid-svg-icons/fa0';





export default function Cartpage(){
    const { cart} = useCart();

    return(
        <div >
            <Navbar/>
       
   <div className="cart">
   <h2>Your cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ):(cart.map((item,index)=>(
                  
           <div className='cartproducts'>
            <li key={index}>
            <img src={item.image} alt={item.name} width="50%" />
            <p>{item.name} </p>
                <p>${item.price}</p>
          </li>
          </div>
  
        )))}
          </div>
        <button className="cartbtn">  <Link to="/products">Keep Shopping</Link></button>
        <Footer/>
      
        </div>
    )
}