import './PrizesSection.css';

type PrizeCard = {
  place: string;
  amount: string;
  color: string;
  image: string;
};

export const PrizesSection = () => {
  const prizes: PrizeCard[] = [
    {
      place: "1st place",
      amount: "$30,000 USD",
      color: "yellow",
      image: "/images/prizes/money-coin.svg"
    },
    {
      place: "2nd place",
      amount: "$15,000 USD",
      color: "blue",
      image: "/images/prizes/gems.svg"
    },
    {
      place: "3rd place",
      amount: "$10,000 USD",
      color: "cyan",
      image: "/images/prizes/coins.svg"
    },
    {
      place: "4th place",
      amount: "$7,500 USD",
      color: "green",
      image: "/images/prizes/money.svg"
    },
  ];

  return (
    <>
      {/* Header bar */}
      <div className="fixed-header">
        <div className="header-content">
          <div className="header-title">Sui Overflow '25</div>
          <div className="header-date">
            <span className="date-tag">&lt;date&gt;</span> February-May, 2025 <span className="date-tag">&lt;/date&gt;</span>
          </div>
        </div>
      </div>

      <section id="prizes" className="prizes-section">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="prizes-heading">
            Prizes
          </h1>

          <div className="divider"></div>

          <h2 className="track-prizes-heading">
            Track prizes
          </h2>

          <div className="prizes-grid">
            {prizes.map((prize, index) => (
              <div key={index} className="prize-card">
                <div className="prize-header">
                  <div className="prize-label">
                    <span className="prize-hash">#</span>
                    <span className="prize-place">{prize.place}</span>
                    <span className="prize-bracket">{'}'}</span>
                  </div>
                </div>
                <div className="prize-content">
                  <img
                    src={prize.image}
                    alt={prize.place}
                    className="prize-image"
                  />
                </div>
                <div className="prize-footer">
                  <div className="prize-amount">{prize.amount}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="divider"></div>

          <div className="awards-section">
            <h2 className="awards-heading">Awards</h2>
            <p className="awards-subheading">These can be won alongside other prizes.</p>
          </div>

          {/* Add padding at the bottom to prevent content from being hidden behind the fixed navbar */}
          <div className="pb-16"></div>
        </div>
      </section>

      {/* Fixed navigation bar */}
      <div className="fixed-nav">
        <div className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#tracks" className="nav-link active">Tracks & Prizes</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#handbook" className="nav-link">Participant Handbook</a>
          <a href="#discord" className="nav-link">Discord</a>
          <a href="#register" className="nav-link register">Register</a>
        </div>
      </div>
    </>
  );
};
