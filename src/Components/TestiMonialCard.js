import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const TestimonialCard = ({ imageUrl, name, title }) => {
  const cardStyle = {
    width: '100%',
    maxWidth: '276px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderRadius: '14px',
    overflow: 'hidden',
    backgroundColor: '#989692',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '0',
    paddingBottom: '150%',
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const playButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'inherit',
  };

  const nameStyle = {
    fontFamily: 'Cambria',
    fontWeight: 700,
    fontSize: '23.72px',
    lineHeight: '27.67px',
    color: '#FFFFFF',
    marginBottom: '4px',
  };

  const titleStyle = {
    fontFamily: 'Cambria',
    fontWeight: 400,
    fontSize: '17.79px',
    lineHeight: '27.67px',
    color: '#FFFFFF',
  };

  const handlePlayClick = () => {
    // Handle video play functionality
    console.log('Play video');
  };

  return (
    <Card style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt={name} style={imageStyle} />
        <IconButton style={playButtonStyle} onClick={handlePlayClick}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/icon-par.png" alt="Play" />
        </IconButton>
      </div>
      <div style={textContainerStyle}>
        <Typography style={nameStyle}>{name}</Typography>
        <Typography style={titleStyle}>{title}</Typography>
      </div>
    </Card>
  );
};

TestimonialCard.defaultProps = {
  imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z88_T-d_tb-16vEs/unsplash.png',
  name: 'Name',
  title: 'Title'
};

export default TestimonialCard;

