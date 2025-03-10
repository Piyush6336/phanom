import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ServicesCard = ({ iconUrl, title, description }) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    margin: '10px 0',
    minWidth: '300px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(108, 95, 212, 0.1)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    cursor: 'pointer',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: '#6c5fd4',
    borderRadius: '6px',
    padding: '10px',
  };

  const iconStyle = {
    width: '30px',
    height: '30px',
    objectFit: 'contain',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    flex: 1,
  };

  const hoverStyle = {
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(108, 95, 212, 0.2)',
    }
  };

  return (
    <Card style={{ ...cardStyle, ...hoverStyle }}>
      <div style={iconContainerStyle}>
        <img src={iconUrl} alt={title} style={iconStyle} />
      </div>
      <div style={contentStyle}>
        <Typography variant="h6" component="h3" style={{ fontWeight: 500, color: '#000000' }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: '#666666', lineHeight: '1.5' }}>
          {description}
        </Typography>
      </div>
    </Card>
  );
};

ServicesCard.defaultProps = {
  iconUrl: 'https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/grommet.png',
  title: 'Service Title',
  description: 'Service description goes here'
};

export default ServicesCard;
