import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onSwitch, theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="auth-wrapper" data-theme={theme}>
            <div className="auth-split-container">

                {/* Navigation Overlays */}
                <div className="auth-toggle">
                    <button className="toggle-btn" onClick={onSwitch}>Register</button>
                    <button className="toggle-btn active">Login</button>
                </div>

                {/* Left: Form Side */}
                <div className="auth-half auth-form-side">
                    <div className="form-content">
                        <div className="form-header">
                            <h2>Welcome back</h2>
                            <p>Life is for adventure, let's travel!</p>
                        </div>

                        <div className="social-login">
                            <button className="social-btn">f</button>
                            <button className="social-btn" style={{ background: 'black', color: 'white' }}></button>
                            <button className="social-btn" style={{ color: '#EA4335' }}>G</button>
                        </div>

                        <div className="divider">Or</div>

                        <form onSubmit={handleSubmit}>
                            <div className="custom-input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="custom-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Marco_polo0901@gmail.com"
                                />
                            </div>

                            <div className="custom-input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="custom-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••••"
                                />
                                <span style={{ position: 'absolute', right: '15px', top: '38px', color: '#999', cursor: 'pointer' }}>👁</span>
                            </div>

                            <button type="submit" className="submit-btn">
                                Log In
                            </button>
                        </form>

                        <a className="forgot-link">Forgot Log In or Password?</a>
                    </div>
                </div>

                {/* Right: Image Side */}
                <div className="auth-half auth-image-side">
                    <div className="auth-bg-image" style={{ backgroundImage: "url('login_bg.png')" }}>
                        <div className="image-overlay">
                            <h1 className="overlay-title">Every destination <br /> has a <span>Story</span></h1>
                            <p className="overlay-desc">From hidden alleys to breathtaking landscapes, it's time for you to explore the world and write your own unforgettable journey.</p>
                            <div className="overlay-tags">
                                <div className="tag-icon">📍 Destinations</div>
                                <div className="tag-icon"># Waterfall</div>
                                <div className="tag-icon"># Rock Formation</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
