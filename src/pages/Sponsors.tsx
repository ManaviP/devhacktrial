
import { MainLayout } from '../components/layout/MainLayout';

export const Sponsors = () => {
  return (
    <MainLayout>
      <div className="container px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Sponsors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-6">
          {/* Tier 1 sponsors - larger display */}
          {[
            { name: "Pyth", tag: "[P]", logo: "PYTH" },
            { name: "Uni", tag: "[P]", logo: "UNI" },
            { name: "Wormhole", tag: "[P]", logo: "WORMHOLE" }
          ].map((sponsor, index) => (
            <div key={index} className="bg-hackathon-darkBlue border border-gray-800 min-h-[240px] p-4 flex flex-col">
              <div className="text-gray-400 text-sm mb-4">
                {sponsor.name} {sponsor.tag}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-3xl font-bold text-white">{sponsor.logo}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-7 gap-1 mb-12">
          {/* Tier 2 sponsors - smaller display */}
          {[
            { name: "Exponential Win", tag: "[P]", logo: "e^win" },
            { name: "Navi", tag: "[P]", logo: "NAVI" },
            { name: "Scallop", tag: "[P]", logo: "Scallop" },
            { name: "Bucket", tag: "[P]", logo: "Bucket" },
            { name: "Alibaba Cloud", tag: "[P]", logo: "Alibaba Cloud" },
            { name: "Hippo", tag: "[P]", logo: "HIPPO" },
            { name: "Dubhe", tag: "[P]", logo: "DUBHE" }
          ].map((sponsor, index) => (
            <div key={index} className={`bg-hackathon-darkBlue border border-gray-800 min-h-[160px] p-4 flex flex-col ${index === 6 ? 'bg-yellow-500' : ''}`}>
              <div className="text-gray-400 text-sm mb-2">
                {sponsor.name} {sponsor.tag}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-lg font-medium text-white">{sponsor.logo}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <button className="w-full bg-white/5 border border-gray-800 py-6 text-center font-bold text-lg hover:bg-white/10 transition-colors">
            Become a sponsor
          </button>
        </div>
      </div>
    </MainLayout>
  );
};
