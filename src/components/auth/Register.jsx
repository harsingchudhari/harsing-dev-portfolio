import React, { useState } from 'react';
import './Auth.css';

const Register = ({ onSwitch, theme }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', formData);
    };

    return (
        <div className="auth-wrapper" data-theme={theme}>
            <div className="auth-split-container">

                {/* Navigation Overlays */}
                <div className="auth-toggle">
                    <button className="toggle-btn active" style={{ background: '#ef4444', color: 'white' }}>Register</button>
                    <button className="toggle-btn" onClick={onSwitch}>Login</button>
                </div>

                {/* Left: Image Side */}
                <div className="auth-half auth-image-side">
                    <div className="auth-bg-image" style={{ backgroundImage: "url('/register_bg.png')" }}>
                        <div className="image-overlay">
                            <h1 className="overlay-title">Your Adventure <br /> Start <span>Here</span></h1>
                            <p className="overlay-desc">From hidden alleys to breathtaking landscapes, it's time for you to explore the world and write your own unforgettable journey.</p>
                            <div className="overlay-tags">
                                <div className="tag-icon">📍 Destinations</div>
                                <div className="tag-icon"># Waterfall</div>
                                <div className="tag-icon"># Rock Formation</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form Side */}
                <div className="auth-half auth-form-side">
                    <div className="form-content">
                        <div className="form-header">
                            <h2>Create New Account</h2>
                            <p>Start Your Journey for Travelling Here!</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="input-row">
                                <div style={{ flex: 1 }}>
                                    <div className="custom-input-group">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="custom-input"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Marco"
                                        />
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="custom-input-group">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="custom-input"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Polo"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="custom-input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="custom-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Marco_polo0901@gmail.com"
                                />
                            </div>

                            <div className="custom-input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="custom-input"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••••••••"
                                />
                                <div className="password-strength">✓ Strong</div>
                                <span style={{ position: 'absolute', right: '15px', top: '38px', color: '#999', cursor: 'pointer' }}>👁</span>
                            </div>

                            <button type="submit" className="submit-btn">
                                Let's Start Your Journey
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
