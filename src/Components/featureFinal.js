import React from 'react';
import UniqueFeaturesSection from './featureSection';
import FeatureCards from './featureCard';

const Feature = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      height: 'auto',
      padding: '40px',
      boxSizing: 'border-box',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        flexGrow: 1,
        maxWidth: '45%',
        padding: '20px'
      }}>
        <UniqueFeaturesSection />
      </div>
      <div style={{
        flexGrow: 1,
        maxWidth: '45%',
        padding: '20px'
      }}>
        <FeatureCards />
      </div>
    </div>
  );
};

export default Feature;

