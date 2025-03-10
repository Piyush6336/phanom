import React from 'react';
import Typography from '@mui/material/Typography';

const ProfileSection = ({ 
  name = "Adarsh",
  role = "Phanom Guide",
  // imageUrl = "https://dashboard.codeparrot.ai/api/image/Z882CGI2-LlqmTRW/unsplash.png"
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      minWidth: '300px',
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'inherit'
    }}>
      <div style={{
        width: '100%',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* <img 
          // src={imageUrl}
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
        /> */}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
       
        gap: '8px'
      }}>
        <Typography variant="h4" component="h1" style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.18px',
          lineHeight: '44px',
          color: '#000000'
        }}>
          {name}
        </Typography>
        <Typography variant="body1" style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '28px',
          color: '#000000'
        }}>
          {role}
        </Typography>
      </div>
    </div>
  );
};

export default ProfileSection;
