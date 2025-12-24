import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    const projects = [
        {
            title: "newsPod – AI-Based News Summarizer",
            builtAt: "Tink-Her-Hack (Women-only Hackathon)",
            description: "Developed a web application that collects news from multiple sources, summarizes articles using AI, and converts them into audio for hands-free consumption. Integrated text summarization and text-to-speech APIs and analyzed content trends from processed news data.",
            tags: ["HTML", "JavaScript", "Node.js", "AI APIs"]
        },
        {
            title: "EcoSweep – Plastic Cleanup Tracker App",
            builtAt: "TechPulse Hackathon (ULCCS)",
            description: "A mobile application to track plastic waste collection, visualize pollution hotspots, and manage rewards. Designed user interfaces for data logging, photo uploads, and collaborated on testing and feature updates.",
            tags: ["Flutter", "Firebase"]
        },
        {
            title: "NextBus – Bus Management System App",
            description: "Developed a mobile app to improve bus travel experience for passengers and conductors. Handled frontend development, documentation, and milestone management while collaborating in a team environment.",
            tags: ["Flutter", "Firebase"]
        }
    ];

    return (
        <section id="projects" className="bg-white d-flex align-items-center justify-content-center py-5" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="display-4 text-center mb-5" style={{ color: '#353535', fontFamily: 'Roboto, sans-serif' }}>Projects</h2>
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: '#353535', fontWeight: 'bold' }}>{project.title}</h5>
                                    {project.builtAt && <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '0.9rem' }}>Built at: {project.builtAt}</h6>}
                                    <p className="card-text mt-3" style={{ color: '#545454', textAlign: 'justify' }}>{project.description}</p>
                                    <div className="mt-3">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="badge bg-light text-dark me-2 border mb-1">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
