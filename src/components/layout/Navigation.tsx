
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const navItems = [
  { name: 'Overview', path: '/', sectionId: 'overview' },
  { name: 'Tracks & Prizes', path: '/', sectionId: 'tracks' },
  { name: 'Sponsors', path: '/', sectionId: 'sponsors' },
  { name: 'Events', path: '/', sectionId: 'events' },
  { name: 'Insights', path: '/insights', sectionId: null },
  { name: 'FAQ', path: '/', sectionId: 'faq' },
  { name: 'Participant Handbook', path: '/handbook', sectionId: 'handbook' },
  { name: 'Discord', path: '/discord', sectionId: 'discord' }
];

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (item: { path: string, sectionId: string | null }) => {
    setMobileMenuOpen(false);

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

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = navItems
          .filter(item => item.sectionId && item.path === '/')
          .map(item => item.sectionId as string);

        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) {
          setActiveSection(current);
        }

        setScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Set scrolled to true for non-home pages
      setScrolled(true);
    }
  }, [location.pathname]);

  const isActivePath = (item: { path: string, sectionId: string | null }) => {
    if (item.path === '/' && location.pathname === '/' && item.sectionId) {
      return activeSection === item.sectionId;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Mobile date bar - only visible on small screens */}
        <div className="md:hidden bg-[#001529] text-white flex justify-center items-center px-4 py-2">
          <div className="text-[#4FB3FF]">
            <span>&lt;date&gt;</span> July-September, 2025 <span>&lt;/date&gt;</span>
          </div>
        </div>

        {/* Main header with title on left and date (desktop) / menu button (mobile) on right */}
        <div className="bg-[#001529] text-white flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <Link to="/" className="text-white font-bold text-xl">
            DevHacks '25
          </Link>

          <div className="flex items-center">
            {/* Date - only visible on desktop */}
            <div className="hidden md:block text-[#4FB3FF] mr-4">
              <span>&lt;date&gt;</span> July-September, 2025 <span>&lt;/date&gt;</span>
            </div>

            {/* Mobile menu button - only visible on small screens */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-white mr-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Dots menu button - always visible */}
            <div className="bg-[#4FB3FF] w-10 h-10 flex items-center justify-center cursor-pointer">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#001529] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        
      </header>

      
        


    </>
  );
};
