import React from 'react';
import './Footer.css';
import siteInfo from '../config/siteInfo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
