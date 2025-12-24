import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
    const skillsData = [
        { category: "Data Analytics & BI", items: ["Alteryx", "Power BI", "Excel", "SQL", "Tableau"] },
        { category: "Programming & Development", items: ["Python", "Java", "JavaScript", "HTML / CSS", "Flutter"] },
        { category: "AI & Data", items: ["Machine Learning", "Computer Vision", "Data Cleaning & Preparation", "Data Visualization"] },
        { category: "Tools", items: ["Git & GitHub", "Microsoft Office"] },
        { category: "Soft Skills", items: ["Teamwork", "Leadership", "Project Management", "Quick Learner"] }
    ];

    return (
        <section id="skills" className="bg-white d-flex align-items-center justify-content-center py-5" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="display-4 text-center mb-5" style={{ color: '#353535', fontFamily: 'Roboto, sans-serif' }}>Skills</h2>
                <div className="row justify-content-center">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="col-md-5 col-lg-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3" style={{ color: '#353535', fontWeight: 'bold' }}>{skillGroup.category}</h5>
                                    <ul className="list-unstyled">
                                        {skillGroup.items.map((item, idx) => (
                                            <li key={idx} className="mb-2" style={{ color: '#545454' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
