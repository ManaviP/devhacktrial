import React, { useState } from 'react';
import LoadingProgressBar from '../components/LoadingProgressBar';
import { X } from "lucide-react";
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Home } from './Home';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const getCurrentDate = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="light-grid-background dark:dark-grid-background min-h-screen w-full flex flex-col items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-3xl mt-4">
          <div className="flex justify-end mb-4">
            <ThemeSwitcher />
          </div>
          
          {/* Header bar with date and close button */}
          <div className="light-header-bar dark:dark-header-bar flex justify-between items-center mb-0 bg-white dark:bg-gray-800">
            <div className="flex items-center">
              <span className="text-indigo-500 dark:text-indigo-400 font-mono">&lt;date&gt;</span>
              <span className="text-gray-800 dark:text-gray-200 px-2 font-mono">{getCurrentDate()}</span>
              <span className="text-indigo-500 dark:text-indigo-400 font-mono">&lt;/date&gt;</span>
            </div>
            <div className="flex items-center">
              <button className="light-close-btn dark:dark-close-btn w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
          </div>
          
          {/* Main loading container */}
          <div className="light-loading-container dark:dark-loading-container h-96 flex flex-col items-center justify-center bg-white dark:bg-gray-800">
            <LoadingProgressBar onComplete={handleLoadingComplete} />
          </div>
        </div>
      </div>
    );
  }

  return <Home />;
};

export default Index;
