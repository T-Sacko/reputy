// import React from 'react';
import logo from '../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="menu">
        <ul>
          <li className="menu-item">Join Firesides</li>
          <li className="menu-item">Partner with us</li>
          <li className="menu-item">team</li>
          <li className="menu-item">blog</li>
        </ul>
        <div className="buttons" style={{ display: 'flex', gap: '1rem' }}>
          <button className="login">Log in</button>
          <button className="create-acc">Create account</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
