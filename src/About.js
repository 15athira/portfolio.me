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
            <p className="lead text-center" style={{ color: '#545454', fontFamily: 'Roboto, sans-serif', marginRight: '20px', textAlign: 'justify' }}>
              Hello! I'm Athira, a passionate developer with a love for creating intuitive, dynamic user experiences.
              I enjoy bringing ideas to life through clean, efficient code. I specialize in React, JavaScript, HTML & CSS
              and I'm always eager to learn new technologies and improve my skills. When I'm not coding, I enjoy sports,
              movies, or music.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
