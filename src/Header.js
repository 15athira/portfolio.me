import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
import './Header.css'; // Import custom CSS for the circle and line design

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top shadow-sm" >
        <div className="container">
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item px-3">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#certifications">Certifications</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
