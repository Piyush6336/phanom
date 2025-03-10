import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const DiscoveryPlanning = ({ 
  title = "Discovery & Planning",
  description = "Initial consultation, market research, and defining the project scope and strategy",
  planIcon = "https://dashboard.codeparrot.ai/api/image/Z88zJud_tb-16vEb/plan-lis.png",
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z88zJud_tb-16vEb/frame-16.png"
}) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    color: '#ededed',
    textAlign: 'center',
    letterSpacing: '0.5px',
    margin: 0,
  };

  const descriptionStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#ededed',
    textAlign: 'center',
    lineHeight: '1.5',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <img 
        src={backgroundImage} 
        alt="Background" 
        style={backgroundStyle}
      />
      <Container style={contentContainerStyle}>
        <img 
          src={planIcon} 
          alt="Plan Icon" 
          style={iconStyle}
        />
        <div>
          <Typography variant="h6" style={titleStyle}>{title}</Typography>
          <Typography variant="body1" style={descriptionStyle}>{description}</Typography>
        </div>
        <Button variant="contained" color="primary">Learn More</Button>
      </Container>
    </div>
  );
};

export default DiscoveryPlanning;

