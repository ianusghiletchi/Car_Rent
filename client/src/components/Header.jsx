import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div> 
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ffcd0e', fontFamily: 'Roboto, sans-serif'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-center" style={{flex: '1'}}>
              <HashLink className="nav-link me-3" smooth to="#how-it-works">How It Works</HashLink>
              <HashLink className="nav-link me-3" to="#rental-deals">Rental Deals</HashLink>
              <HashLink className="nav-link me-3" to="#why-chose-us">Why Choose Us</HashLink>
              <HashLink className="nav-link me-3" to="#reviews">Reviews</HashLink>
              <HashLink className="nav-link me-3" to="#contact-us">Contact Us</HashLink>
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/PortalPage">Sign Up</Link>
              <Link className="nav-link" to="/LogIn">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
    </div> 
  );
}

export default Header;
