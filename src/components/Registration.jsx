import React from 'react';
import './Registration.css';
import siteInfo from '../config/siteInfo';

const Registration = () => {
  return (
    <section id="registration" className="registration-section">
      <div className="container">
        <h2 className="section-title">Registration</h2>
        <div className="registration-placeholder">
          <div className="placeholder-content">
            <span className="placeholder-icon">📝</span>
            <h3>Registration Form Coming Soon</h3>
            <p>We're setting up our online registration system at {siteInfo.name}. In the meantime, please contact us directly to enroll.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span>📞</span>
                <div>
                  <strong>Phone:</strong>
                  <p>
                    {siteInfo.phonePrimary}
                    {" "}|{" "}
                    {siteInfo.phoneAlternate}
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <strong>Email:</strong>
                  <p><a href={`mailto:${siteInfo.email}`} className="contact-link" aria-label={`Email ${siteInfo.email}`}>{siteInfo.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <div>
                  <strong>Location:</strong>
                  <p>{siteInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
