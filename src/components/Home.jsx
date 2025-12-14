import React from 'react';
import './Home.css';
import siteInfo from '../config/siteInfo';

const Home = () => {
  const scrollToClasses = () => {
    const element = document.getElementById('classes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to</h1>
          <h1 className="hero-title site-name">{siteInfo.name}</h1>
          <h2 className="dancer-name">Led by Tutor - {siteInfo.dancerName}</h2>
          <p className="hero-subtitle">{siteInfo.about}</p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">💃</span>
              <h3>Expert Instruction</h3>
              <p>Learn from experienced professional</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <h3>Proven Results</h3>
              <p>Award-winning students</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎭</span>
              <h3>All Levels</h3>
              <p>Covering every basic for beginners</p>
            </div>
          </div>
          <button onClick={scrollToClasses} className="cta-button">
            Explore Our Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
