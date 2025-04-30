import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { ThreeBackground } from '../three/ThreeBackground';
import { useTheme } from '../../lib/theme-context';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface MainLayoutProps {
  children: ReactNode;
  showBackground?: boolean;
  backgroundVariant?: 'default' | 'light' | 'dark';
}

export const MainLayout = ({ children, showBackground = true, backgroundVariant = 'default' }: MainLayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {showBackground && <ThreeBackground variant={theme === 'dark' ? 'dark' : 'light'} />}
      <Navigation />
      <div className="fixed top-20 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};
