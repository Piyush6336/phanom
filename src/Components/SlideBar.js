
import React from 'react';
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24.97px',
      width: '100%',
      maxWidth: '255px',
      padding: '20px 0',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%'
      }}>
        <h1 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '58px',
          WebkitTextStroke: '3px #6c5fd4',
          WebkitTextStrokePosition: 'outside',
          opacity: 0.5,
          margin: 0,
          width: '100%',
          textAlign: 'center'
        }}>
          Explore our Service
        </h1>
      </div>

      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '28px',
        color: '#000000',
        margin: 0,
        width: '100%',
        textAlign: 'center'
      }}>
        Explore our service and discover solutions designed to meet your unique needs. With a focus on quality and innovation, we turn your vision into reality.
      </p>

      <Button 
        variant="contained"
        style={{
          width: '100%',
          height: '56px',
          backgroundColor: '#6c5fd4',
          borderRadius: '23px',
          color: '#ffffff',
          fontFamily: 'Cambria',
          fontSize: '18px',
          lineHeight: '28px',
          textTransform: 'none',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#5a4ec0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#6c5fd4'}
      >
        Book an Appointment
      </Button>
    </div>
  );
};

export default Sidebar;

