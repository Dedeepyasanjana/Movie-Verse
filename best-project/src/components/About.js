import React from 'react';
import '../style.css';
import aboutBackground from '../images/about.png';

const About = () => {
  return (
    <div className="footer-page" style={{ backgroundImage: `url(${aboutBackground})` }}>
        <div className="footer-content">
      <h1>About Us</h1>
      <p>
        This website is a free streaming service supported by ads, offering great movies and TV shows from all over the world.
        Whether you want to uncover ancient secrets, feel the rush of exciting action, relive old TV favorites, or laugh with popular comedy stars, we've got it all covered.
        Explore all of our content!!
      </p>
      </div>
    </div>
  );
};

export default About;
