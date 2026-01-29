import React from 'react';

const PortfolioNavbar = ({ toggleTheme, theme }) => {
    return (
        <header className="pf-header">
            <div className="pf-logo">Harsh<span>.</span></div>

            <nav className="pf-nav">
                <a href="#home" className="active">Home</a>
                <a href="#about">About me</a>
                <a href="#services">Services</a>
                <a href="#work">My Work</a>
                <a href="#contact">Contact me</a>
            </nav>

            <div className="pf-header-actions">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀'}
                </button>
                <button className="btn-contact-small" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact ↗</button>
            </div>
        </header>
    );
};

export default PortfolioNavbar;
