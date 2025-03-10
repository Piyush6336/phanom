import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

const GuideSection = ({ title = "Flexible, private, and affordable VPS Hosting", subtitle = "Virtual Private Server", features = ["Expand major projects with hardware strategy design options.", "Pick Your Dream OS.", "Maintain Sites and Applications uptime of 99.9%.*"], rating = 4.6, reviews = 110937 }) => {
  return (
    <div style={{
      width: '100%',
      minWidth: '609px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      padding: '20px'
    }}>
      {/* Title Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '494px'
      }}>
        <Typography variant="subtitle1" style={{
          fontFamily: 'Poppins',
          fontSize: '18px',
          lineHeight: '28px',
          color: '#000000'
        }}>
          {subtitle}
        </Typography>
        <Typography variant="h4" style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '44px',
          letterSpacing: '0.18px',
          color: '#000000',
          margin: 0
        }}>
          {title}
        </Typography>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '100%'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center'
          }}>
            <img src={`https://dashboard.codeparrot.ai/api/image/Z882CGI2-LlqmTRW/icon-${index}.png`} alt="icon" style={{ width: '28px', height: '28px' }} />
            <Typography variant="body1" style={{
              fontFamily: 'Poppins',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#000000'
            }}>
              {feature}
            </Typography>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center'
      }}>
        <Button variant="contained" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '5px',
          padding: '13px 33px',
          backgroundColor: '#6c5fd4',
          borderRadius: '4px',
          color: '#ffffff'
        }}>
          Get Plans and Pricing
          <img src="https://dashboard.codeparrot.ai/api/image/Z882CGI2-LlqmTRW/stash-ar.png" alt="arrow" style={{ width: '24px', height: '24px' }} />
        </Button>
        <Button variant="text" style={{
          fontFamily: 'Poppins',
          fontSize: '18px',
          lineHeight: '28px',
          color: '#000000'
        }}>
          Buy Fully Managed VPS
        </Button>
      </div>

      {/* Rating Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center'
      }}>
        <Rating value={rating} readOnly style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '11.54px'
        }} />
        <Typography variant="body1" style={{
          fontFamily: 'Poppins',
          fontSize: '18px',
          lineHeight: '28px',
          color: '#000000'
        }}>
          {rating} out of 5 stars based on {reviews} reviews
        </Typography>
        <Typography variant="body1" style={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '28px',
          color: '#000000',
          marginLeft: 'auto'
        }}>
          View All
        </Typography>
      </div>
    </div>
  );
};

export default GuideSection;

