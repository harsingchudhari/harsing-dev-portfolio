import React from 'react';

const ResumeExperience = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Experience</h2>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024 - Present</div>
                <div className="timeline-role">Senior Frontend Engineer</div>
                <div className="timeline-company">TechFlow Solutions</div>
                <p>Leading the frontend migration to Next.js, improving page load speeds by 40%. Mentoring junior developers and establishing code quality standards.</p>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2024</div>
                <div className="timeline-role">Full Stack Developer</div>
                <div className="timeline-company">Creative Pulse Agency</div>
                <p>Developed custom e-commerce platforms using Laravel and React. Integrated complex payment gateways (Stripe, PayPal) and managed server deployments.</p>
            </div>
        </div>
    );
};

export default ResumeExperience;
