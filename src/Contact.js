import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
// Custom CSS for divider styling

function Contact() {
  return (
    <section id="contact" className="bg-white py-5" style={{ height: '70vh' }}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-3 text-md-left text-center mb-4">
            <h2 className="mb-4" style={{ 
                color: '#353535', 
                fontFamily: 'Roboto, sans-serif', // Roboto font
                fontWeight: 300, // Bold weight
                fontSize: '4rem', // Resize text 
              }}>Contacts</h2>
          </div>

          {/* Vertical divider */}
          <div className="col-md-1 d-flex justify-content-center">
            <div className="divider">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>

          {/* Contact information in a row */}
          <div className="col-md-8">
            <div className="row">
              {/* Email */}
              <div className="col-md-4 d-flex justify-content-center flex-column align-items-start">
                <h5 style={{ color: '#353535' }}>Email</h5>
                <p style={{ color: '#545454' }}>
                  <a href="mailto:athirarkrishnan15@gmail.com" className="text-decoration-none text-dark">athirarkrishnan15@gmail.com</a>
                </p>
              </div>
              {/* Phone */}
              <div className="col-md-4 d-flex justify-content-center flex-column align-items-start">
                <h5 style={{ color: '#353535' }}>Phone</h5>
                <p style={{ color: '#545454' }}>
                  <a href="tel:+919544734199" className="text-decoration-none text-dark">+91 9544734199</a>
                </p>
              </div>
              {/* Address */}
              <div className="col-md-4 d-flex justify-content-center flex-column align-items-start">
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

      {/* Circle-Line-Circle design at the bottom */}
      <div className="dividerh container mt-5 d-flex justify-content-center "style={{ height: '30vh' }}>
        <div className="circleh"></div>
        <div className="lineh mx-3"></div>
        <div className="circleh"></div>
      </div>
    </section>
  );
}

export default Contact;
