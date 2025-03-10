import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const MissionSection = () => {
  const cardData = [
    {
      number: "01",
      title: "Innovate",
      description: "Harnessing the power of technology to bring fresh, groundbreaking ideas to life. Stay ahead with our visionary approach to problem-solving and growth."
    },
    {
      number: "02",
      title: "Create",
      description: "Designing and developing solutions that drive progress and meet unique challenges. Build the future with tailored solutions that redefine possibilities."
    },
    {
      number: "03",
      title: "Dominate",
      description: "Empowering businesses to lead their industries with robust, scalable IT strategies. Achieve unmatched success with our expertise guiding your digital journey."
    }
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '50px',
    },
    titleSection: {
      textAlign: 'center',
      maxWidth: '896px',
    },
    mainTitle: {
      fontSize: '36px',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      lineHeight: '44px',
      letterSpacing: '0.18px',
      margin: '0 0 36px 0',
    },
    mission: {
      color: '#000',
      background: 'linear-gradient(90deg, #7c14fd 0%, #FF00FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '18px',
      fontFamily: 'Cambria, serif',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#000000',
      margin: 0,
    },
    progressLine: {
      width: '881px',
      height: '2px',
      background: 'linear-gradient(90deg, #7c14fd 0%, #FF00FF 100%)',
      position: 'relative',
      margin: '34px 0',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#7c14fd',
      position: 'absolute',
      top: '-4px',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      width: '100%',
    },
    card: {
      width: '378px',
      position: 'relative',
      padding: '80px 20px',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    cardNumber: {
      position: 'absolute',
      top: '-40px',
      fontSize: '134.47px',
      fontFamily: 'Satoshi, sans-serif',
      fontWeight: 700,
      color: '#7c14fd',
      opacity: 0.05,
      lineHeight: '45.2%',
    },
    cardTitle: {
      fontSize: '28px',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.14px',
      lineHeight: '36px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    cardDescription: {
      fontSize: '18px',
      fontFamily: 'Cambria, serif',
      lineHeight: '28px',
      textAlign: 'center',
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        <Typography variant="h1" style={styles.mainTitle}>
          Our <span style={styles.mission}>Mission</span>
        </Typography>
        <Typography variant="body1" style={styles.subtitle}>
          Empowering businesses with innovation, crafting bespoke solutions, and driving industry leadership.
        </Typography>
      </div>

      <div style={styles.progressLine}>
        <span style={{...styles.dot, left: '0%'}}></span>
        <span style={{...styles.dot, left: '50%'}}></span>
        <span style={{...styles.dot, right: '0%'}}></span>
      </div>

      <div style={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <Card key={index} style={styles.card}>
            <div style={styles.cardNumber}>{card.number}</div>
            <Typography variant="h2" style={styles.cardTitle}>{card.title}</Typography>
            <Typography variant="body2" style={styles.cardDescription}>{card.description}</Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissionSection;

