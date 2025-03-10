import React from 'react';
import ServicesCard from './ServicesCard';

const WhyChooseUsLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  };

  const leftCircleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    height: 'auto',
    backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/animatio.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
  };

  const rightContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    height: 'auto',
    padding: '20px',
  };

  return (
    <div style={layoutStyle}>
      <div style={leftCircleStyle}>
        <h2 style={{ color: '#6c5fd4', textShadow: '1px 1px 2px #ffffff', fontSize: '24px', textAlign: 'center' }}>Why Choose Us?</h2>
      </div>
      <div style={rightContentStyle}>
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/bitcoin.png"
          title="Verified Professionals"
          description="you're in good hands with our verified professionals – your trusted experts for top-quality work"
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/arcticon.png"
          title="Competitive Pricing"
          description="Find the perfect fit for your budget with our competitive pricing"
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/streamli.png"
          title="Customized Solutions"
          description="Experience the power of personalized service with our freelancers, who tailor their solutions to meet your unique needs."
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/hugeicon.png"
          title="Quick Turnaround"
          description="Efficient project management and prompt delivery of services, saving clients time and effort."
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/ri-secur.png"
          title="Secure Payments"
          description="Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied."
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/mdi-feed.png"
          title="Feedback and Ratings"
          description="Access to reviews and ratings of freelancers, helping clients make informed decisions based on previous work and client feedback."
        />
        <ServicesCard 
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z887dud_tb-16vEh/fluent-p.png"
          title="Customer Support"
          description="Dedicated customer support to assist with any issues or queries, ensuring a smooth and satisfying experience."
        />
      </div>
    </div>
  );
};

export default WhyChooseUsLayout;
