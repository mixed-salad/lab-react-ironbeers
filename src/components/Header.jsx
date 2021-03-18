import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <header className="header">
          <img id="header-img" src="images/home.png" alt="home-icon" />
        </header>
      </Link>
    </div>
  );
};

export default Header;
