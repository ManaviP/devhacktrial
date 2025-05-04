import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TimeCapsuleSection.css';

// Sample data for the time capsule items
const timeCapsuleItems = [
  {
    id: 1,
    year: '2020',
    title: 'First DSU DevHack',
    description: 'The inaugural hackathon that started it all.',
    imageUrl: '/images/time-capsule/devhack-2020.jpg'
  },
  {
    id: 2,
    year: '2021',
    title: 'Virtual Edition',
    description: 'Our first fully online hackathon during the pandemic.',
    imageUrl: '/images/time-capsule/devhack-2021.jpg'
  },
  {
    id: 3,
    year: '2022',
    title: 'Hybrid Format',
    description: 'Combining in-person and virtual participation.',
    imageUrl: '/images/time-capsule/devhack-2022.jpg'
  },
  {
    id: 4,
    year: '2023',
    title: 'Innovation Summit',
    description: 'Expanded with industry workshops and mentorship.',
    imageUrl: '/images/time-capsule/devhack-2023.jpg'
  },
  {
    id: 5,
    year: '2024',
    title: 'Global Reach',
    description: 'Our first hackathon with international participants.',
    imageUrl: '/images/time-capsule/devhack-2024.jpg'
  }
];

export const TimeCapsuleSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation to reveal the section when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('time-capsule');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Toggle the time capsule open/closed state
  const toggleTimeCapsule = () => {
    setIsOpen(!isOpen);
  };

  // Scroll the reel left
  const scrollLeft = () => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Scroll the reel right
  const scrollRight = () => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="time-capsule" className="time-capsule-section">
      <div className="time-capsule-container">
        <motion.h2
          className="time-capsule-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          DevHack Time Capsule
        </motion.h2>

        {/* Closed time capsule view */}
        <motion.div
          className="time-capsule-closed"
          onClick={toggleTimeCapsule}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="/images/time-capsule/devhack-history.jpg"
            alt="DevHack History"
            className="time-capsule-image"
          />
          <div className="time-capsule-content">
            <h3 className="time-capsule-year">2024</h3>
            <p className="time-capsule-description">
              Explore the history of DSU DevHack . Click to open the time capsule and journey through our past events.
            </p>
            <button type="button" className="time-capsule-button">
              Open Time Capsule <span className="time-capsule-button-arrow">→</span>
            </button>
          </div>
        </motion.div>

        {/* Expanded time capsule view */}
        <div className={`time-capsule-expanded ${isOpen ? 'open' : ''}`}>
          <div className="film-strip-top">
            {[...Array(20)].map((_, i) => (
              <div key={`top-${i}`} className="film-hole"></div>
            ))}
          </div>

          <button type="button" className="time-capsule-close" onClick={toggleTimeCapsule}>
            ✕
          </button>

          <div className="time-capsule-reel" ref={reelRef}>
            {timeCapsuleItems.map((item) => (
              <div key={item.id} className="time-capsule-item">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="time-capsule-item-image"
                />
                <h4 className="time-capsule-item-year">{item.year}</h4>
                <h5 className="time-capsule-item-title">{item.title}</h5>
                <p className="time-capsule-item-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="time-capsule-navigation">
            <button type="button" className="time-capsule-nav-button" onClick={scrollLeft}>
              ←
            </button>
            <button type="button" className="time-capsule-nav-button" onClick={scrollRight}>
              →
            </button>
          </div>

          <div className="film-strip-bottom">
            {[...Array(20)].map((_, i) => (
              <div key={`bottom-${i}`} className="film-hole"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
