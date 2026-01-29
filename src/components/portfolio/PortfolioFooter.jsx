import React from 'react';

const PortfolioFooter = () => {
    return (
        <footer className="pf-footer">
            <div className="footer-content">
                <div className="footer-column branding">
                    <div className="footer-logo">Harsh<span>.</span></div>
                    <p className="footer-tagline">Building digital experiences that matter. specialized in React, Node.js and modern web technologies.</p>
                    <a href="mailto:harsing102@gmail.com" className="footer-email-link">harsing102@gmail.com</a>
                </div>

                <div className="footer-column links">
                    <h4>Navigation</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-column social">
                    <h4>Connect</h4>
                    <div className="social-links-col">
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Harsh. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <span>•</span>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;
