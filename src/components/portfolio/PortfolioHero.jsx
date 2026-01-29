import React from 'react';

const PortfolioHero = ({ handleResumeClick }) => {
    return (
        <section className="pf-hero" id="home">
            <img src="./profile.png" alt="Harsh" className="hero-avatar" />
            <div className="hero-greeting">Hi! I'm <span className="animated-name">Harsh</span> <span className="wave-emoji">👋🏼</span></div>
            <h1 className="hero-title pf-heading">
                full stack  developer <br /> based in <span className="animated-surat">Surat</span>.
            </h1>
            <p className="hero-desc">
                I am a full stack  developer from Surat, India with 2.5 years of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
            <div className="hero-actions">
                <button className="btn-gradient" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>contact me →</button>
                <button className="btn-outline" onClick={handleResumeClick}>my resume ⬇</button>
            </div>
        </section>
    );
};

export default PortfolioHero;
