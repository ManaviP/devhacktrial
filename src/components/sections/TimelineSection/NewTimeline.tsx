import React from 'react';
import './NewTimeline.css';

export const NewTimeline: React.FC = () => {
  return (
    <div className="new-timeline-container">
      <h2 className="new-timeline-heading">Timeline</h2>

      <div className="new-timeline-grid">
        {/* Column 1 */}
        <div className="timeline-column">
          <div className="timeline-id">
            01
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Registration starts</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">Start teaming up with your buddies to hack!</div>
              <div className="timeline-date">August         (tentative)</div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="timeline-column">
          <div className="timeline-id">
            02
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Registration ends</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">final chance to register and form your teams!</div>
              <div className="timeline-date">september (tentative)</div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="timeline-column">
          <div className="timeline-id">
            03
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Online Idea Submission Deadline</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">This will be your final chance to submit your 3 page ppt!</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-timeline-grid mt-8">
        {/* Column 4 */}
        <div className="timeline-column">
          <div className="timeline-id">
            04
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Team shortlisting</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">Announcing the shortlisted teams for the final round of Hackathon!</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>

        {/* Column 5 */}
        <div className="timeline-column">
          <div className="timeline-id">
            05
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Hacking Period Starts</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">Join with over 150+ innovative minds and start building.</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>

        {/* Column 6 */}
        <div className="timeline-column">
          <div className="timeline-id">
            06
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Mid-term Submission</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">Initial submission on GitHub for progress review.</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-timeline-grid mt-8">
        {/* Column 7 */}
        <div className="timeline-column">
          <div className="timeline-id">
            07
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Final Submission Deadline</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">Submit your completed project with documentation.</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>

        {/* Column 8 */}
        <div className="timeline-column">
          <div className="timeline-id">
            08
          </div>
          <div className="timeline-arrow">
            <svg className="timeline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="timeline-title">
            <h3>Final Evaluation Round</h3>
          </div>

          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-label">We'll review your project and let you know the results.</div>
              <div className="timeline-date">September (tentative)</div>
            </div>
          </div>
        </div>

        {/* Empty column to maintain grid layout */}
        <div className="timeline-column invisible"></div>
      </div>
    </div>
  );
};
