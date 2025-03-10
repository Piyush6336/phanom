// import React, { useState, useEffect } from "react";
// import styles from "./HeroSection.module.css";
// import img1 from "../assets/img.png";
// import img2 from "../assets/img1.png";
// import img3 from "../assets/img2.png";

// const images = [img1, img2, img3];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // 5 sec interval

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.heroContainer}>
//       <div className={styles.textContent}>
//         <h1>
//           Let’s <span className={styles.gradientText}>innovation</span> meets
//           your <strong>excellence</strong>
//         </h1>
//         <p>Excellence refined, innovation ignited, the future starts here</p>
//         <button className={styles.button}>Book an Appointment</button>
//       </div>
//       <div className={styles.imageContainer}>
//         <img src={images[currentIndex]} alt="Hero" className={styles.heroImage} />
//       </div>
//       <div className={styles.stats}>
//         <div>
//           <h2>24/7</h2>
//           <p>Online Support</p>
//         </div>
//         <div>
//           <h2>100+</h2>
//           <p>Web Developed & Application</p>
//         </div>
//         <div>
//           <h2>5+</h2>
//           <p>Year Experience</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HeroBanner = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '614px',
    background: 'linear-gradient(132.77deg, rgba(255,255,255,1) 55.44%, rgba(77,149,225,1) 71.32%, rgba(129,101,228,1) 82.01%, rgba(189,44,232,1) 94.69%)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const mainContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1365px',
    margin: '0 auto',
    gap: '50px',
  };

  const leftContentStyle = {
    maxWidth: '736px',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
  };

  const imageStyle = {
    maxWidth: '629px',
    height: '438px',
    objectFit: 'contain',
  };

  const statsContainerStyle = {
    display: 'flex',
    gap: '32px',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  };

  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const dividerStyle = {
    width: '1px',
    height: '69px',
    background: '#ffffff',
    margin: '0 16px',
  };

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        <div style={leftContentStyle}>
          <div>
            <Typography variant="h1" style={{ fontSize: '48px', fontWeight: 700, lineHeight: '58px', color: '#000000' }}>
              Let's innovation meets your excellence
            </Typography>
            <Typography variant="body1" style={{ fontSize: '28px', fontWeight: 500, lineHeight: '36px', letterSpacing: '0.14px', color: '#000000' }}>
              Excellence refined, innovation ignited, the future starts here
            </Typography>
          </div>
          <Button 
            variant="contained" 
            style={{ width: '309px', height: '69px', background: '#6c5fd4', borderRadius: '34.5px', color: '#ffffff', fontSize: '18px' }}
            onMouseOver={(e) => e.target.style.background = '#5a4ec0'}
            onMouseOut={(e) => e.target.style.background = '#6c5fd4'}
          >
            Book an Appointment
          </Button>
        </div>
        <img src="https://dashboard.codeparrot.ai/api/image/Z88w0WI2-LlqmTRM/frame-10.png" alt="SEO" style={imageStyle} />
      </div>

      <div style={statsContainerStyle}>
        <div style={statItemStyle}>
          <Typography variant="h2" style={{ fontSize: '55.9px', fontWeight: 700, color: '#ffffff' }}>24/7</Typography>
          <Typography variant="body2" style={{ fontSize: '18px', lineHeight: '28px', color: '#ffffff' }}>Online Support</Typography>
        </div>
        <div style={dividerStyle} />
        <div style={statItemStyle}>
          <Typography variant="h2" style={{ fontSize: '55.9px', fontWeight: 700, color: '#ffffff' }}>100+</Typography>
          <Typography variant="body2" style={{ fontSize: '18px', lineHeight: '28px', color: '#ffffff' }}>Web Developed & Application</Typography>
        </div>
        <div style={dividerStyle} />
        <div style={statItemStyle}>
          <Typography variant="h2" style={{ fontSize: '55.9px', fontWeight: 700, color: '#ffffff' }}>5+</Typography>
          <Typography variant="body2" style={{ fontSize: '18px', lineHeight: '28px', color: '#ffffff' }}>Year Experience</Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

