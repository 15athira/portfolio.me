import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
import './Header.css'; // Import custom CSS for the circle and line design

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white" >
        <div className="container">
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item px-3">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Circle-Line-Circle design below navbar */}
      <div className="dividerh container my-4 d-flex justify-content-center">
        <div className="circleh"></div>
        <div className="lineh mx-3"></div>
        <div className="circleh"></div>
      </div>
    </>
  );
}

export default Header;
