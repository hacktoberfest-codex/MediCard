import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link style={{ color: '#9155fd' }} to="/">
          MediCard
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <Link to="http://localhost:3000/pages/login/" style={{textDecoration: 'none'}} >
            Patient
          </Link>
        </li>
        <li>
          <Link to="http://localhost:8000/">
            Doctors
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <a href='http://localhost:3000/' >
            <li>
              Patient
            </li>
          </a>
          <li>
            <a href='http://localhost:8000/' style={{ cursur: 'pointer' }} >
              Doctors
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
