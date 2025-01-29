import { Link } from "react-router-dom";
import './products.css'

export default function Productnavbar() {
  return (
    <>
      <nav className="productNav" style={{display:'flex',background: "rgba(10, 204, 214, 0.16)", height: '90px', padding:'20px'}}>
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
    </>
  );
}
