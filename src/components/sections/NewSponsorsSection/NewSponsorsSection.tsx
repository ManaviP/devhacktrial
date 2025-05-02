import { useState, useEffect } from 'react';
import './NewSponsorsSection.css';

interface SponsorLogo {
  name: string;
  logoUrl: string;
  bgColor?: string;
}

export const NewSponsorsSection = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on component mount
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    detectTouch();
    window.addEventListener('touchstart', detectTouch, { once: true });

    return () => {
      window.removeEventListener('touchstart', detectTouch);
    };
  }, []);

  // Track Sponsor (1 box)
  const mainSponsors: SponsorLogo[] = [
    {
      name: "Tezos India",
      logoUrl: "/sponsors/tezos.png",
      bgColor: "#f3e8ff" // Light purple background
    }
  ];

  // Gold Sponsors (4 boxes)
  const secondarySponsors: SponsorLogo[] = [
    {
      name: "Verbwire",
      logoUrl: "/sponsors/verbwire.svg",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "Devfolio",
      logoUrl: "/sponsors/Devfolio_Logo-White.png",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "Polygon",
      logoUrl: "/sponsors/Polygon_Logo-White@2x.png",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "Aptos",
      logoUrl: "/sponsors/Aptos.png",
      bgColor: "#0f172a" // Dark blue background
    }
  ];

  // Silver Sponsors (5 boxes)
  const tertiarySponsors: SponsorLogo[] = [
    {
      name: "AIC DSU Innovation Foundation",
      logoUrl: "/sponsors/aic-dsu.png",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "ETHIndia",
      logoUrl: "/sponsors/ethindia-light.svg",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "Axure",
      logoUrl: "/sponsors/axure.png",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: ".XYZ",
      logoUrl: "/sponsors/xyz-white-logo.svg",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "Beeceptor",
      logoUrl: "/sponsors/beeceptor-white.svg",
      bgColor: "#0f172a" // Dark blue background
    }
  ];

  // Community Partners (2 boxes)
  const communityPartners: SponsorLogo[] = [
    {
      name: "AOPS Art of Problem Solving",
      logoUrl: "/sponsors/AoPS_Logo.png",
      bgColor: "#0f172a" // Dark blue background
    },
    {
      name: "UrBuddy by OSCode",
      logoUrl: "/sponsors/urBuddy.png",
      bgColor: "#0f172a" // Dark blue background
    }
  ];

  return (
    <section id="sponsors" className="new-sponsors-section">
      <div className="container mx-auto px-4 py-8">
        <h2 className="sponsors-title text-center mb-12">
          Our Sponsors
        </h2>

        {/* Top row heading */}
        <h3 className="sponsor-row-heading track">Track Sponsor</h3>

        {/* Top row - larger sponsor boxes */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {mainSponsors.map((sponsor, index) => (
            <div
              key={`main-${index}`}
              className={`sponsor-box main-sponsor ${isTouchDevice ? 'touch-device' : ''}`}
              data-hovered={hoveredSponsor === `main-${index}`}
              onMouseEnter={() => setHoveredSponsor(`main-${index}`)}
              onMouseLeave={() => setHoveredSponsor(null)}
              onTouchStart={() => setHoveredSponsor(`main-${index}`)}
              onTouchEnd={() => setTimeout(() => setHoveredSponsor(null), 300)}
            >
              <div className="sponsor-label">{sponsor.name}</div>
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150?text=' + sponsor.name;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Middle row heading */}
        <h3 className="sponsor-row-heading gold">Gold Sponsors</h3>

        {/* Middle row - smaller sponsor boxes */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {secondarySponsors.map((sponsor, index) => (
            <div
              key={`secondary-${index}`}
              className={`sponsor-box secondary-sponsor ${isTouchDevice ? 'touch-device' : ''}`}
              data-hovered={hoveredSponsor === `secondary-${index}`}
              onMouseEnter={() => setHoveredSponsor(`secondary-${index}`)}
              onMouseLeave={() => setHoveredSponsor(null)}
              onTouchStart={() => setHoveredSponsor(`secondary-${index}`)}
              onTouchEnd={() => setTimeout(() => setHoveredSponsor(null), 300)}
            >
              <div className="sponsor-label">{sponsor.name}</div>
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/80?text=' + sponsor.name;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row heading */}
        <h3 className="sponsor-row-heading silver">Silver Sponsors</h3>

        {/* Bottom row - silver sponsor boxes */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {tertiarySponsors.map((sponsor, index) => (
            <div
              key={`tertiary-${index}`}
              className={`sponsor-box tertiary-sponsor ${isTouchDevice ? 'touch-device' : ''}`}
              data-hovered={hoveredSponsor === `tertiary-${index}`}
              onMouseEnter={() => setHoveredSponsor(`tertiary-${index}`)}
              onMouseLeave={() => setHoveredSponsor(null)}
              onTouchStart={() => setHoveredSponsor(`tertiary-${index}`)}
              onTouchEnd={() => setTimeout(() => setHoveredSponsor(null), 300)}
            >
              <div className="sponsor-label">{sponsor.name}</div>
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/80?text=' + sponsor.name;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Community Partners heading */}
        <h3 className="sponsor-row-heading community">Community Partners</h3>

        {/* Community Partners row */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {communityPartners.map((sponsor, index) => (
            <div
              key={`community-${index}`}
              className={`sponsor-box community-sponsor ${isTouchDevice ? 'touch-device' : ''}`}
              data-hovered={hoveredSponsor === `community-${index}`}
              onMouseEnter={() => setHoveredSponsor(`community-${index}`)}
              onMouseLeave={() => setHoveredSponsor(null)}
              onTouchStart={() => setHoveredSponsor(`community-${index}`)}
              onTouchEnd={() => setTimeout(() => setHoveredSponsor(null), 300)}
            >
              <div className="sponsor-label">{sponsor.name}</div>
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/80?text=' + sponsor.name;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor button */}
        <div className="become-sponsor-container">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="become-sponsor-button"
          >
            <div className="become-sponsor-button-text">
              Become a sponsor
            </div>
            <div className="arrow-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
