
import { MainLayout } from '../components/layout/MainLayout';
import { HeroSection } from '../components/sections/HeroSection';
import { OverviewSection } from '../components/sections/OverviewSection';
import { TracksSection } from '../components/sections/TracksSection';
import { PrizesSection } from '../components/sections/PrizesSection';
import { TimelineSection } from '../components/sections/TimelineSection';
import { SponsorsPageSection } from '../components/sections/SponsorsPageSection';
import { JudgesMentorsPageSection } from '../components/sections/JudgesMentorsPageSection';
import { TeamPageSection } from '../components/sections/TeamPageSection';
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
        <SponsorsPageSection />
        <JudgesMentorsPageSection />
        <TeamPageSection />
        <FAQPageSection />

        <Footer />
        {/* Add padding at the bottom to prevent content from being hidden behind the fixed navbar */}
        <div className="pb-16"></div>
      </div>
    </MainLayout>
  );
};



