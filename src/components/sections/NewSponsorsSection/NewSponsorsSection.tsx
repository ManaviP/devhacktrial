import './NewSponsorsSection.css';
import './NewSponsorsGrid.css';

interface SponsorLogo {
  name: string;
  logoUrl: string;
  bgColor?: string;
}

export const NewSponsorsSection = () => {

  // Platinum/Track Sponsor (1 box)
  const platinumRowSponsors: SponsorLogo[] = [
    {
      name: "Tezos India",
      logoUrl: "/sponsors/tezos.png",
    }
  ];

  // Gold Sponsors (4 boxes)
  const topRowSponsors: SponsorLogo[] = [
    {
      name: "Verbwire",
      logoUrl: "/sponsors/verbwire.svg",
    },
    {
      name: "Devfolio",
      logoUrl: "/sponsors/Devfolio_Logo-White.png",
    },
    {
      name: "Polygon",
      logoUrl: "/sponsors/Polygon_Logo-White@2x.png",
    },
    {
      name: "Aptos",
      logoUrl: "/sponsors/Aptos.png",
    }
  ];

  // Silver Sponsors (5 boxes)
  const middleRowSponsors: SponsorLogo[] = [
    {
      name: "AIC DSU Innovation Foundation",
      logoUrl: "/sponsors/aic-dsu.png",
    },
    {
      name: "ETHIndia",
      logoUrl: "/sponsors/ethindia-light.svg",
    },
    {
      name: "Axure",
      logoUrl: "/sponsors/axure.png",
    },
    {
      name: ".XYZ",
      logoUrl: "/sponsors/xyz-white-logo.svg",
    },
    {
      name: "Beeceptor",
      logoUrl: "/sponsors/beeceptor-white.svg",
    }
  ];

  // Community Partners (2 boxes)
  const bottomRowSponsors: SponsorLogo[] = [
    {
      name: "AOPS Art of Problem Solving",
      logoUrl: "/sponsors/AoPS_Logo.png",
    },
    {
      name: "UrBuddy by OSCode",
      logoUrl: "/sponsors/urBuddy.png",
    }
  ];



  return (
    <section id="sponsors" className="new-sponsors-section">
      <div className="container mx-auto px-4 py-8">
        <h2 className="sponsors-title text-center mb-12">
          Our Sponsors
        </h2>



        {/* New Sponsors Grid Layout */}
        <div className="sponsors-grid-container mb-12">
          {/* Platinum Sponsors heading */}
          <div className="sponsors-grid-heading">
            <h4>Platinum Sponsors</h4>
          </div>

          {/* Platinum row - 1 extra large sponsor */}
          <div className="sponsors-platinum-row">
            {platinumRowSponsors.map((sponsor, index) => (
              <div
                key={`platinum-${index}`}
                className="sponsor-platinum-box"
              >
                <div className="sponsor-name-label">
                  <span data-sponsor-el="left">{sponsor.name}</span>
                  <span data-sponsor-el="arrow">[↗]</span>
                </div>
                <div className="sponsor-logo-wrapper">
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/200?text=' + sponsor.name;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gold Sponsors heading */}
          <div className="sponsors-grid-heading">
            <h4>Gold Sponsors</h4>
          </div>

          {/* Top row - 3 large sponsors */}
          <div className="sponsors-top-row">
            {topRowSponsors.map((sponsor, index) => (
              <div
                key={`top-${index}`}
                className="sponsor-top-box"
              >
                <div className="sponsor-name-label">
                  <span data-sponsor-el="left">{sponsor.name}</span>
                  <span data-sponsor-el="arrow">[↗]</span>
                </div>
                <div className="sponsor-logo-wrapper">
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
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

          {/* Silver Sponsors heading */}
          <div className="sponsors-grid-heading">
            <h4>Silver Sponsors</h4>
          </div>

          {/* Middle row - 7 smaller sponsors */}
          <div className="sponsors-middle-row">
            {middleRowSponsors.map((sponsor, index) => (
              <div
                key={`middle-${index}`}
                className="sponsor-middle-box"
              >
                <div className="sponsor-name-label">
                  <span data-sponsor-el="left">{sponsor.name}</span>
                  <span data-sponsor-el="arrow">[↗]</span>
                </div>
                <div className="sponsor-logo-wrapper">
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/100?text=' + sponsor.name;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Community Partners heading */}
          <div className="sponsors-grid-heading">
            <h4>Community Partners</h4>
          </div>

          {/* Bottom row - 7 smaller sponsors */}
          <div className="sponsors-bottom-row">
            {bottomRowSponsors.map((sponsor, index) => (
              <div
                key={`bottom-${index}`}
                className="sponsor-bottom-box"
              >
                <div className="sponsor-name-label">
                  <span data-sponsor-el="left">{sponsor.name}</span>
                  <span data-sponsor-el="arrow">[↗]</span>
                </div>
                <div className="sponsor-logo-wrapper">
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/100?text=' + sponsor.name;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
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
