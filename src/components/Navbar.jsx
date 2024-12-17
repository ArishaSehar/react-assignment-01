import React from 'react';
import './Navbar.css'; // Component-specific styles

export default function Navbar() {
  return (
    <div className="container navigation-parent">
      <nav className="navbar navbar-expand-lg navi">
        <div className="container">
          {/* Logo for mobile view */}
          <a className="navbar-brand d-lg-none" href="#">
            <img src="./assets/tours-and-travels-png.png" alt="Logo" />
          </a>
          {/* Toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars" style={{ color: '#ffffff' }}></i>
            </span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PLACES
                </a>
              </li>
              {/* Logo in the center */}
              <li className="nav-item d-none d-lg-block">
                <a className="navbar-brand" href="#">
                  <img src="./assets/tours-and-travels-png.png" alt="Logo" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BOOK ONLINE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BANK DETAIL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
