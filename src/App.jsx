
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Products from './pages/Products';
import CartProvider from './context/CartContext'
import Cartpage from "./pages/Cartpage";
import './styles/styles.css'



// import './App.css'
function App() {
  

  return (
    <>

    
<CartProvider>
<Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/contact' element={<Contact/>}/>
    <Route path= '/products' element={<Products/>}/>
    <Route path= '/cart' element={<Cartpage/>}/>

    <Route path= '*' element={<Error/>}/>
  </Routes>
</CartProvider>
 
    </>
  )
}

export default App
