
import { Link } from "react-router"

import { Facebook, Instagram,Twitter } from 'lucide-react';
import './styles.css'
export default function Footer(){
return(
    <>
<footer>
      <div className="footer-container">
        <div className="wrapper">
          <div className="footer-widget">
          
            <p className="desc">Serving your community since 2024.</p>
            <ul className="socials">
              <li>
              
                <Link to= 'https://www.instagram.com'>
                    <Instagram/></Link>
                  
                
              </li>
              <li>
              <Link to= 'https://www.facebook.com'><Facebook/></Link>
             
              </li>
              <li>
              <Link to= 'https://www.x.com'><Twitter/></Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Quick Links</h6>
            <ul className="links">
                <Link to= '/home'></Link>
                <li></li>
              <li><Link to="#contact-container">Locations</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Support</h6>
            <ul className="links">
              <li><Link to="#">About</Link></li>
              <li><Link to="#faq">FAQ</Link></li>
              <li><Link to="#contact-container">Contact Us</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>
            Created and Designed by 
           Carmani Harris-Jackson
           
          </p>
        </div>
      </div>
    </footer>

    </>
)
}