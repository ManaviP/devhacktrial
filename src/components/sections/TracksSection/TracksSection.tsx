import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3 } from 'lucide-react';
import './TracksSection.css';

interface Track {
  name: string;
  color: string;
  description: string;
  sponsor: string;
  bgClass: string;
  icon: string;
}

export const TracksSection = () => {
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);

  const tracks: Track[] = [
    {
      name: "DeFi",
      color: "purple",
      description: "Build next-gen DeFi apps with a special focus on BTCFi & novel uses for BTC bridging.",
      sponsor: "PYTH",
      bgClass: "bg-purple-900/20",
      icon: "💰"
    },
    {
      name: "Infra & Tooling",
      color: "pink",
      description: "Develop building blocks and dev tooling for greater scalability, composability, and interoperability.",
      sponsor: "UNI",
      bgClass: "bg-pink-600/20",
      icon: "🛠️"
    },
    {
      name: "AI",
      color: "green",
      description: "Leverage blockchain to build agents and apps at the intersection of AI and decentralized technology.",
      sponsor: "Alibaba Cloud",
      bgClass: "bg-green-900/20",
      icon: "🤖"
    },
    {
      name: "Cryptography",
      color: "yellow",
      description: "Explore cryptographic innovations and applications on the platform.",
      sponsor: "Wormhole",
      bgClass: "bg-yellow-500/20",
      icon: "🔐"
    },
    {
      name: "Degen",
      color: "cyan",
      description: "Create engaging degen content, games, and experiences for the ecosystem.",
      sponsor: "Scallop",
      bgClass: "bg-cyan-500/20",
      icon: "🎮"
    },
    {
      name: "Gaming",
      color: "orange",
      description: "Build immersive gaming experiences using blockchain technology.",
      sponsor: "GameFi",
      bgClass: "bg-orange-500/20",
      icon: "🎯"
    },
  ];

  // Auto-rotate tracks every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredTrack === null) { // Only auto-rotate if no track is being hovered
        setActiveTrack((prev) => (prev + 1) % tracks.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hoveredTrack, tracks.length]);

  return (
    <section id="tracks" className="tracks-section">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="tracks-title">
          Project Tracks
        </h2>

        <div className="py-8">
          <div className="flex items-center justify-center mb-12">
            <Grid3X3 className="w-6 h-6 text-blue-400 mr-2" />
            <h2 className="text-3xl md:text-5xl font-bold text-center">Tracks</h2>
          </div>

          {/* Track selector circles */}
          <div className="flex justify-center mb-12 gap-3">
            {tracks.map((track, index) => (
              <motion.button
                type="button"
                key={index}
                className={`w-4 h-4 rounded-full ${index === activeTrack ? 'bg-blue-500' : 'bg-gray-700'} transition-colors`}
                onClick={() => setActiveTrack(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Featured track */}
          <div className="relative h-[400px] sm:h-[500px] mb-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`h-full w-full rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row ${tracks[activeTrack].bgClass} relative overflow-hidden`}>
                  {/* Background effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute rounded-full bg-${tracks[activeTrack].color}-500/10`}
                        style={{
                          width: 20 + Math.random() * 100,
                          height: 20 + Math.random() * 100,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 5 + Math.random() * 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 flex items-center justify-center p-4 sm:p-8 relative z-10 mb-6 md:mb-0">
                    <motion.div
                      className={`w-32 h-32 sm:w-60 sm:h-60 rounded-full ${tracks[activeTrack].bgClass} border-4 border-${tracks[activeTrack].color}-500/30 flex items-center justify-center text-4xl sm:text-6xl shadow-xl shadow-${tracks[activeTrack].color}-500/20`}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                      }}
                    >
                      {tracks[activeTrack].icon}
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-center p-4 sm:p-8 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">{tracks[activeTrack].name}</h3>
                      <p className="text-base sm:text-xl text-gray-100 mb-6 sm:mb-8">{tracks[activeTrack].description}</p>
                      <div className="flex items-center">
                        <span className="mr-3 text-gray-300">Track sponsor:</span>
                        <span className={`text-${tracks[activeTrack].color}-300 font-bold text-xl`}>{tracks[activeTrack].sponsor}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Track list - mobile responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                className={`bg-hackathon-darkBlue border border-gray-800 p-3 sm:p-4 rounded-lg cursor-pointer transition-all ${activeTrack === index ? 'border-blue-500 shadow-lg shadow-blue-500/10' : ''}`}
                onClick={() => setActiveTrack(index)}
                onMouseEnter={() => setHoveredTrack(index)}
                onMouseLeave={() => setHoveredTrack(null)}
                whileHover={{ y: -5 }}
                animate={{
                  scale: activeTrack === index ? 1.05 : 1,
                }}
              >
                <div className="flex items-center">
                  <div className={`${track.bgClass} h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center text-lg sm:text-xl mr-2 sm:mr-3`}>
                    {track.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-medium truncate">{track.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
