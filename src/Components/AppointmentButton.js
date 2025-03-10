import React from 'react';
import Button from '@mui/material/Button';

const AppointmentButton = ({ onClick = () => console.log('Appointment button clicked') }) => {
  return (
    <Button 
      variant="contained"
      onClick={onClick}
      style={{
        width: '100%',
        maxWidth: '255px',
        height: '56px',
        backgroundColor: '#6c5fd4',
        borderRadius: '23px',
        color: '#ffffff',
        fontFamily: 'Cambria',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '28px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#5a4ec2'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#6c5fd4'}
    >
      Book an Appointment
    </Button>
  );
};

export default AppointmentButton;

