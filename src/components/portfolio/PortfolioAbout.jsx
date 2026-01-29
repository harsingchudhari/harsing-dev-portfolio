import React from 'react';

const PortfolioAbout = () => {
    return (
        <section className="pf-section" id="about">
            <div className="section-header">
                <span className="pf-subheading">Introduction</span>
                <h2 className="pf-heading" style={{ fontSize: '2.5rem' }}>About me</h2>
            </div>

            <div className="about-grid">
                <div className="about-image-card">
                    <img src="./profile.png" alt="About Me" style={{ transform: 'scale(1.2)' }} />
                </div>

                <div className="about-content">
                    <p>
                        I am an experienced full stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-icon">code</span>
                            <div className="stat-title">Languages</div>
                            <div className="stat-desc">HTML, CSS, JS, React, Next.js, PHP, Laravel, CodeIgniter, Node.js</div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">school</span>
                            <div className="stat-title">Education</div>
                            <div className="stat-desc">Computer Science PhD Running</div>
                        </div>
                        <div className="stat-card" style={{ borderBottom: '3px solid #111' }}>
                            {/* Highlights active state from design */}
                            <span className="stat-icon">work</span>
                            <div className="stat-title">Projects</div>
                            <div className="stat-desc">Built more than 5 projects</div>
                        </div>
                    </div>

                    <div className="pf-subheading" style={{ marginBottom: '1rem' }}>Tools I use</div>
                    <div className="tools-row">
                        <div className="tool-icon" title="Google Antigravity">
                            <img src="https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc.png" alt="Google" style={{ width: '24px' }} />
                        </div>
                        <div className="tool-icon" title="GitHub">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: '24px' }} />
                        </div>
                        <div className="tool-icon" title="ChatGPT">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" style={{ width: '24px' }} />
                        </div>
                        <div className="tool-icon" title="Gemini">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" style={{ width: '24px' }} />
                        </div>
                        <div className="tool-icon" title="Cursor AI">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/cursor-ai-code-icon.png" alt="Cursor AI" style={{ width: '20px' }} />
                        </div>
                        <div className="tool-icon" title="Visual Studio Code">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" style={{ width: '24px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioAbout;
