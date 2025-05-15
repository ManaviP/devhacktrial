
import { useEffect, useRef, useState } from 'react';
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
  const keyboardLetters = ['D', 'E', 'V', 'C', 'A', 'H', 'K'];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-[60vh] w-full overflow-hidden bg-white"
    >
      <div className="flex flex-col-reverse items-center lg:justify-between lg:flex-row relative w-full justify-center">
        {/* Left side - Scrollable content */}
        <div 
          ref={contentWrapRef}
          className="relative w-full py-4 px-auto items-center h-screen max-h-screen overflow-y-auto scrollbar-none scroll-p-8 -z-1"
        >
          {/* First content section */}
          <div className="min-h-[80vh] flex flex-col justify-center py-6 scroll-snap-start mb-8 relative">
            <div className="max-w-full w-[600px] p-6 bg-white/95 rounded-xl mb-4 transition-transform duration-300 hover:-translate-y-1 relative overflow-visible">
              <div className="flex flex-col items-center mb-3 max-w-full overflow-visible">
                <img 
                  src="/images/hb-logo.png" 
                  alt="DSU DevHack Logo" 
                  className="w-32 h-32 mb-4 object-contain filter drop-shadow-md transition-transform duration-300 hover:rotate-12"
                />
                <div className="flex flex-col items-center max-w-full overflow-hidden">
                  <h1 className="text-5xl font-extrabold leading-tight m-0 text-black text-center max-w-full">DSU</h1>
                  <h1 className="text-5xl font-extrabold leading-tight m-0 text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] to-[#00D2FF] text-center max-w-full">DEVHACK 2.0</h1>
                </div>
              </div>
              <p className="text-xl mb-6 text-[#333333] leading-relaxed text-center">National-level hybrid hackathon for undergraduate engineering students</p>

              {/* Countdown timer */}
              <div className="flex justify-between mb-6 max-w-[400px] mx-auto">
                <div className="flex flex-col items-center rounded-lg p-2 min-w-[75px] text-[#333] shadow-sm bg-[#84b7f2]">
                  <span className="text-2xl font-bold mb-1">{timeLeft.days}</span>
                  <span className="text-sm uppercase tracking-wider">Days</span>
                </div>
                <div className="flex flex-col items-center rounded-lg p-2 min-w-[75px] text-[#333] shadow-sm bg-[#84b7f2]">
                  <span className="text-2xl font-bold mb-1">{timeLeft.hours}</span>
                  <span className="text-sm uppercase tracking-wider">Hours</span>
                </div>
                <div className="flex flex-col items-center rounded-lg p-2 min-w-[75px] text-[#333] shadow-sm bg-[#84b7f2]">
                  <span className="text-2xl font-bold mb-1">{timeLeft.minutes}</span>
                  <span className="text-sm uppercase tracking-wider">Mins</span>
                </div>
                <div className="flex flex-col items-center rounded-lg p-2 min-w-[75px] text-[#333] shadow-sm bg-[#84b7f2]">
                  <span className="text-2xl font-bold mb-1">{timeLeft.seconds}</span>
                  <span className="text-sm uppercase tracking-wider">Secs</span>
                </div>
              </div>

              <button 
                type="button" 
                className="px-8 py-4 bg-[#000f1d] text-[#f2f3f5] font-medium text-lg border-2 border-black rounded-none cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden mx-auto z-[1] pr-[60px] max-w-[250px] w-full group"
              >
                Register Now
                <div className="flex items-center justify-center bg-[#4da2ff] h-full w-[50px] absolute transition-all duration-300 z-[2] right-0 top-0 bottom-0 text-xl group-hover:bg-[#3b82f6] group-hover:right-auto group-hover:left-0 group-hover:rotate-0">
                  →
                </div>
              </button>
            </div>
          </div>

          {/* About section */}
          <div className="min-h-[60vh] flex flex-col justify-center py-6 scroll-snap-start mb-8 relative opacity-100 visible">
            <div className="max-w-full w-[600px] p-6 bg-white/95 rounded-xl mb-4 transition-transform duration-300 hover:-translate-y-1 relative overflow-visible">
              <div className="flex lg:items-start lg:flex-row flex-col-reverse items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-6 text-black">About DSU DEVHACK 2025</h2>
                  <p className="text-lg leading-relaxed mb-6 text-[#333333]">
                    DSU DEVHACK 2025 is a national-level hackathon pushing the boundaries of innovation in AI, ML, IoT, Blockchain, Cybersecurity, and Cloud at DSU Harohalli, Banglore, Karnataka. 🛠
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-[#333333]">
                    This event gathers brilliant minds nationwide to create revolutionary solutions. It provides a platform for developers, designers, and enthusiasts to transform ideas, showcase skills, and network. 🤝
                  </p>
                </div>
                <img 
                  src="/images/hb-logo.png" 
                  alt="DSU Campus" 
                  className="w-48 h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Why Participate section */}
          <div className="min-h-[60vh] flex flex-col justify-center py-6 scroll-snap-start mb-8 relative opacity-100 visible">
            <div className="max-w-full w-[600px] p-6 bg-white/95 rounded-xl mb-4 transition-transform duration-300 hover:-translate-y-1 relative overflow-visible">
              <div className="flex items-center lg:items-start  lg:flex-row flex-col-reverse gap-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-6 text-black">Why Participate?</h2>
                  <div className="text-lg leading-relaxed mb-6 text-[#333333] space-y-3">
                    <p>Showcase your technical skills and creativity</p>
                    <p>Network with industry professionals and peers</p>
                    <p>Win exciting prizes and recognition</p>
                    <p>Learn new technologies and methodologies</p>
                    <p>Build solutions that address real-world challenges</p>
                  </div>
                </div>
                <img 
                  src="/images/hb-logo.png" 
                  alt="DSU Campus" 
                  className="w-48 h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Keyboard */}
        <div 
          ref={keyboardWrapRef}
          className="relative w-full h-screen flex flex-col justify-center items-center pl-8 overflow-hidden"
        >
          {/* University info */}
          <div className="absolute top-5 z-[5] max-w-[400px] flex items-center p-4">
            <img 
              src="/images/dsu.png" 
              alt="DSU Logo" 
              className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold m-0 text-black">Dayananda Sagar University</h3>
              <p className="text-sm mt-1 mb-0 text-[#333]">School of Engineering, Harohalli</p>
            </div>
          </div>

          {/* Keyboard grid */}
          <div className="relative lg:w-full lg:h-[600px] flex justify-start items-center z-[1]">
            {keyboardLetters.map((letter, index) => (
              <div
                key={index}
                ref={el => keysRef.current[index] = el}
                className={`absolute w-[150px] h-[150px] rounded-2xl flex justify-center items-center shadow-[0_8px_0_rgba(0,0,0,0.4)] origin-bottom transition-transform duration-200 cursor-pointer z-[2] border border-black/10 ${getKeyPositionClass(index)}`}
                onMouseEnter={() => handleKeyHover(index, true)}
                onMouseLeave={() => handleKeyHover(index, false)}
              >
                <span className="text-6xl font-bold text-black text-center select-none text-shadow-sm">{letter}</span>
                <div className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-black/30 rounded-b-2xl z-[-1]"></div>
              </div>
            ))}

            {/* Cursor SVG */}
            <svg
              ref={cursorRef}
              className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 filter drop-shadow-md pointer-events-none will-change-transform opacity-95"
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
            <div className="absolute bottom-[90px] right-[150px] z-[5] pointer-events-none">
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
      </div>
    </section>
  );
};

// Helper function for keyboard key positions
const getKeyPositionClass = (index: number): string => {
  const positions = [
    'top-[120px] left-[150px] -rotate-12 bg-[#FF6B00]', // D
    'top-[180px] left-[250px] rotate-6 bg-[#7B61FF]', // E
    'top-[120px] left-[400px] -rotate-6 bg-[#E5CBFF]', // V
    'top-[280px] left-[400px] rotate-12 bg-[#FFD600]', // H
    'top-[350px] left-[250px] -rotate-6 bg-[#FF6B00]', // A
    'top-[200px] left-[550px] rotate-6 bg-[#00D2FF]', // C
    'top-[350px] left-[550px] -rotate-6 bg-[#E5CBFF]', // K
  ];
  return positions[index];
};
