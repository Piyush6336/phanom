import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const BlogPost = ({ 
  imageUrl = 'https://dashboard.codeparrot.ai/api/image/Z89ApOd_tb-16vEt/image-pl.png',
  title = 'Smart UI/UX Design',
//   category = 'News',
  description = 'User experience is at the heart of any successful application or platform. Smart UI/UX design not only boosts user engagement but also increases conversion rates.',
  views = '1k+',
  comments = '9',
  timeAgo = '5 month ago'
}) => {
  return (
    <Card style={{
      width: '100%',
      maxWidth: '364px',
      minWidth: '300px',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      padding: '16px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
      }}>
        <img 
          src={imageUrl}
          alt="Blog post"
          style={{
            width: '100%',
            height: '197px',
            objectFit: 'cover'
          }}
        />
        <Typography variant="body2" style={{
          color: '#6c5fd4',
          fontFamily: 'Cambria',
          fontSize: '18px',
          lineHeight: '28px'
        }}>
          {/* {category} */}
        </Typography>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%'
      }}>
        <Typography variant="h5" style={{
          margin: 0,
          fontFamily: 'Poppins',
          fontSize: '28px',
          fontWeight: 500,
          lineHeight: '36px',
          letterSpacing: '0.14px',
          color: '#252525'
        }}>
          {title}
        </Typography>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          width: '100%',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <IconButton>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z89ApOd_tb-16vEt/communic-3.png"
                alt="Comments"
                style={{
                  width: '24px',
                  height: '24px'
                }}
              />
            </IconButton>
            <Typography variant="body2" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '16px',
              fontWeight: 500,
              color: '#252525',
              lineHeight: '135%'
            }}>
              {comments}
            </Typography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <IconButton>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z89ApOd_tb-16vEt/edit-s-3.png"
                alt="Views"
                style={{
                  width: '24px',
                  height: '24px'
                }}
              />
            </IconButton>
            <Typography variant="body2" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '16px',
              fontWeight: 500,
              color: '#252525',
              lineHeight: '135%'
            }}>
              {views}
            </Typography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <IconButton>
              <img 
                src="https://dashboard.codeparrot.ai/api/image/Z89ApOd_tb-16vEt/vector.png"
                alt="Time"
                style={{
                  width: '16px',
                  height: '18px'
                }}
              />
            </IconButton>
            <Typography variant="body2" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '16px',
              fontWeight: 500,
              color: '#252525',
              lineHeight: '135%'
            }}>
              {timeAgo}
            </Typography>
          </div>
        </div>

        <Typography variant="body1" style={{
          margin: 0,
          fontFamily: 'Cambria',
          fontSize: '18px',
          lineHeight: '28px',
          color: '#000000'
        }}>
          {description}
        </Typography>
      </div>
    </Card>
  );
};

export default BlogPost;

