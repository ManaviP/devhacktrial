
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-hackathon-navy/95 backdrop-blur-md shadow-lg' : 'bg-hackathon-navy'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <Link to="/" className="text-white font-bold text-xl flex items-center">
            <span className="text-blue-400 mr-1">&lt;</span>
            DevHacks '25
            <span className="text-blue-400 ml-1">/&gt;</span>
          </Link>

          <div className="hidden md:block">
            <div className="text-blue-400">
              <span>&lt;date&gt;</span> February-May, 2025 <span>&lt;/date&gt;</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-hackathon-darkBlue/95 backdrop-blur-md animate-fade-in fixed w-full z-50">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white text-left transition-all ${
                    isActivePath(item) ? 'bg-gray-800 text-white border-l-4 border-blue-500' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/register"
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-hackathon-navy/95 backdrop-blur-md shadow-lg">
        <div className="flex overflow-x-auto">
          {navItems.map((item) => (
            item.path === '/' && item.sectionId ? (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors whitespace-nowrap ${
                  isActivePath(item) ? 'bg-blue-600 text-white' : ''
                }`}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors whitespace-nowrap ${
                  item.path === location.pathname ? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            to="/register"
            className="ml-auto px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Register
          </Link>
          <div className="px-4 py-3 text-blue-400">⌘</div>
        </div>
      </div>
    </>
  );
};
