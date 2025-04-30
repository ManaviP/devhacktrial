import { KeyboardCanvas } from '../../three/KeyboardCanvas';
import './OverviewSection.css';

interface OverviewSectionProps {
  theme: string;
}

export const OverviewSection = ({ theme }: OverviewSectionProps) => {
  return (
    <section id="overview" className="overview-section">
      <div className="overview-content">
        <h2 className="overview-title">
          Event Overview
        </h2>
        <div className="space-y-8">
          <p className="overview-text">
            Sui Overflow 2025 is the second edition of our global virtual hackathon, uniting builders and developers worldwide to redefine innovation, performance, and ownership.
          </p>
          <p className="overview-highlight">
            With over $500,000 USD in prizes across 9 project tracks,
          </p>
          <p className="overview-text">
            take this opportunity to shape the future on Web3's most powerful and composable platform.
          </p>
          <p className="overview-text">
            Hackathon winners also have the chance to be invited to
            <span className="overview-highlight"> exclusive developer initiatives</span>, offering tailored support and access to a high-quality network of builders.
          </p>
        </div>
      </div>
      <div className="keyboard-canvas-container">
        <KeyboardCanvas theme={theme} />
      </div>
    </section>
  );
};
