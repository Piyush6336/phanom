import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ConnectSection = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail('');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    width: '100%',
    backgroundColor: '#fff',
    gap: '28px'
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '36px',
    fontWeight: 600,
    letterSpacing: '0.18px',
    lineHeight: '44px',
    color: '#a1a1a1',
    margin: 0
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '11px',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Build skills, connect.</h2>
      <div style={inputContainerStyle}>
        <TextField
          variant="outlined"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '385px',
            backgroundColor: '#f2f4f8',
            borderRadius: '12px'
          }}
          InputProps={{
            style: {
              padding: '24px',
              fontSize: '18px',
              fontFamily: 'Cambria, serif',
              lineHeight: '28px',
              color: '#a5a5a5'
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            padding: '24px 60.5px',
            backgroundColor: '#715de3',
            borderRadius: '12px',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '26px',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#5a4bc4';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#715de3';
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

// Default props
ConnectSection.defaultProps = {
  onSubmit: (email) => console.log('Email submitted:', email)
};

export default ConnectSection;

