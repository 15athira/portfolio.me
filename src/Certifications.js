import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function Certifications() {
    return (
        <section id="certifications" className="bg-white d-flex align-items-center justify-content-center py-5" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* Certifications Heading */}
                    <div className="col-lg-5 col-md-5 d-flex justify-content-center">
                        <h2 className="display-1 text-center" style={{ color: '#353535', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 'clamp(3rem, 6vw, 4rem)', marginLeft: '20px' }}>Certifications</h2>
                    </div>

                    {/* Vertical Divider */}
                    <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
                        <div className="divider">
                            <div className="circle"></div>
                            <div className="line"></div>
                            <div className="circle"></div>
                        </div>
                    </div>

                    {/* Certifications Content */}
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            {[
                                "Alteryx Designer Core – Data Preparation",
                                "Alteryx Designer Core – General Knowledge",
                                "Alteryx Foundational Micro-Credential",
                                "Cricket Analysis with AI (IIT Pravarthak – Swayam Plus)",
                                "Data Analytics Bootcamp (60 hours – Alteryx & Power BI)"
                            ].map((cert, index) => (
                                <li key={index} className="list-group-item border-0 d-flex align-items-center mb-2 shadow-sm rounded">
                                    <span style={{ fontSize: '1.1rem', color: '#545454' }}>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certifications;
