import React, { useEffect, useState } from 'react';
import '../Resume.css';
import ResumeHeader from './ResumeHeader';
import ResumeSummary from './ResumeSummary';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
import ResumeEducation from './ResumeEducation';

const Resume = ({ onBack }) => {
    // Skills Data
    const skills = [
        { name: "React.js / Next.js", level: 95 },
        { name: "Node.js / Express", level: 90 },
        { name: "PHP / Laravel", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Database Design", level: 88 }
    ];

    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        // Trigger skill bar animation after component mounts
        const timer = setTimeout(() => setAnimateSkills(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="resume-container">
            <button className="btn-back" onClick={onBack}> Back to Portfolio </button>
            <div className="resume-content-wrapper">
                <ResumeHeader />
                <ResumeSummary />
                <ResumeExperience />
                <ResumeSkills skills={skills} animateSkills={animateSkills} />
                <ResumeEducation />
            </div>
        </div>
    );
};

export default Resume;
