import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UniqueFeaturesSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '36px',
      width: '100%',
      minWidth: '300px',
      maxWidth: '100%',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        width: '100%'
      }}>
        <Typography variant="h1" style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '36px',
          fontWeight: 600,
          lineHeight: '44px',
          letterSpacing: '0.18px',
          color: '#000000',
          margin: 0,
          WebkitTextStroke: '3px #6c5fd4',
          WebkitTextStrokeOpacity: 0.5,
          WebkitTextFillColor: 'transparent'
        }}>
          What makes Us Unique?
        </Typography>
        <Typography variant="body1" style={{
          fontFamily: 'Cambria, serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '28px',
          color: '#000000',
          margin: 0
        }}>
          At Phanom Professionals, we don't just offer services; we innovate, create, and lead with excellence. Our unique and forward-thinking approach sets us apart in the highly competitive world of marketing and IT services. As a leading digital marketing agency in India, we are committed to delivering transformative solutions that drive growth, inspire engagement, and establish lasting success for our clients.
        </Typography>
      </div>
      <Button 
        variant="contained"
        style={{
          width: '281px',
          height: '56px',
          backgroundColor: '#6c5fd4',
          borderRadius: '23px',
          color: '#ffffff',
          fontFamily: 'Cambria, serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '28px',
          textTransform: 'none',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#5a4ec0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#6c5fd4'}
        onClick={() => console.log('Book an Appointment clicked')}
      >
        Book an Appointment
      </Button>
    </div>
  );
};

export default UniqueFeaturesSection;

