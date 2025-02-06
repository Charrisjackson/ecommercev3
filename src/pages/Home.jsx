import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/styles.css'
import heroImage from '../assets/hero.jpeg';
import { NavLink, Link } from 'react-router-dom';
import CarouselExample from '../components/Carousels'
import Articles from '../components/Articles'
import hero2 from '../assets/hero2.png'

import { AlignCenter } from 'lucide-react';

export default function Home() {
  return (
    <>
       <nav className="navbar">
        <p className="logo">Carmani's.</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <CarouselExample    
      />
  
  <div className="holder"></div>
        
      

  <div className="content-wrapper">
        <div className="content" >
        
          <p>Our products have everything you need to kick off your career! Between
            the long nights, headaches, tears, and constant learning and growing,
            our web developer starter pack makes your life as a tech-genius super
            easy!</p>
        
          <div className="button">
            <button className='bttn'>
            <Link to='./contact/'>Learn More<span></span></Link>

            </button>
            <button className='bttn'>
           <Link to='./products/'>Shop now<span></span></Link>
            </button>
          </div>
          
     
  
                 </div>

                 </div>
                
        <div className="holder"></div>
<div className="content-wrapper">
        <div className='content'>
        <p>  Our products suggestions are tried and true- used by developers who
          have been in the industry for years. With top of the line Macbooks,
          materials for the days your just want to put the computer down, and so
          much more, we quite literally have everything you need as a beginner
          developer, except for the bootcamps of course.</p>
        </div>
        </div>


  <div className="holder"></div>
   <Articles/>
  <div className="holder"></div>

   <div className="footercomp">  
    <Footer/>
   </div>
    
    </>
  );
}
