import React from 'react';

const ResumeSkills = ({ skills, animateSkills }) => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-wrapper" key={index}>
                        <div className="skill-info">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeSkills;
