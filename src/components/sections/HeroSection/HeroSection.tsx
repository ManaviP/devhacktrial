import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  theme?: 'light' | 'dark';
}

export const HeroSection = (_props: HeroSectionProps) => {
  // Refs for animation elements
  const cursorRef = useRef<SVGSVGElement>(null);
  const messageBoxRef = useRef<SVGGElement>(null);
  const keysRef = useRef<(HTMLDivElement | null)[]>([]);

  // Refs for scroll pinning
  const sectionRef = useRef<HTMLElement>(null);
  const keyboardWrapRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Animation for cursor pointing to different keys
  useEffect(() => {
    if (!cursorRef.current || keysRef.current.length === 0) return;

    const cursor = cursorRef.current;
    let currentKeyIndex = 0;

    // We're using a predefined sequence instead of checking accessibility

    // Define a fixed sequence for cursor movement - only upper keys to stay higher
    const keySequence = [0, 2, 5, 1, 0, 2]; // D, V, C, E, D, V - only top row keys
    let sequenceIndex = 0;

    // Sequence through keys animation
    const animateCursorToKey = () => {
      // Get the next key in our predefined sequence
      currentKeyIndex = keySequence[sequenceIndex];
      let key = keysRef.current[currentKeyIndex];

      // Move to next key in sequence for next time
      sequenceIndex = (sequenceIndex + 1) % keySequence.length;

      if (!key) {
        // If key not found, reset cursor to top-center
        gsap.to(cursor, {
          x: "40%",
          y: "15%", // Position much higher to stay above keys
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Try again after a delay
            setTimeout(animateCursorToKey, 800);
          }
        });
        return;
      }

      // Get key position
      const keyRect = key.getBoundingClientRect();
      const cursorRect = cursor.getBoundingClientRect();
      const parentRect = cursor.parentElement?.getBoundingClientRect();

      if (!parentRect) return;

      // Calculate position to point to the center of the key
      let targetX = keyRect.left - parentRect.left + (keyRect.width / 2) - (cursorRect.width / 2);
      let targetY = keyRect.top - parentRect.top + (keyRect.height / 2) - (cursorRect.height / 2);

      // Ensure cursor stays within bounds with padding and only around the keys
      const padding = 20; // 20px padding from edges
      // Limit horizontal movement to prevent going to the right end
      const maxX = Math.min(parentRect.width * 0.8, 800) - cursorRect.width;
      // Limit vertical movement to top 40% of the container to stay above keys
      const maxY = (parentRect.height * 0.4) - cursorRect.height;

      targetX = Math.max(padding, Math.min(targetX, maxX));
      targetY = Math.max(padding, Math.min(targetY, maxY));

      // Add a slight offset to ensure cursor points at the key letter
      targetY = targetY - 8;

      gsap.to(cursor, {
        x: targetX,
        y: targetY,
        duration: 1, // Faster movement
        ease: "power1.out", // Simpler easing for more direct movement
        onComplete: () => {
          // Simulate a click on the key
          handleKeyHover(currentKeyIndex, true);

          setTimeout(() => {
            handleKeyHover(currentKeyIndex, false);

            // Wait a bit longer before moving to the next key
            setTimeout(() => {
              animateCursorToKey();
            }, 400);
          }, 300);
        }
      });
    };

    // Start the animation after a short delay to ensure all refs are set
    const timer = setTimeout(() => {
      // Initialize cursor position to top-left area (near the D key) but higher up
      gsap.set(cursor, { x: "30%", y: "10%" });
      animateCursorToKey();
    }, 1000);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf(cursor);
    };
  }, []);

  // Animation for message box
  useEffect(() => {
    if (!messageBoxRef.current) return;

    const messageBox = messageBoxRef.current;

    // Very subtle floating animation
    gsap.to(messageBox, {
      y: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // No need to animate the dots here as we're using CSS animations

    return () => {
      gsap.killTweensOf(messageBox);
    };
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-09-12T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ScrollTrigger setup for pinning
  useEffect(() => {
    if (!sectionRef.current || !keyboardWrapRef.current || !contentWrapRef.current) return;

    // Create the scroll trigger for pinning the keyboard animation - only on desktop
    if (window.innerWidth > 992) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#pin-keyboard",
          start: "50% 50%", // Center of the viewport
          endTrigger: ".hero-section",
          end: "bottom 50%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          markers: false, // Set to true for debugging
        }
      });
    }

    // Ensure all content sections are visible initially
    const allContentSections = gsap.utils.toArray('.hero-content-section');
    gsap.set(allContentSections, { clearProps: "all" });

    // Make sure the about section and why section are visible
    gsap.set('.about-section', { opacity: 1, visibility: 'visible' });
    gsap.set('.why-section', { opacity: 1, visibility: 'visible' });

    // Animate the content sections as they scroll
    const contentSections = gsap.utils.toArray('.hero-content-section');
    contentSections.forEach((section: any, index: number) => {
      // Set initial state for all sections except the first one
      if (index > 0) {
        gsap.set(section, { opacity: 0.7, y: 30 }); // Less dramatic initial state
      }

      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.3, // Faster animation
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // Trigger earlier
          end: "top 40%",
          toggleActions: "play none none reverse",
          once: false, // Animation will play each time the section enters the viewport
          markers: false, // Set to true for debugging
        }
      });
    });

    // Force a refresh of ScrollTrigger to ensure proper initialization
    ScrollTrigger.refresh();

    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle key hover animations
  const handleKeyHover = (index: number, isEnter: boolean) => {
    const key = keysRef.current[index];
    if (!key) return;

    if (isEnter) {
      gsap.to(key, {
        y: 5,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(key, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)"
      });
    }
  };

  // Create keyboard keys for DEVHACK
  const keyboardLetters = ['D', 'E', 'V', 'A', 'H', 'C', 'K'];

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <div className="hero-pin-container">
        {/* Left side - Scrollable content */}
        <div className="hero-content-wrap" ref={contentWrapRef}>
         
          {/* First content section - Initial view with title and register button */}
          <div className="hero-content-section first-section">
            <div className="hero-text-container">


              <div className="logo-title-container">
                <img src="/images/hb-logo.png" alt="DSU DevHack Logo" className="hero-logo" />
                <div className="title-container">
                  <h1 className="hero-title">DSU</h1>
                  <h1 className="hero-title hero-title-gradient">DEVHACK 2.0</h1>
                </div>
              </div>
              <p className="hero-subtitle">National-level hybrid hackathon for undergraduate engineering students</p>

              {/* Countdown timer */}
              <div className="countdown-timer">
                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.minutes}</span>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.seconds}</span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>

              <button type="button" className="register-button">
                Register Now
                <span className="register-arrow">→</span>
              </button>

             
            </div>
          </div>

          {/* About section - Visible on desktop in scrollable area */}
          <div className="hero-content-section about-section">
            <div className="hero-text-container">
              <div className="section-content-with-image">
                <div className="section-text-content">
                  <h2 className="hero-section-title">About DSU DEVHACK 2025</h2>
                  <p className="hero-section-text">
                    DSU DEVHACK 2025 is a national-level hackathon pushing the boundaries of innovation in AI, ML, IoT, Blockchain, Cybersecurity, and Cloud at DSU Harohalli, Banglore, Karnataka. 🛠️
                  </p>
                  <p className="hero-section-text">
                    This event gathers brilliant minds nationwide to create revolutionary solutions. It provides a platform for developers, designers, and enthusiasts to transform ideas, showcase skills, and network. 🤝
                  </p>
                </div>
                <img src="/images/hb-logo.png" alt="DSU Campus" className="section-image" />
              </div>

             
            </div>
          </div>

          {/* Why Participate section - Visible on desktop in scrollable area */}
          <div className="hero-content-section why-section">
            <div className="hero-text-container">
              <div className="section-content-with-image">
                <div className="section-text-content">
                  <h2 className="hero-section-title">Why Participate?</h2>
                  <ul className="hero-section-list">
                    <li>Showcase your technical skills and creativity</li>
                    <li>Network with industry professionals and peers</li>
                    <li>Win exciting prizes and recognition</li>
                    <li>Learn new technologies and methodologies</li>
                    <li>Build solutions that address real-world challenges</li>
                  </ul>
                </div>
                <img src="/images/hb-logo.png" alt="DSU Campus" className="section-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Pinned keyboard grid */}
        <div id="pin-keyboard" className="keyboard-wrap" ref={keyboardWrapRef}>
          <div className="keyboard-grid">
            {keyboardLetters.map((letter, index) => (
              <div
                key={index}
                ref={el => keysRef.current[index] = el}
                className={`keyboard-key keyboard-key-${index}`}
                onMouseEnter={() => handleKeyHover(index, true)}
                onMouseLeave={() => handleKeyHover(index, false)}
              >
                <span className="key-letter">{letter}</span>
                <div className="key-shadow"></div>
              </div>
            ))}

            {/* Cursor SVG */}
            <svg
              ref={cursorRef}
              className="cursor-svg"
              width="64"
              height="64"
              viewBox="0 0 24.00 24.00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.1,4.46l7.21,15.92A1.17,1.17,0,0,0,12.5,20l1.26-6.23L20,12.5a1.17,1.17,0,0,0,.39-2.19L4.46,3.1A1,1,0,0,0,3.1,4.46Z"
                style={{ fill: '#ffffff', strokeWidth: 2 }}
              />
              <path
                d="M3.1,4.46l7.21,15.92A1.17,1.17,0,0,0,12.5,20l1.26-6.23L20,12.5a1.17,1.17,0,0,0,.39-2.19L4.46,3.1A1,1,0,0,0,3.1,4.46Z"
                style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}
              />
            </svg>

            {/* Message Box */}
            <div className="message-circle">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
                <g ref={messageBoxRef}>
                  <rect x="20" y="30" width="40" height="20" rx="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
                  <g className="message-dots">
                    <circle className="dot dot-1" cx="30" cy="40" r="2.5" fill="#000000" />
                    <circle className="dot dot-2" cx="40" cy="40" r="2.5" fill="#000000" />
                    <circle className="dot dot-3" cx="50" cy="40" r="2.5" fill="#000000" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Additional content sections - Will appear after keyboard in mobile view only */}
        <div className="hero-content-additional">
          {/* Mobile-only content - duplicated from above for mobile layout */}
          <div className="hero-content-section mobile-about-section">
            <div className="hero-text-container">
              <h2 className="hero-section-title">About DSU DEVHACK 2025</h2>
              <p className="hero-section-text">
                DSU DEVHACK 2025 is a national-level hackathon pushing the boundaries of innovation in AI, ML, IoT, Blockchain, Cybersecurity, and Cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
