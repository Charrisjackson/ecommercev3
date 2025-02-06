import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpeg'
import slider5 from '../assets/slider5.jpeg'

import hero2 from '../assets/hero2.png'

function CarouselExample({slides}) {
  return (
    <Carousel style={{width:"100vw" , height: '60vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
      
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Third slide" 
         
        />
        <Carousel.Caption>
       <p>State Of the Art Products and Reccomendations </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="Third slide"
          
        />
        <Carousel.Caption>
         <img src="" alt="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />
  
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;