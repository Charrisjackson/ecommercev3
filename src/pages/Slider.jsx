// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import './slider.css'
// import sarah from '../assets/sarah.jpeg'
// import bob from '../assets/bob.jpeg'
// import janelle from '../assets/janelle.jpeg'
// import david from '../assets/david.jpeg'
// import carl from '../assets/carl.jpeg'
// import  mia from'../assets/mia.jpeg'

// export default function UserSwiper() {
//   return (

//     <div className="container">
//   <div className="container-wrapper">
//     <div className="card-list">
//     <h2>Customer Reviews!</h2>
//     {/* swiper is a open source slider with native behavior and trasnitions. can be used in apps and websites across different languages  */}
//       <Swiper
      
//         modules={[Navigation, Pagination]}
//         spaceBetween={15}
//         slidesPerView={2} // Adjust the number of slides per view
        
//         navigation
//         pagination={{ clickable: true }}
//         loop={true} // Optional: for infinite looping
//         width={694}
//         height={504}
       
        
//       >
//         <SwiperSlide>
//           <div className="card-item">
//             <img src={carl} className="user-image" />
//             <h2 className="user-name">Carl Schueler</h2>
//             <p className="user-profession">Super cool!</p>
//            <p>⭐️⭐️⭐️⭐️</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card-item">
//             <img src= {janelle} className="user-image" />
//             <h2 className="user-name">Janelle Jackson</h2>
//             <p className="user-profession">Great for beginners</p>
//             <p>⭐️⭐️⭐️⭐️⭐️</p>
         
//           </div>
//         </SwiperSlide>

//         {/* Add more SwiperSlides as needed */}
//         <SwiperSlide>
//           <div className="card-item">
//             <img src={mia} className="user-image" />
//             <h2 className="user-name">Mia Paul</h2>
//             <p className="user-profession"> Finally a Software Developer site..</p>
//            <p>⭐️⭐️⭐️⭐️</p>
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card-item">
//             <img src={bob} className="user-image" />
//             <h2 className="user-name">Bob Riley</h2>
//             <p className="user-profession">Perfect reccomendations!</p>
//            <p>⭐️⭐️⭐️⭐️⭐️</p>
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card-item">
//             <img src={sarah} className="user-image" />
//             <h2 className="user-name">Sarah Jones</h2>
//             <p className="user-profession">Best place to start.</p>
//             <p>⭐️⭐️⭐️⭐️</p>
         
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="card-item">
//             <img src={david} className="user-image" />
//             <h2 className="user-name">David Wilson</h2>
//             <p className="user-profession">Look no further!</p>
//             <p>⭐️⭐️⭐️⭐️⭐️</p>
         
//           </div>
//         </SwiperSlide>
//       </Swiper>

//     </div>
//   </div>
//     </div>
//   );
// }
