import React from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
    if (!isOpen) return null;

    return (
        <div className="auth-modal-backdrop" onClick={onClose}>
            <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="auth-modal-icon">
                    <span role="img" aria-label="lock">🔒</span>
                </div>
                <h2 className="auth-modal-title">You need to log in to continue</h2>
                <p className="auth-modal-message">
                    Please sign in to access this feature and explore all possibilities.
                </p>
                <div className="auth-modal-actions">
                    <button className="btn-auth-login" onClick={onLogin}>
                        OK / Login
                    </button>
                    <button className="btn-auth-cancel" onClick={onClose}>
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
