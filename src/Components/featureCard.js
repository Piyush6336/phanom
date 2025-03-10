import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const FeatureCards = () => {
  const features = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/ant-desi.png",
      title: "Holistic Solutions",
      description: "We provide end-to-end services that address all aspects of your needs, ensuring seamless integration and effective results."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/si-user.png",
      title: "Client-Centric Approach",
      description: "Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/come-up.png",
      title: "Innovative Thinking",
      description: "Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing quality, innovative solutions, and outstanding results in every project we undertake."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/ri-team.png",
      title: "Expert Team",
      description: "Our team consists of highly skilled professionals with diverse expertise, dedicated to delivering the highest quality of work and consistently exceeding expectations."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/grommet.png",
      title: "Cutting-Edge Technology",
      description: "We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/fluent-m.png",
      title: "Commitment to Excellence",
      description: "Our dedication to quality and continuous improvement ensures outstanding results and long-term client satisfaction."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/teacher.png",
      title: "Customized Strategies",
      description: "We understand that every client is unique, so we design personalized strategies to meet specific goals and challenges."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z885Qud_tb-16vEf/arcticon.png",
      title: "Sustainable Practices",
      description: "We prioritize solutions that are not only effective but also environmentally and socially responsible."
    }
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '10px',
    width: '100%',
    maxWidth: '641px',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    minHeight: '196px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '17px'
  };

  const iconContainerStyle = {
    width: '84px',
    height: '87px',
    backgroundColor: '#6c5fd4',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '17px'
  };

  const iconStyle = {
    width: '52px',
    height: '52px'
  };

  const contentStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  return (
    <div style={containerStyle}>
      {features.map((feature, index) => (
        <Card key={index} style={cardStyle}>
          <div style={iconContainerStyle}>
            <img src={feature.icon} alt={feature.title} style={iconStyle} />
          </div>
          <div style={contentStyle}>
            <Typography variant="h5" component="h3" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>
              {feature.title}
            </Typography>
            <Typography variant="body1" style={{ fontFamily: 'Cambria', color: '#525252' }}>
              {feature.description}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;

