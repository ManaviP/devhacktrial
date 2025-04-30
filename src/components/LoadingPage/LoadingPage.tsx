import { useState, useEffect } from 'react';
import './LoadingPage.css';

interface LoadingPageProps {
  onComplete: () => void;
  initialProgress?: number;
  loadingTime?: number;
}

export const LoadingPage = ({
  onComplete,
  initialProgress = 0,
  loadingTime = 3000
}: LoadingPageProps) => {
  const [progress, setProgress] = useState(initialProgress);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Add a small delay before calling onComplete
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, loadingTime / 20);
    
    return () => clearInterval(interval);
  }, [loadingTime, onComplete]);
  
  const getCurrentDate = () => {
    return "February-May, 2025";
  };
  
  // Create an array of 20 segments for the progress bar
  const segments = Array.from({ length: 20 }, (_, i) => {
    const segmentProgress = (i + 1) * 5;
    return {
      filled: progress >= segmentProgress,
      active: progress >= segmentProgress - 5 && progress < segmentProgress
    };
  });
  
  if (!isVisible) return null;
  
  return (
    <div className="loading-page-container">
      <div className="loading-modal">
        <div className="loading-header">
          <div className="loading-date">
            <span className="loading-date-tag">&lt;date&gt;</span> {getCurrentDate()} <span className="loading-date-tag">&lt;/date&gt;</span>
          </div>
          <button className="loading-close-button">×</button>
        </div>
        <div className="loading-content">
          <div className="loading-progress-container">
            <div className="loading-progress-header">
              <div className="loading-progress-text">
                <div className="loading-progress-icon"></div>
                INITIALIZING...
              </div>
              <div className="loading-progress-percentage">{progress}%</div>
            </div>
            <div className="loading-progress-bar">
              {segments.map((segment, index) => (
                <div 
                  key={index} 
                  className={`loading-progress-bar-segment ${segment.filled ? (segment.active ? 'active' : '') : 'empty'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
