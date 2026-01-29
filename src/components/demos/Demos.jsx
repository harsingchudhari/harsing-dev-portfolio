import React from 'react';
import './Demos.css';

const Demos = ({ onBack, theme }) => {
    const works = [
        {
            category: "Frontend project",
            type: "Web Design",
            title: "E-Commerce Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            desc: "A comprehensive dashboard for managing e-commerce operations, featuring real-time analytics and inventory management."
        },
        {
            category: "Geo based app",
            type: "Mobile App",
            title: "City Navigator",
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop",
            desc: "A location-aware application providing real-time navigation and point-of-interest discovery for urban environments."
        },
        {
            category: "Photography site",
            type: "Web Design",
            title: "Lens & Light",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
            desc: "A sleek, minimalist photography portfolio designed to showcase high-resolution imagery with zero distractions."
        },
        {
            category: "UI/UX designing",
            type: "UI/UX Design",
            title: "Finance App Clean UI",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
            desc: "A clean and modern UI concept for a mobile banking application, focusing on accessibility and ease of use."
        }
    ];

    return (
        <div className="demos-page" data-theme={theme}>
            <nav className="demos-nav">
                <div className="pf-logo">Harsh<span>.</span></div>
                <button className="btn-back-portfolio" onClick={onBack}>
                    ← Back to Portfolio
                </button>
            </nav>

            <header className="demos-header">
                <span className="pf-subheading">Showcase</span>
                <h1 className="pf-heading">All Project Demos</h1>
                <p>A collection of my latest interactive works and experiments.</p>
            </header>

            <div className="demos-grid">
                {works.map((work, index) => (
                    <div className="demo-card" key={index}>
                        <div className="demo-card-image" style={{ backgroundImage: `url(${work.image})` }}>
                            <div className="demo-card-overlay">
                                <button className="btn-view-live">Launch Demo ↗</button>
                            </div>
                        </div>
                        <div className="demo-card-content">
                            <span className="demo-category">{work.category} • {work.type}</span>
                            <h3 className="demo-title">{work.title}</h3>
                            <p className="demo-desc">{work.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="demos-footer">
                <p>© 2026 Harsh. Built with passion and code.</p>
            </footer>
        </div>
    );
};

export default Demos;
