import React, { useEffect, useRef } from 'react';
import './Themes.css';

// Arrow icon component
const ArrowIcon = () => (
  <div className="arrow-icon">
    <svg width="60" height="60" viewBox="13 13 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 24 H33 M23 14 L33 24 L23 34"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// Function to create grid lines for a card
const createGridLines = () => {
  const gridLines = [];

  // Create vertical lines
  for (let i = 1; i <= 20; i++) {
    gridLines.push(
      <div
        key={`v-${i}`}
        className="theme-card-grid-line theme-card-grid-line-vertical"
      />
    );
  }

  // Create horizontal lines
  for (let i = 1; i <= 20; i++) {
    gridLines.push(
      <div
        key={`h-${i}`}
        className="theme-card-grid-line theme-card-grid-line-horizontal"
      />
    );
  }

  return gridLines;
};

const Themes: React.FC = () => {
  const themesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!themesRef.current) return;

      const cards = themesRef.current.querySelectorAll('.theme-card');
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;

      cards.forEach((card, index) => {
        const cardTop = (card as HTMLElement).offsetTop;

        if (scrollPosition > cardTop) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="themes" className="themes-section">
      <div className="themes-container">
        <div className="themes-header">
          <h2 className="section-title">Hackathon Themes</h2>
          <p className="section-subtitle">
            Explore innovative solutions across these cutting-edge technology domains
          </p>
        </div>

        <div className="themes-grid" ref={themesRef}>
          {/* Sustainability Theme */}
          <div className="theme-card theme-sustainability">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">Sustainability</h3>
            </div>
            <div className="theme-content">
              <img src="/images/sustain2.png" alt="Sustainability" className="theme-illustration" />
            </div>

          </div>

          {/* Healthcare Theme */}
          <div className="theme-card theme-healthcare">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">Healthcare</h3>
            </div>
            <div className="theme-content">
              <img src="/images/healthcare.png" alt="Healthcare" className="theme-illustration" />
            </div>

          </div>

          {/* AI/ML Theme */}
          <div className="theme-card theme-aiml">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">AI & ML</h3>
            </div>
            <div className="theme-content">
              <img src="/images/chat-bot.png" alt="AI & ML" className="theme-illustration" />
            </div>

          </div>

          {/* Web3/Blockchain Theme */}
          <div className="theme-card theme-web3">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">Web3 & Blockchain</h3>
            </div>
            <div className="theme-content">
              <img src="/images/web.png" alt="Web3 & Blockchain" className="theme-illustration" />
            </div>

          </div>

          {/* IoT Theme */}
          <div className="theme-card theme-iot">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">IoT</h3>
            </div>
            <div className="theme-content">
              <img src="/images/iot.png" alt="IoT" className="theme-illustration" />
            </div>

          </div>

          {/* Open Innovation Theme */}
          <div className="theme-card theme-open">
            <div className="theme-card-grid">
              {createGridLines()}
            </div>
            <div className="theme-header">
              <div className="theme-icon-container">
                <div className="theme-icon">
                  <ArrowIcon />
                </div>
              </div>
              <h3 className="theme-title">Open Innovation</h3>
            </div>
            <div className="theme-content">
              <img src="/images/project-open.png" alt="Open Innovation" className="theme-illustration" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;
