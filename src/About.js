import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
import './About.css'; // Import custom CSS for the vertical divider

function About() {
  return (
    <section id="about" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center" >
          {/* About Me Heading */}
          <div className="col-lg-5 col-md-5 d-flex justify-content-center">
            <h2
              className="display-1 text-center"
              style={{
                color: '#353535',
                fontFamily: 'Roboto, sans-serif', // Roboto font
                fontWeight: 300, // Font weight
                fontSize: 'clamp(3rem, 6vw, 4rem)', // Responsive font size
                marginLeft: '20px'
              }}
            >
              About Me
            </h2>
          </div>

          {/* Vertical Divider with Circles */}
          <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center ">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* About Me Text */}
          <div className="col-md-6 d-flex justify-content-center">
            <p className="lead" style={{ color: '#545454', fontFamily: 'Roboto, sans-serif', marginRight: '20px', textAlign: 'justify' }}>
              I am a final-year MSc Computer Science student at Farook College (Autonomous), Kozhikode, with a strong interest in Data Analytics, Visualization, and AI-based applications.
              <br /><br />
              My academic journey has helped me build a solid foundation in programming, algorithms, and software engineering, while add-on courses and certifications have strengthened my practical skills in Alteryx, Power BI, Excel, and Python.
              <br /><br />
              I have worked on AI-based, data analytics, and mobile application projects, and I enjoy applying technology to solve real-world problems. I am currently seeking internship, project, or research opportunities where I can contribute and grow as a Data Analyst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
