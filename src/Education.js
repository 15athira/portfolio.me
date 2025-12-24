import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Ensure we use the same CSS for the divider if it's there, usually in About.css or App.css. Assuming About.css has .divider

function Education() {
  return (
    <section id="education" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Education Heading - Matching About Section Layout */}
          <div className="col-lg-5 col-md-5 d-flex justify-content-center">
            <h2
              className="display-1 text-center"
              style={{
                color: '#353535',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(3rem, 6vw, 4rem)',
                marginLeft: '20px'
              }}
            >
              Education
            </h2>
          </div>

          {/* Vertical Divider - Matching About Section Layout */}
          <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* Education Information - Matching About Section Content Column */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            {/* Education Item 1 */}
            <div className="mb-4">
              <h5 style={{ color: '#353535', fontWeight: 'bold' }}>Master of Science in Computer Science</h5>
              <p style={{ color: '#545454', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                <strong>Farook College (Autonomous), Kozhikode</strong><br />
                Ongoing<br />
                University: Calicut University
              </p>
            </div>

            {/* Education Item 2 */}
            <div className="mb-4">
              <h5 style={{ color: '#353535', fontWeight: 'bold' }}>Bachelor of Science in Computer Science</h5>
              <p style={{ color: '#545454', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                <strong>Farook College (Autonomous), Kozhikode</strong><br />
                Graduation Year: 2024<br />
                University: Calicut University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
