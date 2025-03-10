import React from 'react';
import TestimonialCard from './TestiMonialCard';

const VideoTestimonialLayout = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    // flexWrap:"nowrap",
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(108,95,212,1) 23.53%, rgba(255,255,255,1) 150.05%)',
    padding: '20px'
  };

  const testimonialsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '36px',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1201.43px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontFamily: 'Cambria', fontWeight: 700, fontSize: '23.72px', textAlign: 'center', lineHeight: '27.67px', color: '#FFFFFF' }}>
        Real Stories, Real Impact: Our User's Shares Their Experience
      </h1>
      <div style={testimonialsContainerStyle}>
        <TestimonialCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/unsplash.png" name="This Kumar" title="CEO, Street Smart 222" />
        <TestimonialCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/unsplash-2.png" name="That Kumari" title="CEO, Be Bee 444" />
        <TestimonialCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/unsplash-3.png" name="Those Kumar" title="Co Founder, Smart 555" />
        <TestimonialCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/unsplash-4.png" name="These Kumari" title="Co Founder, To For 666" />
      </div>
    </div>
  );
};

export default VideoTestimonialLayout;
