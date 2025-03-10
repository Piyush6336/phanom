// import React from "react";
// import { Box } from "@mui/material";
// import { keyframes } from "@mui/system";
// import logo1 from "../assets/Logo1.png";
// import logo2 from "../assets/Logo2.png";
// import logo3 from "../assets/Logo3.png";
// import logo4 from "../assets/Logo4.png";
// import logo5 from "../assets/Logo5.png";

// const logos = [logo1, logo2, logo3, logo4, logo5];

// // Continuous scrolling effect
// const scroll = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const LogoSlider = () => {
//   return (
//     <Box 
//       sx={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         position: "relative",
//         width: "100%",
//         backgroundColor: "#f8f9fa",
//         padding: "10px 0",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           animation: `${scroll} 20s linear infinite`,
//           width: "300%", // Double width to create smooth loop
//         }}
//       >
//         {[...logos, ...logos].map((logo, index) => (
//           <img 
//             key={index} 
//             src={logo} 
//             alt={`logo-${index}`} 
//             style={{ height: 90, margin: "0 10px" }} // Reduced space
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default LogoSlider;
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";

const LogoSlider = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '1440px',
    padding: '60px 27px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#ffffff',
    margin: '0 auto',
  };

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div style={containerStyle}>
      <Swiper spaceBetween={50} slidesPerView={0} loop={false}>
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <ImageList cols={1} rowHeight={75.38}>
              <ImageListItem>
                <img
                  src={logo} 
                  alt={`Client Logo ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </ImageListItem>
            </ImageList>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;

