import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyboardCanvas } from '../../three/KeyboardCanvas';
import './HeroSection.css';

interface HeroSectionProps {
  theme: string;
}

export const HeroSection = ({ theme }: HeroSectionProps) => {
  return (
    <section id="hero" className="hero-section">
     

      <div className="w-1/2 pl-12 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="hero-title">
            Sui
          </h1>
          <h1 className="hero-title">
            Overflow
          </h1>
          <h1 className="hero-title">
            2025
          </h1>
          <p className="hero-subtitle">
            February-May, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <Link
            to="/register"
            className="register-button"
          >
            Register
          </Link>
          <div className="px-4 py-3 text-blue-500 dark:text-blue-400">⌘</div>
        </motion.div>
      </div>
      <div className="keyboard-canvas-container">
        <KeyboardCanvas theme={theme} />
      </div>
    </section>
  );
};
