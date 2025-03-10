import React from 'react';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import picture from "../assets/Picture.png"
import picture1 from "../assets/Picture1.png"
import picture2 from "../assets/Picture2.png"
const BlogLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '1200px', margin: '0 auto', padding: '20px 0' }}>
      <BlogHeader />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
        <BlogPost 
          imageUrl={picture}
          title="Future of IT Solutions" 
        //   category="Insight" 
          views="400+" 
          comments="3" 
          timeAgo="1 month ago"
        />
        <BlogPost 
          imageUrl={picture1}
          title="Vital for Business Growth" 
        //   category="Blog #14" 
          views="6,5k+" 
          comments="18" 
          timeAgo="2 months ago"
        />
        <BlogPost 
          imageUrl={picture2} 
          title="Smart UI/UX Design" 
        //   category="News" 
          views="1k+" 
          comments="9" 
          timeAgo="5 month ago"
        />
      </div>
    </div>
  );
};

export default BlogLayout;

