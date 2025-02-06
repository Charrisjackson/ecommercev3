import { Link } from "react-router-dom";
import '../styles/styles.css';
import { ShoppingCart} from 'lucide-react';
export default function Navbar() {
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
          <li>
            <Link to="/cart">   <ShoppingCart /></Link>
            
          </li>
        </ul>
      </nav>
    </>
  );
}
