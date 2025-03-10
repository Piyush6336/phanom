import React from 'react';
import Sidebar from './SlideBar';
import ServiceCards from './ServiceCard';

const FinalLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '25px', width: '100%', height: 'auto', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ flexGrow: 0, width: '255px', height: 'auto' }}>
        <Sidebar />
      </div>
      <div style={{ flexGrow: 1, height: 'auto', backgroundColor: '#f9f9f9', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <ServiceCards />
      </div>
    </div>
  );
};

export default FinalLayout;

