import React from 'react';
import '../style.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="copyright">Copyright &copy; All Rights Reserved</div>
      <div id="lastFooter">
        <ul>
          <li>
            <button onClick={() => onNavigate('about')}>About Us</button>
          </li>
          <li>
            <button onClick={() => onNavigate('contact')}>Contact Us</button>
          </li>
          <li>
            <button onClick={() => onNavigate('disclaimer')}>Disclaimer</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;