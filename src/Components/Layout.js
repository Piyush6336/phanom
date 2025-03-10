import React from 'react';
import GuideSection from './GuideSection';
import ProfileSection from './ProfileSection';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh',
      backgroundColor: '#f3e7fe',
      background: 'linear-gradient(90deg, rgba(243,231,254,1) 0%, rgba(224,236,255,1) 100%)'
    }}>
      <div style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z882CGI2-LlqmTRW/unsplash.png)',
        backgroundSize: 'cover',
        width: '50%',
        height: '100%',
      }}>
        <ProfileSection />
      </div>
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px',
        width: '50%',
        height: '100%',
      }}>
        <GuideSection />
      </div>
    </div>
  );
};

export default Layout;

