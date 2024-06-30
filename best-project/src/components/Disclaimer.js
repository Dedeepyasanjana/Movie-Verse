import React from 'react';
import '../style.css';
import disclaimerBackground from '../images/disclaimer.png';
const Disclaimer = () => {
  return (
    <div className="footer-page" style={{ backgroundImage: `url(${disclaimerBackground})` }}>
        <div className="footer-content">
      <h1>Disclaimer</h1>
      <p>
        Welcome to our movies Website . By accessing and using this Website,
        you acknowledge and agree to the following: While we aim to provide precise and current information, the content here is meant for general informational purposes only.
        We cannot ensure the accuracy, completeness, or reliability of any content on this Website.
        Any use of this information is entirely at your own risk.
      </p>
      </div>
    </div>
  );
};

export default Disclaimer;