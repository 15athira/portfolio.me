import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Education() {
  return (
    <section id="education" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 text-md-left text-center mb-4">
            <h2 className="mb-4" style={{
              color: '#353535',
              fontFamily: 'Roboto, sans-serif', // Roboto font
              fontWeight: 300, // Font weight
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive text
            }}>Education</h2>
          </div>

          {/* Vertical divider */}
          <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* Education information in a column */}
          <div className="col-lg-8 col-md-7">
            <div className="row">
              {/* Education Item */}
              <div className="col-md-12 mb-4">
                <h5 style={{ color: '#353535' }}>Bachelor of Science in Computer Science</h5>
                <p style={{ color: '#545454' }}>
                  <strong>Calicut University</strong><br />
                  Graduation Year: 2024<br />
                  College:Farook College(Autonomous),Kozhikode
                </p>
              </div>
              {/* Education Item */}
              <div className="col-md-12 mb-4">
                <h5 style={{ color: '#353535' }}>Master of Science in Computer Science</h5>
                <p style={{ color: '#545454' }}>
                  <strong>Calicut University</strong><br />
                  On Going<br />
                  College:Farook College(Autonomous),Kozhikode
                </p>
              </div>
              {/* Add more education items as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
