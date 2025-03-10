import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HeaderSection = ({ style }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '320px',
    width: '100%',
    height: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    ...style,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '36px',
    maxWidth: '675px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: '1.2',
    color: '#FFFFFF',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: '1.2',
    letterSpacing: '0.18px',
    color: '#FAFAFA99',
  };

  const buttonStyle = {
    padding: '13px 33px',
    backgroundColor: '#FFFFFF',
    borderRadius: '83.88px',
    color: '#6C5FD4',
    fontWeight: 600,
    textTransform: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <Typography variant="h1" style={headingStyle}>
          Let's make something<br />
          great together.
        </Typography>
        <Typography variant="body1" style={paragraphStyle}>
          Let us know what challenges you are<br />
          trying to solve so we can help.
        </Typography>
        <Button 
          variant="contained" 
          style={buttonStyle}
          endIcon={<img src="https://dashboard.codeparrot.ai/api/image/Z89DKGI2-LlqmTRj/stash-ar.png" alt="arrow" width="24" height="24" />}
        >
          Join Us
        </Button>
      </div>
    </div>
  );
};

HeaderSection.defaultProps = {
  style: {},
};

export default HeaderSection;

