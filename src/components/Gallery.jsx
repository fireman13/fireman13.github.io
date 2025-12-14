import React from 'react';
import './Gallery.css';
import siteInfo from '../config/siteInfo';

// Import gallery images
import img1 from '../assets/IMG-20251127-WA0005.jpg';
import img2 from '../assets/IMG-20251128-WA0004.jpg';
import img3 from '../assets/IMG-20251128-WA0005.jpg';
import img4 from '../assets/IMG-20251128-WA0008.jpg';
import img5 from '../assets/IMG-20251128-WA0009.jpg';
import img6 from '../assets/IMG-20251128-WA0011.jpg';

const Gallery = () => {
  const photos = [
    { id: 1, title: 'Dance Performance 1', image: img1 },
    { id: 2, title: 'Dance Performance 2', image: img2 },
    { id: 3, title: 'Dance Performance 3', image: img3 },
    { id: 4, title: 'Dance Performance 4', image: img4 },
    { id: 5, title: 'Dance Performance 5', image: img5 },
    { id: 6, title: 'Dance Performance 6', image: img6 },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Sweet Steps's Galleria</h2>
        <p className="section-subtitle">Moments from our classes and student achievements</p>
        
        {/* Photo Gallery */}
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <img 
                src={photo.image} 
                alt={photo.title} 
                className="gallery-image"
              />
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
                src="https://drive.google.com/file/d/1ehS58ghYp5nMZUMUR6U1-zztyWR-PzZ3/preview" 
                title="Performance Video 1" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Performance Video 1</p>
          </div>
          <div className="video-item">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://drive.google.com/file/d/1wCM4xluCsb54YdyxXV1lITlh2mrJyA6V/preview" 
                title="Performance Video 2" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Performance Video 2</p>
          </div>
          <div className="video-item">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://drive.google.com/file/d/1OIlG8kJBI1eTnohTcLsAW2SV4uR2KHBW/preview" 
                title="Performance Video 3" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Performance Video 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
