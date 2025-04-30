import { useState } from 'react';
import './SponsorsPageSection.css';

interface Sponsor {
  name: string;
  logo: string;
  tag: string;
  type: 'gold' | 'silver';
  bgColor?: string;
}

export const SponsorsPageSection = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);

  const sponsors: Sponsor[] = [
    { name: "Pyth", logo: "PYTH", tag: "[P]", type: "gold" },
    { name: "Uni", logo: "UNI", tag: "[P]", type: "gold" },
    { name: "Wormhole", logo: "WORMHOLE", tag: "[P]", type: "gold" },
    { name: "Exponential Win", logo: "e^win", tag: "[P]", type: "silver" },
    { name: "Navi", logo: "NAVI", tag: "[P]", type: "silver" },
    { name: "Scallop", logo: "Scallop", tag: "[P]", type: "silver" },
    { name: "Bucket", logo: "Bucket", tag: "[P]", type: "silver" },
    { name: "Alibaba Cloud", logo: "Alibaba Cloud", tag: "[P]", type: "silver" },
    { name: "Hippo", logo: "HIPPO", tag: "[P]", type: "silver" },
    { name: "Dubhe", logo: "DUBHE", tag: "[P]", type: "silver", bgColor: "bg-yellow-500" },
  ];

  const goldSponsors = sponsors.filter(s => s.type === 'gold');
  const silverSponsors = sponsors.filter(s => s.type === 'silver');

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="sponsors-title">
          Our Sponsors
        </h2>

        <div className="py-8">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {goldSponsors.map((sponsor, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredSponsor(idx)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  <div className={`bg-hackathon-navy border border-gray-800 h-64 p-4 flex flex-col transition-all duration-300 ${hoveredSponsor === idx ? 'bg-hackathon-navy/80 border-blue-500' : ''}`}>
                    <div className="text-gray-400 text-sm mb-4">
                      {sponsor.name} {sponsor.tag}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className={`text-4xl font-bold transform transition-transform duration-500 ${hoveredSponsor === idx ? 'scale-110' : ''}`}>
                        {sponsor.logo}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 ${hoveredSponsor === idx ? 'opacity-100' : ''}`}
                  ></div>

                  {/* Custom cursor indicator */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12L9 18M15 12L9 6M15 12H3M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Silver Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-1">
              {silverSponsors.map((sponsor, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredSponsor(idx + goldSponsors.length)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  <div className={`${sponsor.bgColor || 'bg-hackathon-navy'} border border-gray-800 h-32 p-4 flex flex-col transition-all duration-300 ${hoveredSponsor === idx + goldSponsors.length ? 'border-blue-500' : ''}`}>
                    <div className="text-gray-400 text-xs mb-2">
                      {sponsor.name}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className={`text-lg font-medium transform transition-transform duration-500 ${hoveredSponsor === idx + goldSponsors.length ? 'scale-110' : ''}`}>
                        {sponsor.logo}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${hoveredSponsor === idx + goldSponsors.length ? 'opacity-100' : ''}`}
                  ></div>

                  {/* Custom cursor indicator */}
                  <div className="absolute top-2 right-2 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12L9 18M15 12L9 6M15 12H3M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="px-8 py-4 bg-transparent border border-gray-700 hover:bg-gray-800 hover:border-blue-500 transition-all duration-300 text-white font-medium group relative overflow-hidden"
            >
              <span className="relative z-10">Become a sponsor</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
