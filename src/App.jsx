
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/contact';
import Footer from './pages/Footer';
import Products from './pages/Products';

import './pages/styles.css'
import LearnMore from "./pages/LearnMore";


// import './App.css'

function App() {
  

  return (
    <>
   {/* <Home/> */}
     {/* <Products/> */}
    
  <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/contact' element={<Contact/>}/>
    <Route path= '/products' element={<Products/>}/>
    <Route path= '/learnmore' element={<LearnMore/>}/>

    <Route path= '*' element={<Error/>}/>
    {/* <Route path= 'login' element={<Login/>}/>
    <Route path= 'signup' element={<Signup/>}/> */}
    {/* <Route path= 'user' element={<Profile/>}/> */}
  </Routes>
 
    </>
  )
}

export default App
