import React from 'react';
import Typography from '@mui/material/Typography';

const BlogHeader = ({ title = "Our Blog and Articles", description = "Take a look at our Company's Blog Series or read some professional gardening insights and news." }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '36px',
    padding: '20px 0'
  };

  return (
    <header style={containerStyle}>
      <Typography variant="h1" component="h1" style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: '44px',
        letterSpacing: '0.18px',
        color: '#252525',
        margin: 0,
        textAlign: 'center'
      }}>
        {title.split(' ').map((word, index) => (
          <span key={index} style={{ color: word === 'Blog' || word === 'Articles' ? '#6366F1' : '#252525' }}>
            {word} 
          </span>
        ))}
      </Typography>
      <Typography variant="body1" component="p" style={{
        fontFamily: 'Cambria, serif',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '28px',
        color: '#252525',
        margin: 0,
        textAlign: 'center'
      }}>
        {description}
      </Typography>
    </header>
  );
};

export default BlogHeader;
