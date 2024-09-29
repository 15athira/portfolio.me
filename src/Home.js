import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

function Home() {
  return (
    <section id="home" className="bg-white d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 style={{ color: '#353535', marginLeft: '10rem' }}>Athira Radhakrishnan M</h1> {/* Adjust margin as needed */}
            <p style={{ color: '#545454', marginLeft: '10rem' }}>A passionate developer!</p> {/* Adjust margin as needed */}
          </div>
          <div className="col-md-4 text-center">
            <img
              alt="error"
              src={process.env.PUBLIC_URL + '/photo_6289731790130238007_y.jpg'}
              className="img-fluid rounded-circle"
              style={{ width: '250px', marginRight:'20rem'}}
            />
          </div>
        </div>
        
        {/* Divider section */}
        <div className="dividerh container mt-5 d-flex justify-content-center">
          <div className="circleh"></div>
          <div className="lineh mx-3"></div>
          <div className="circleh"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
