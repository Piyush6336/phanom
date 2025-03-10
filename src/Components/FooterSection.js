import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FooterSection = ({ style }) => {
  const containerStyle = {
    width: '100%',
    minWidth: '1200px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'inherit',
    ...style
  };

  const footerWrapperStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '80px',
    paddingBottom: '64px',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };

  const logoStyle = {
    width: '270px',
    height: '113.16px',
    objectFit: 'contain'
  };

  const linkColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const linkStyle = {
    color: '#FFFFFF',
    fontSize: '18px',
    fontFamily: 'Cambria',
    lineHeight: '28px',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  const addressColumnStyle = {
    ...linkColumnStyle,
    width: '253px'
  };

  const dividerStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#FFFFFF'
  };

  const bottomSectionStyle = {
    width: '100%',
    height: '152px',
    padding: '42px 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const bottomLinksStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px'
  };

  const bottomLinkStyle = {
    color: '#BDBDBD',
    fontSize: '18px',
    fontFamily: 'Cambria',
    lineHeight: '28px',
    cursor: 'pointer'
  };

  const callSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px'
  };

  const callIconContainerStyle = {
    width: '58px',
    height: '59px',
    backgroundColor: '#6C5FD4',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const callTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px'
  };

  const callTitleStyle = {
    color: '#6C5FD4',
    fontSize: '21px',
    fontFamily: 'Manrope',
    fontWeight: 700
  };

  const callNumberStyle = {
    color: '#E0E0E0',
    fontSize: '21px',
    fontFamily: 'Manrope',
    fontWeight: 700
  };

  return (
    <div style={containerStyle}>
      <div style={dividerStyle} />
      <div style={footerWrapperStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z89DKGI2-LlqmTRj/newloggg.png" alt="Logo" style={logoStyle} />
        <Grid container spacing={3} style={{ flexGrow: 1 }}>
          <Grid item xs={12} sm={4} md={3} style={linkColumnStyle}>
            <Typography style={linkStyle}>Home</Typography>
            <Typography style={linkStyle}>Services</Typography>
            <Typography style={linkStyle}>Hire Indian Talent</Typography>
            <Typography style={linkStyle}>Our Portfolio</Typography>
            <Typography style={linkStyle}>Book an Appointment</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} style={linkColumnStyle}>
            <Typography style={linkStyle}>Facebook</Typography>
            <Typography style={linkStyle}>Instagram</Typography>
            <Typography style={linkStyle}>Linkedin</Typography>
            <Typography style={linkStyle}>Pinterest</Typography>
            <Typography style={linkStyle}>Twitter</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} style={addressColumnStyle}>
            <Typography style={linkStyle}>Address:</Typography>
            <Typography style={linkStyle}>E-193, Third Floor, TDS Tower, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</Typography>
          </Grid>
        </Grid>
      </div>
      <div style={bottomSectionStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={bottomLinksStyle}>
            <Typography style={bottomLinkStyle}>Terms of Use</Typography>
            <Typography style={bottomLinkStyle}>Privacy Policy</Typography>
            <Typography style={bottomLinkStyle}>About Cookies</Typography>
          </div>
          <Typography style={bottomLinkStyle}>Copyright © 2025 Phanom Techno Private Ltd. All rights reserved.</Typography>
        </div>
        <div style={callSectionStyle}>
          <div style={callIconContainerStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z89DKGI2-LlqmTRj/material.png" alt="Call Icon" style={{ width: '36px', height: '36px' }} />
          </div>
          <div style={callTextContainerStyle}>
            <Typography style={callTitleStyle}>Call to ask any question</Typography>
            <Typography style={callNumberStyle}>+91 (628) 007-2655</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterSection.defaultProps = {
  style: {}
};

export default FooterSection;

