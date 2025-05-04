import { Link } from 'react-router-dom';
import './TopHeader.css';

export const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="header-content">
        <Link to="/" className="header-title">
          DSU DevHacks '25
        </Link>
        <div className="header-date">
          <span className="date-tag">&lt;date&gt;</span> February-May, 2025 <span className="date-tag">&lt;/date&gt;</span>
        </div>
      </div>
    </header>
  );
};
