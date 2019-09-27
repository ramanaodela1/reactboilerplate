import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import BannerImg from './banner.jpg';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/features">Features</HeaderLink>
      </NavBar>
      <a href="https://www.reactboilerplate.com/">
        <img src={BannerImg} alt="react-boilerplate - Logo" />
      </a>
    </div>
  );
}

export default Header;
