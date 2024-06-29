import React from 'react';
import '../style.css';
import contactBackground from '../images/contact.png';
const Contact = () => {
  return (
    <div className="footer-page" style={{ backgroundImage: `url(${contactBackground})` }}>
        <div className="footer-content">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! If you have any questions, suggestions, or feedback, feel free to get in touch. Our team is dedicated to helping you and making sure your movie-watching experience is top-notch. 
        For general inquiries or non-urgent matters, please email us at  
        <a href="mailto:sanjanagandepalli2005@gmail.com">sanjanagandepalli2005@gmail.com</a>
        . We strive to respond to all inquiries within 24-48 hours.
      </p>
      </div>
    </div>
  );
};

export default Contact;