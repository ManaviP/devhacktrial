
import { MainLayout } from '../components/layout/MainLayout';
import { HeroSection } from '../components/sections/HeroSection';
import { OverviewSection } from '../components/sections/OverviewSection';
import { TracksSection } from '../components/sections/TracksSection';
import { PrizesSection } from '../components/sections/PrizesSection';
import { TimelineSection } from '../components/sections/TimelineSection';
import { NewSponsorsSection } from '../components/sections/NewSponsorsSection';
import { FAQPageSection } from '../components/sections/FAQPageSection';
import { Footer } from '../components/layout/Footer';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../lib/theme-context';

export const Home = () => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      {/* Theme Switcher Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>

      {/* Sections with KeyboardCanvas */}
      <div className="relative">
        <HeroSection theme={theme} />
        <OverviewSection theme={theme} />
      </div>

      {/* All other sections without KeyboardCanvas */}
      <div className="relative w-full">
        <TracksSection />
        <PrizesSection />
        <TimelineSection />
        <NewSponsorsSection />
        <FAQPageSection />

        <Footer />
      </div>
    </MainLayout>
  );
};



