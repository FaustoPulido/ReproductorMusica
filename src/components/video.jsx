import React from 'react';

export default function Video({ videoId }) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className='video-container' style={{ width: '100%', height: '400px' }}>
      <iframe 
        width="100%" 
        height="100%" 
        src={videoUrl} 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

