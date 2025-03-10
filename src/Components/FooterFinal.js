import React from 'react';
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';

const FooterLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    // backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z89DKGI2-LlqmTRj/div-over.png)',
    background: 'linear-gradient(180deg, rgba(20, 20, 21, 0) 0%, #141415 100%)',

    // backgroundSize: 'cover',
    justifyContent: 'space-between',
  };

  const headerStyle = {
    flexGrow: 1,
    width: '100%',
    maxWidth: '1288px',
    height: 'auto',
    margin: '0 auto',
    padding: '40px 0',
  };

  const footerStyle = {
    flexGrow: 1,
    width: '100%',
    maxWidth: '1200px',
    height: 'auto',
    margin: '0 auto',
    padding: '40px 0',
  };

  return (
    <div style={layoutStyle}>
      <HeaderSection style={headerStyle} />
      <FooterSection style={footerStyle} />
    </div>
  );
};

export default FooterLayout;

