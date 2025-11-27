import React from 'react';
import './Gallery.css';
import siteInfo from '../config/siteInfo';

const Gallery = () => {
  const photos = [
    { id: 1, title: 'Picture 1', color: '#FF6B6B' },
    { id: 2, title: 'Picture 2', color: '#4ECDC4' },
    { id: 3, title: 'Picture 3', color: '#45B7D1' },
    { id: 4, title: 'Picture 4', color: '#FFA07A' },
    { id: 5, title: 'Picture 5', color: '#98D8C8' },
    { id: 6, title: 'Picture 6', color: '#F7B731' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">{siteInfo.name} Gallery</h2>
        <p className="section-subtitle">Moments from our classes and student achievements</p>
        
        {/* Photo Gallery */}
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <div 
                className="gallery-placeholder" 
                style={{ backgroundColor: photo.color }}
              >
                <span className="placeholder-text">{photo.title}</span>
              </div>
              <div className="gallery-overlay">
                <p>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <h3 className="subsection-title">Performance Videos</h3>
        <div className="video-grid">
          <div className="video-item">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/OobR681KUTo" 
                title="Just Dance" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Just Dance Performance</p>
          </div>
          <div className="video-item">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/AV1biKT426I" 
                title="Gangnam Style Just Dance" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Gangnam Style - Just Dance</p>
          </div>
          <div className="video-item">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/6LjLdctwN7k" 
                title="Dhimra Ki Ne Fek Dao Jaal" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Dhimra Ki Ne Fek Dao Jaal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
