import React, { useState } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProductShowcase from './components/ProductShowcase';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Demos from './components/demos/Demos';
import './App.css';

function App() {
  const [appMode, setAppMode] = useState('portfolio'); // 'auth' | 'portfolio' | 'showcase' | 'resume' | 'demos'
  const [isLogin, setIsLogin] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleAuth = () => setIsLogin(!isLogin);

  // Simple router logic
  if (appMode === 'portfolio') {
    return (
      <>
        <Portfolio
          onShowResume={() => setAppMode('resume')}
          onOpenDemo={() => setAppMode('demos')}
          onAuth={() => setAppMode('auth')}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <button
          onClick={() => setAppMode('auth')}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            background: '#333',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}
        >
          Switch to Auth App
        </button>
      </>
    );
  }

  if (appMode === 'resume') {
    return <Resume onBack={() => setAppMode('portfolio')} theme={theme} />;
  }

  if (appMode === 'demos') {
    return <Demos onBack={() => setAppMode('portfolio')} theme={theme} />;
  }

  if (appMode === 'showcase') {
    return <ProductShowcase onBack={() => setAppMode('auth')} />;
  }

  return (
    <>
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 100, display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setAppMode('portfolio')}
          style={{
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            border: 'none',
            backdropFilter: 'blur(5px)'
          }}
        >
          View Portfolio
        </button>

        <button
          onClick={() => setAppMode('showcase')}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            backdropFilter: 'blur(5px)'
          }}
        >
          View Product Demo →
        </button>
      </div>

      {isLogin ? (
        <Login onSwitch={toggleAuth} theme={theme} />
      ) : (
        <Register onSwitch={toggleAuth} theme={theme} />
      )}
    </>
  );
}

export default App;
