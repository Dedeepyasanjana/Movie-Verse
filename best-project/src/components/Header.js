import React from 'react';
import '../style.css';

const Header = ({ onSearch, onNavigate }) => {
  return (
    <header>
      <div className="topHeader">
        <h2>Top Rated <span>Movies</span></h2>
        <div>
          <input type="text" id="query" placeholder="Enter Movie name" />
          <button onClick={onSearch}>Search</button>
        </div>
        <h3 id="tv"><button onClick={() => onNavigate('tv')}>Tv Shows</button></h3>
        <i className="fa-solid fa-bars toggle"></i>
      </div>
      <nav className="bottomHeader">
        <ul>
          <li>
            <button onClick={() => onNavigate('popular')}>Popular Movies</button>
          </li>
          <li>
            <button onClick={() => onNavigate('new')}>New Movies</button>
          </li>
          <li>
            <button onClick={() => onNavigate('upcoming')}>Upcoming Movies</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
