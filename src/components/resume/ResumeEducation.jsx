import React from 'react';

const ResumeEducation = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2025 - Present</div>
                <div className="timeline-role">Ph.D. in Computer Science (Ongoing)</div>
                <div className="timeline-company">Tech University</div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2018 - 2022</div>
                <div className="timeline-role">B.Tech in Computer Science</div>
                <div className="timeline-company">Gujrat Technological University</div>
            </div>
        </div>
    );
};

export default ResumeEducation;
