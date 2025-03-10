import React from 'react';

const ExploreServiceSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
      maxWidth: '255px',
      padding: '10px 0',
      boxSizing: 'border-box',
    }}>
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '58px',
        color: '#6c5fd4',
        opacity: 0.5,
        margin: 0,
        width: '100%',
        maxWidth: '247px',
      }}>
        Explore our Service
      </h1>
      
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '28px',
        color: '#000000',
        margin: 0,
        width: '100%',
        maxWidth: '255px',
      }}>
        Explore our service and discover solutions designed to meet your unique needs. With a focus on quality and innovation, we turn your vision into reality.
      </p>
    </div>
  );
};

ExploreServiceSection.defaultProps = {
  heading: 'Explore our Service',
  description: 'Explore our service and discover solutions designed to meet your unique needs. With a focus on quality and innovation, we turn your vision into reality.'
};

export default ExploreServiceSection;
