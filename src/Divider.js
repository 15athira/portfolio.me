import React from 'react';
import './Header.css'; // Reusing existing CSS or move to Divider.css if preferred

function Divider() {
  return (
    <div className="dividerh container my-4 d-flex justify-content-center">
      <div className="circleh"></div>
      <div className="lineh mx-3"></div>
      <div className="circleh"></div>
    </div>
  );
}

export default Divider;
