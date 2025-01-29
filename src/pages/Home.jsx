import Navbar from './Navbar'
import Footer from './Footer';
import './styles.css'
import heroImage from '../assets/hero.jpeg';
import { NavLink, Link } from 'react-router-dom';
import Slider from './Slider';
import Articles from './Articles'

import bookbag from '../assets/bookbag.png'
import macbook from '../assets/macbook.png'
import celcuis from '../assets/celcuis.png'
import therapy from '../assets/therapy.png'
const images = [macbook, bookbag, celcuis, therapy];

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
        <div className='hero'
      style={{
        width: '100vw',
        height: '60vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        
        top:'10'
      }}
     
    >
  <h1>Have you ever considered becoming a Web Developer?</h1>
  
  </div>
  <div className="holder"></div>
        
      

  <div className="content-wrapper">
        <div className="content" >
        
          <p>
            Our products have everything you need to kick off your career! Between
            the long nights, headaches, tears, and constant learning and growing,
            our web developer starter pack makes your life as a tech-genius super
            easy!
          </p>
        
          <div className="button">
            <button>
            <Link to='./contact/'>Learn More<span></span></Link>

            </button>
            <button>
           <Link to='./products/'>Shop now<span></span></Link>
            </button>
          </div>
          
     
  
                 </div>

                 </div>
                 <div  className='slider'styles={{maxWidth:'1200px',
      width:'100%',
      height:'250px',
      margin:'0 auto',
      aspectRatio:'5/2',
      border:'2px solid #009688'
      }}>
              
        <div className="holder"></div>

   <Slider imageUrls={images}/>
             

   </ div>
  <div className="holder"></div>
   <Articles/>
  <div className="holder"></div>

   <div className="footercomp">  
    <Footer/>
   </div>
    
    </>
  );
}
