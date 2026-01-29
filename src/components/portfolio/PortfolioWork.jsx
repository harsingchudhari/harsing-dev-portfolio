import React from 'react';
import InteractiveSlider from './InteractiveSlider';

const PortfolioWork = ({ works, handleProjectClick }) => {
    return (
        <section className="services-section" id="work" style={{ background: 'var(--pf-card-bg)' }}>
            <div className="section-header">
                <span className="pf-subheading">My portfolio</span>
                <h2 className="pf-heading" style={{ fontSize: '2.5rem' }}>My latest work</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto', color: '#666' }}>
                    Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
                </p>
            </div>

            <InteractiveSlider
                items={works}
                renderItem={(work, index) => (
                    <div className="work-card-slide" key={index} onClick={() => handleProjectClick(work)}>
                        <div className="work-img-placeholder" style={{ backgroundImage: `url(${work.image})` }}></div>
                        <div className="work-tag">
                            <div>
                                <div className="stat-title">{work.category}</div>
                                <div className="stat-desc">{work.type}</div>
                            </div>
                            <span style={{ fontSize: '1.2rem' }}>↗</span>
                        </div>
                    </div>
                )}
            />

            <div className="services-container">
                <button className="btn-center" style={{ marginTop: '3rem' }}>Show more →</button>
            </div>
        </section>
    );
};

export default PortfolioWork;
