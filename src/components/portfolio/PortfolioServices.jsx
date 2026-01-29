import React from 'react';
import InteractiveSlider from './InteractiveSlider';

const PortfolioServices = ({ services, handleProjectClick }) => {
    return (
        <section className="services-section" id="services">
            <div className="section-header">
                <span className="pf-subheading">Tech Market Expertise</span>
                <h2 className="pf-heading" style={{ fontSize: '2.5rem' }}>High-Demand Services</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--pf-secondary)' }}>
                    Delivering profitable, scalable solutions tailored for the 2026 tech landscape.
                </p>
            </div>

            <InteractiveSlider
                items={services}
                renderItem={(service, index) => (
                    <div className="service-card" key={index} onClick={() => handleProjectClick(service)} style={{ cursor: 'pointer' }}>
                        <div className={`service-preview ${service.animate ? 'anim-pan-zoom' : ''}`} style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="service-preview-overlay"></div>
                            <div className="service-icon-floating">{service.icon}</div>
                        </div>

                        <div className="service-content">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <ul className="service-list">
                                {service.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            />
        </section>
    );
};

export default PortfolioServices;
