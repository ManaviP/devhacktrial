import Spline from '@splinetool/react-spline';
import './HeroSection.css';

interface HeroSectionProps {
  theme?: 'light' | 'dark';
}

export const HeroSection = ({ theme = 'light' }: HeroSectionProps) => {
  return (
    <section id="hero" className="hero-section">
      <Spline scene="https://prod.spline.design/zSRjFvfyHTQnGi6q/scene.splinecode" />
    </section>
  );
};
