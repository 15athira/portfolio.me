import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
// Custom CSS for divider styling

function Contact() {
  return (
    <section id="contact" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-3 col-md-4 text-md-left text-center mb-4">
            <h2 className="mb-4" style={{
              color: '#353535',
              fontFamily: 'Roboto, sans-serif', // Roboto font
              fontWeight: 300, // Bold weight
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive text
            }}>Contacts</h2>
          </div>

          {/* Vertical divider */}
          <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* Contact information in a row */}
          <div className="col-lg-8 col-md-7">
            <div className="row">
              {/* Email */}
              <div className="col-lg-4 col-12 d-flex justify-content-center flex-column align-items-start mb-3">
                <h5 style={{ color: '#353535' }}>Email</h5>
                <p style={{ color: '#545454', wordBreak: 'break-all' }}>
                  <a href="mailto:athirarkrishnan15@gmail.com" className="text-decoration-none text-dark">athirarkrishnan15@gmail.com</a>
                </p>
              </div>
              
              {/* Address */}
              <div className="col-lg-4 col-12 d-flex justify-content-center flex-column align-items-start mb-3">
                <h5 style={{ color: '#353535' }}>Address</h5>
                <p style={{ color: '#545454' }}>
                  Mangalasserri, Ariyallur,<br />
                  Malappuram, Kerala, India
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
