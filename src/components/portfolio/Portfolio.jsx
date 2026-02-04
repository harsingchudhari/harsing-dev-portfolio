import React, { useState, useEffect } from 'react';
import '../Portfolio.css';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioHero from './PortfolioHero';
import PortfolioAbout from './PortfolioAbout';
import PortfolioServices from './PortfolioServices';
import PortfolioWork from './PortfolioWork';
import PortfolioContact from './PortfolioContact';
import PortfolioFooter from './PortfolioFooter';
import PortfolioModal from './PortfolioModal';
import AuthModal from './AuthModal';

const Portfolio = ({ onShowResume, onOpenDemo, onAuth, theme, toggleTheme }) => {
    const [showResumePopup, setShowResumePopup] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleResumeClick = () => {
        setShowResumePopup(true);
        // Show popup for 3 seconds, then navigate to resume page
        setTimeout(() => {
            setShowResumePopup(false);
            if (onShowResume) onShowResume();
        }, 3000);
    };

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const services = [
        {
            icon: "🚀",
            title: "SaaS Starter Kits",
            desc: "Rapidly launch scalable products using pre-built React & Laravel boilerplates. Ideal for MVP validation.",
            list: ["Multi-tenancy Architecture", "Stripe/Subscription Integration", "Role-Based Access Control"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            implementationSteps: [
                { step: "Requirement Gathering", desc: "Defining core MVP features and user roles.", tech: "Notion" },
                { step: "Architecture Setup", desc: "Setting up Laravel API and React frontend monorepo.", tech: "Laravel, React" },
                { step: "Authentication System", desc: "Implementing JWT auth with role-based access control.", tech: "JWT, Middleware" },
                { step: "Payment Integration", desc: "Connecting Stripe for subscription handling.", tech: "Stripe API" },
                { step: "Deployment", desc: "Deploying to AWS with CI/CD pipelines.", tech: "AWS, GitHub Actions" }
            ]
        },
        {
            icon: "🔗",
            title: "API Ecosystems",
            desc: "Building robust, headless architectures that power mobile apps and 3rd party integrations.",
            list: ["RESTful & GraphQL Design", "Secure OAuth2 Implementation", "High-Performance Caching"],
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
            implementationSteps: [
                { step: "API Design", desc: "Schema design using OpenAPI/Swagger.", tech: "Swagger" },
                { step: "Database Modeling", desc: "Designing normalized database schemas.", tech: "MySQL/PostgreSQL" },
                { step: "Endpoint Development", desc: "Building secure and optimized API endpoints.", tech: "Node.js, Express" },
                { step: "Security Layer", desc: "Implementing Rate Limiting and OAuth2.", tech: "Redis, OAuth2" }
            ]
        },
        {
            icon: "📊",
            title: "Admin Panels",
            desc: "Custom internal tools to visualize data and manage business operations efficiently.",
            list: ["Filament / Nova Dashboards", "Real-time Analytics", "Data Export & Reporting"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            implementationSteps: [
                { step: "UX/UI Design", desc: "Designing intuitive dashboard layouts.", tech: "Figma" },
                { step: "Frontend Components", desc: "Building reusable data tables and charts.", tech: "React, Recharts" },
                { step: "Data Integration", desc: "Connecting to backend APIs for real-time data.", tech: "Axios, SWR" }
            ]
        },
        {
            icon: "💳",
            title: "Payment Integration",
            desc: "Secure and seamless payment gateway implementations for global transactions.",
            list: ["Stripe & PayPal Connect", "Subscription Mgmt", "Fraud Detection Systems"],
            image: "./payment_bg.jpg",
            animate: true,
            implementationSteps: [
                { step: "Gateway Selection", desc: "Choosing the right provider based on region.", tech: "Stripe/PayPal" },
                { step: "API Integration", desc: "Server-side integration for secure transactions.", tech: "Node.js" },
                { step: "Webhook Handling", desc: "Listening for payment events (success/failure).", tech: "Webhooks" },
                { step: "UI Implementation", desc: "Building the checkout flow.", tech: "React" }
            ]
        }
    ];

    const works = [
        {
            category: "Frontend project",
            type: "Web Design",
            gradient: "linear-gradient(45deg, #2b5876, #4e4376)",
            title: "E-Commerce Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            demoAction: "showcase",
            implementationSteps: [
                { step: "Component Design", desc: "Creating atomic design components.", tech: "Storybook" },
                { step: "State Management", desc: "Managing cart and user state.", tech: "Redux Toolkit" },
                { step: "API Integration", desc: "Fetching product data.", tech: "Rest API" }
            ]
        },
        {
            category: "Geo based app",
            type: "Mobile App",
            gradient: "linear-gradient(45deg, #13547a, #80d0c7)",
            title: "City Navigator",
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop",
            implementationSteps: [
                { step: "Map Integration", desc: "Integrating Google Maps/Mapbox.", tech: "Mapbox GL" },
                { step: "Geolocation", desc: "Tracking user position.", tech: "Geolocation API" },
                { step: "Route Optimization", desc: "Calculating best paths.", tech: "Graph Algorithms" }
            ]
        },
        {
            category: "Photography site",
            type: "Web Design",
            gradient: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
            title: "Lens & Light",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
            implementationSteps: [
                { step: "Gallery Grid", desc: "Masonry layout for images.", tech: "CSS Grid" },
                { step: "Image Optimization", desc: "Lazy loading and compression.", tech: "Sharp" }
            ]
        },
        {
            category: "UI/UX designing",
            type: "UI/UX Design",
            gradient: "linear-gradient(45deg, #a18cd1, #fbc2eb)",
            title: "Finance App Clean UI",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
            implementationSteps: [
                { step: "User Research", desc: "Analyzing user personas.", tech: "Miro" },
                { step: "Wireframing", desc: "Low-fidelity sketches.", tech: "Balsamiq" },
                { step: "Prototyping", desc: "High-fidelity clickable prototype.", tech: "Figma" }
            ]
        }
    ];


    return (
        <div className="portfolio-wrapper" data-theme={theme}>
            <PortfolioNavbar toggleTheme={toggleTheme} theme={theme} />
            <PortfolioHero handleResumeClick={handleResumeClick} />
            <PortfolioAbout />
            <PortfolioServices services={services} handleProjectClick={handleProjectClick} />
            <PortfolioWork works={works} handleProjectClick={handleProjectClick} onOpenDemo={onOpenDemo} />
            <PortfolioContact />
            <PortfolioFooter />

            {/* Resume Popup */}
            {showResumePopup && (
                <div className="resume-popup">
                    <div className="resume-popup-content">
                        <span className="resume-icon">🚀</span>
                        Welcome to my Professional Journey
                    </div>
                </div>
            )}

            <PortfolioModal
                selectedProject={selectedProject}
                closeModal={closeModal}
                onOpenDemo={onOpenDemo}
                onTriggerAuthModal={() => setShowAuthModal(true)}
            />

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                onLogin={() => {
                    setShowAuthModal(false);
                    if (onAuth) onAuth();
                }}
            />
        </div>
    );
};

export default Portfolio;
