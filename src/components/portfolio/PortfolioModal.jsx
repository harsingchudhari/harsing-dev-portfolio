import React from 'react';

const PortfolioModal = ({ selectedProject, closeModal, onOpenDemo, onTriggerAuthModal }) => {
    if (!selectedProject) return null;

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>✕</button>
                <div className="modal-image" style={{ backgroundImage: `url(${selectedProject.image})` }}></div>
                <div className="modal-details">
                    {selectedProject.category && <span className="modal-category">{selectedProject.category}</span>}

                    <h3 className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {selectedProject.icon && <span>{selectedProject.icon}</span>}
                        {selectedProject.title}
                    </h3>

                    <p className="modal-desc">
                        {selectedProject.desc || "This project showcases advanced frontend techniques using React and CSS animations. It features a responsive design, interactive elements, and optimized performance."}
                    </p>

                    {selectedProject.list && (
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '-1rem', marginBottom: '2rem', color: 'var(--pf-secondary)' }}>
                            {selectedProject.list.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: '#d946ef' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    {selectedProject.implementationSteps && (
                        <div className="implementation-section">
                            <h4 className="impl-title">Project Implementation – Step by Step</h4>
                            <div className="steps-container">
                                {selectedProject.implementationSteps.map((step, index) => (
                                    <div className="step-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                        <div className="step-number">{index + 1}</div>
                                        <div className="step-content">
                                            <h5 className="step-heading">{step.step}</h5>
                                            <p className="step-desc">{step.desc}</p>
                                            {step.tech && <span className="step-tech">🛠 {step.tech}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-actions">
                        <button className="btn-primary" onClick={() => {
                            if (selectedProject.list) {
                                // Service card / "Get Started" button
                                if (onTriggerAuthModal) onTriggerAuthModal();
                                closeModal();
                            } else if (onOpenDemo) {
                                // Work card / "View Demo" button
                                onOpenDemo();
                                closeModal();
                            } else {
                                alert('Viewing Live Demo! (No link configured)');
                            }
                        }}>
                            {selectedProject.list ? 'Get Started' : 'View Demo'}
                        </button>
                        <button className="btn-secondary" onClick={closeModal}>Close Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
