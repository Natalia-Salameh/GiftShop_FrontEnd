// import React, { useState } from 'react';
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import './zoom.css';

// const images = [
//   '/images/7.png',
//   '/images/8.png',
//   '/images/9.png',
//   '/images/10.png',
//   '/images/11.png',
// ];

// function Zoom() {
//   const [img, setImg] = useState(images[0]);

//   const handleImageChange = (image) => {
//     setImg(image);
//   };

//   return (
//     <div className="container">
//       <div className="left">
//         <div className="left_1">
//           {images.map((image, i) => (
//             <div
//               className={img === image ? 'img_wrap active' : 'img_wrap'}
//               key={i}
//               onClick={() => handleImageChange(image)}
//             >
//               <img src={image} alt="" />
//             </div>
//           ))}
//         </div>
//         <div className="left_2">
//           <TransformWrapper>
//             <TransformComponent>
//               <img src={img} alt="" />
//             </TransformComponent>
//           </TransformWrapper>
//         </div>
//       </div>
//       <div className="right"></div>
//     </div>
//   );
// }

// export default Zoom;
