import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> 
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ffcd0e'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/features">Features</Link>
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/LogIn">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
    </div> 
  );
}

export default Header;