// import React from "react";
// import styles from "./header.module.css"; // Import CSS Module
// import { Button, Menu, MenuItem } from "@mui/material";
// import { useState } from "react";
// import logo from "../assets/logo.png"; // Ensure the logo is in assets folder

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <header className={styles.headerContainer}>
//       {/* Logo */}
//       <img src={logo} alt="Phanom Logo" className={styles.logo} />

//       {/* Navigation Links */}
//       <nav className={styles.navLinks}>
//         <div className={styles.navItem} onClick={handleMenuClick}>
//           Service ▼
//         </div>
//         <div className={styles.navItem} onClick={handleMenuClick}>
//           Hire Indian Talent ▼
//         </div>
//         <div className={styles.navItem}>Our Portfolio</div>
//         <div className={styles.navItem}>Case Study</div>
//       </nav>

//       {/* Dropdown Menu */}
//       <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//         <MenuItem onClick={handleClose}>Option 1</MenuItem>
//         <MenuItem onClick={handleClose}>Option 2</MenuItem>
//       </Menu>

//       {/* Book Appointment Button */}
//       <button className={styles.appointmentButton}>Book an Appointment</button>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    appBar: {
      backgroundColor: '#ffffff',
      padding: '0 120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      width: '180px',
      height: '75.44px',
      objectFit: 'contain',
    },
    navGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    button: {
      textTransform: 'none',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '26px',
      color: '#000000',
    },
    bookButton: {
      backgroundColor: '#6c5fd4',
      borderRadius: '23px',
      color: '#ffffff',
      textTransform: 'none',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '26px',
      '&:hover': {
        backgroundColor: '#5a4ec0',
      },
    },
    decorativeImage: {
      position: 'absolute',
      right: 0,
      top: '-52.67px',
      width: '123.35px',
      height: '113.6px',
      objectFit: 'contain',
    },
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z88vq-d_tb-16vEU/newloggg.png" 
        alt="Phanom Professionals Logo" 
        style={styles.logo}
      />
      
      <div style={styles.navGroup}>
        <Button style={styles.button} onClick={handleClick}>
          Service
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>

        <Button style={styles.button} onClick={handleClick}>
          Hire Indian Talent
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>

        <Button style={styles.button}>Our Portfolio</Button>
        <Button style={styles.button}>Case Study</Button>

        <Button style={styles.bookButton}>Book an Appointment</Button>
      </div>

      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z88vq-d_tb-16vEU/frame-16.png" 
        alt="Decorative" 
        style={styles.decorativeImage}
      />
    </AppBar>
  );
};

export default Header;

