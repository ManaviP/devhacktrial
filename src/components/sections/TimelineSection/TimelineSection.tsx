import { Calendar } from 'lucide-react';
import Timeline2 from './Timeline2';
import './timeline.css';
import { useTheme } from '../../../lib/theme-context';
import { motion } from 'framer-motion';

export const TimelineSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="timeline"
      className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-hackathon-navy' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Calendar className="w-6 h-6 text-blue-400 mr-2" />
          <h2
            className={`text-3xl md:text-5xl font-bold text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Timeline
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Timeline2 />
        </motion.div>
      </div>
    </section>
  );
};
