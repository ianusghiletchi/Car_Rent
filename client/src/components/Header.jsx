import React, { useState } from 'react';
import '../scss/header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../imgs/logo.jpg';

function Header({mainPage = true}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='header-main-div'> 
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ffcd0e', fontFamily: 'Roboto, sans-serif'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className='logo' alt="Company Logo"/>
          </Link>
          <button className="navbar-toggler ms-auto" type="button" onClick={toggleNav} aria-expanded={isNavOpen ? 'true' : 'false'}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <div className="navbar-nav d-flex justify-content-center" style={{flex: '1'}}>
              {mainPage && (
                <div className="centered-links">
                  <HashLink className="nav-link me-3 hoverable" smooth to="#how-it-works">How It Works</HashLink>
                  <HashLink className="nav-link me-3 hoverable" to="#rental-deals">Rental Deals</HashLink>
                  <HashLink className="nav-link me-3 hoverable" to="#why-chose-us">Why Choose Us</HashLink>
                  <HashLink className="nav-link me-3 hoverable" to="#reviews">Reviews</HashLink>
                  <HashLink className="nav-link me-3 hoverable" to="#contact-us">Contact Us</HashLink>
                </div>
              )}
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link hoverable" to="/PortalPage">Sign Up</Link>
              <Link className="nav-link hoverable" to="/LogIn">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
    </div> 
  );
}

export default Header;
