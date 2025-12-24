import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function Contact() {
  return (
    <section id="contact" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Contact Heading */}
          <div className="col-lg-5 col-md-5 d-flex justify-content-center">
            <h2 className="display-1 text-center" style={{ color: '#353535', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 'clamp(3rem, 6vw, 4rem)', marginLeft: '20px' }}>Contacts</h2>
          </div>

          {/* Vertical Divider */}
          <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="col-md-6">
            <div className="row text-center text-md-start">
              {/* Email */}
              <div className="col-12 mb-4">
                <h5 style={{ color: '#353535', fontWeight: 'bold' }}>📧 Email</h5>
                <a href="mailto:athirarkrishnan15@gmail.com" className="text-decoration-none" style={{ color: '#545454' }}>
                  athirarkrishnan15@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="col-12 mb-4">
                <h5 style={{ color: '#353535', fontWeight: 'bold' }}>🔗 LinkedIn</h5>
                <a href="https://linkedin.com/in/athira-rm" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#545454' }}>
                  linkedin.com/in/athira-rm
                </a>
              </div>

              {/* GitHub */}
              <div className="col-12 mb-4">
                <h5 style={{ color: '#353535', fontWeight: 'bold' }}>💻 GitHub</h5>
                <a href="https://github.com/15athira" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#545454' }}>
                  github.com/15athira
                </a>
              </div>

              {/* Location */}
              <div className="col-12 mb-4">
                <h5 style={{ color: '#353535', fontWeight: 'bold' }}>📍 Location</h5>
                <p style={{ color: '#545454', margin: 0 }}>
                  Malappuram, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
