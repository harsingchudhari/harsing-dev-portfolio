import React from 'react';

const PortfolioContact = () => {
    return (
        <section className="pf-section" id="contact">
            <div className="contact-container">
                <span className="pf-subheading">Connect with me</span>
                <h2 className="pf-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in touch</h2>
                <p style={{ color: '#666' }}>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" className="input-field" placeholder="Enter your name" />
                        <input type="email" className="input-field" placeholder="Enter your email" />
                    </div>
                    <textarea className="textarea-field" placeholder="Enter your message"></textarea>

                    <button type="submit" className="btn-submit">Submit now →</button>
                </form>
            </div>
        </section>
    );
};

export default PortfolioContact;
