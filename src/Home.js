import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

function Home() {
  return (
    <section id="home" className="bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
            <h1 style={{ color: '#353535' }}>Athira Radhakrishnan M</h1>
            <h2 style={{ color: '#545454', fontSize: '1.5rem', marginTop: '0.5rem' }}>Aspiring Data Analyst | MSc Computer Science Student</h2>
            <h4 style={{ color: '#545454', fontSize: '1.2rem', marginTop: '0.5rem' }}>Alteryx Core Certified | Power BI Learner</h4>
            <p style={{ color: '#545454', marginTop: '0.5rem', fontWeight: '500' }}>Skilled in Python, Excel, Java</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              alt="Athira Radhakrishnan M"
              src={process.env.PUBLIC_URL + '/photo_6289731790130238007_y.jpg'}
              className="img-fluid rounded-circle shadow"
              style={{ width: '250px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
