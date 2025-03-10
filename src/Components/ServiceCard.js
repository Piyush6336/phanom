import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ServiceCards = ({ cards = defaultCards }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    padding: '20px',
    minWidth: '850px',
    width: '100%',
    background: 'inherit'
  };

  const cardStyle = {
    width: '203px',
    height: '225px',
    borderRadius: '13px',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle = {
    width: '100%',
    height: '93px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 14px'
  };

  const titleStyle = {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '28.38px',
    letterSpacing: '0.14px',
    color: '#ffffff',
    lineHeight: '24.33px'
  };

  const subtitleStyle = {
    fontFamily: 'Cambria',
    fontWeight: 400,
    fontSize: '10px',
    color: '#ffffff',
    lineHeight: '14.19px'
  };

  const iconStyle = {
    width: '62px',
    height: '62px'
  };

  const contentStyle = {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  };

  const statsStyle = {
    fontFamily: 'Cambria',
    fontSize: '10px',
    color: '#8e8e8e',
    textAlign: 'center'
  };

  const descriptionStyle = {
    fontFamily: 'Cambria',
    fontSize: '12px',
    color: '#000000',
    textAlign: 'center',
    lineHeight: '20px'
  };

  const learnMoreStyle = {
    fontFamily: 'Cambria',
    fontSize: '9.12px',
    color: '#000000',
    padding: '3px 10px',
    border: '1px solid #000000',
    borderRadius: '13.18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent'
  };

  const handleLearnMoreHover = (e) => {
    e.currentTarget.style.backgroundColor = '#f0f0f0';
  };

  const handleLearnMoreLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <Swiper>
      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <div style={{ ...headerStyle, background: card.gradient }}>
              <div>
                <div style={titleStyle}>{card.title}</div>
                <div style={subtitleStyle}>{card.subtitle}</div>
              </div>
              <img src={card.icon} alt={card.title} style={iconStyle} />
            </div>
            <div style={contentStyle}>
              <div style={statsStyle}>240k+ Appointment Booked Today</div>
              <div style={descriptionStyle}>{card.description}</div>
              <button 
                style={learnMoreStyle}
                onMouseEnter={handleLearnMoreHover}
                onMouseLeave={handleLearnMoreLeave}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </Swiper>
  );
};

const defaultCards = [
  {
    title: 'Seo',
    subtitle: 'Search Engine Optimization',
    description: 'Technical SEO | On-Page SEO | Off- Page SEO | Local SEO',
    gradient: 'linear-gradient(89.92deg, rgba(102,126,234,1) 0.07%, rgba(118,75,162,1) 99.94%)',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z89FS2I2-LlqmTRl/group.png'
  },
  {
    title: 'Social',
    subtitle: 'Media Marketing',
    description: 'Facebook | Instagram | X | Linkedin Pinterest',
    gradient: 'linear-gradient(89.92deg, rgba(75,108,183,1) 0.07%, rgba(36,59,85,1) 99.94%)',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z89FS2I2-LlqmTRl/social-e.png'
  },
  {
    title: 'PPC',
    subtitle: 'Pay Per Click',
    description: 'Search Ads | Display Ads | Demand Gen PMax Ads| Video Ads | Lead Generation',
    gradient: 'linear-gradient(89.92deg, rgba(20,30,48,1) 0.07%, rgba(36,59,85,1) 99.94%)',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z89FS2I2-LlqmTRl/pay-per.png'
  },
  {
    title: 'YouTube',
    subtitle: 'Marketing',
    description: 'Channel SEO | Skip-Non Skip able Ads | Increase Subscriber & Views',
    gradient: 'linear-gradient(89.92deg, rgba(255,0,255,1) 0.07%, rgba(255,102,0,1) 99.94%)',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z89FS2I2-LlqmTRl/youtube.png'
  }
];

export default ServiceCards;

