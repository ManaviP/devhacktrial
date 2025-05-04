import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNavbar.css';

const navItems = [
  { name: 'Overview', path: '/', sectionId: 'overview' },
  { name: 'Tracks & Prizes', path: '/', sectionId: 'tracks' },
  { name: 'Sponsors', path: '/', sectionId: 'sponsors' },
  { name: 'Events', path: '/', sectionId: 'events' },
  { name: 'FAQ', path: '/', sectionId: 'faq' },
  { name: 'Participant Handbook', path: '/handbook', sectionId: 'handbook' },
  { name: 'Discord', path: '/discord', sectionId: 'discord' }
];

export const BottomNavbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavClick = (item: { path: string, sectionId: string | null }) => {
    if (location.pathname !== item.path) {
      // Will navigate to a different page
      return;
    }

    if (item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(item.sectionId);
    }
  };

  const isActivePath = (item: { path: string, sectionId: string | null }) => {
    if (item.path === '/' && location.pathname === '/' && item.sectionId) {
      return activeSection === item.sectionId;
    }
    return location.pathname === item.path;
  };

  return (
    <div className="bottom-navbar">
      <div className="navbar-container">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`navbar-item ${isActivePath(item) ? 'active' : ''}`}
            onClick={() => handleNavClick(item)}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/register" className="navbar-item register">
          Register
        </Link>
      </div>
    </div>
  );
};
