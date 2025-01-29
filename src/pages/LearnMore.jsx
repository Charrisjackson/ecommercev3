import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css'
import heroImage from '../assets/hero.jpeg';


export default function LearnMore(){
    return(
    <>
               <Navbar/>
    
    <div
  style={{
    width: '100vw',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
 
/>
        <div className="content">
        <h1>Why should you get your products from Carmani's?</h1>

        <p>
          Our products suggestions are tried and true- used by developers who
          have been in the industry for years. With top of the line Macbooks,
          materials for the days your just want to put the computer down, and so
          much more, we quite literally have everything you need as a beginner
          developer, except for the bootcamps of course.
        </p>

        <button>
        <Link to='/products/'>Shop now<span></span></Link>
         
        </button>
      </div>
    </>

    )
}