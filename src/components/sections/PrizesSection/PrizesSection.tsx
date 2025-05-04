import './PrizesSection.css';

type PrizeCard = {
  place: string;
  amount: string;
  color: string;
  image: string;
};

type TrackPrize = {
  name: string;
  sponsor: string;
  prize: string;
  color: string;
  logoUrl: string;
};

type Benefit = {
  provider: string;
  description: string;
  value?: string;
  eligibility: string;
  logoUrl?: string;
};

export const PrizesSection = () => {
  const prizes: PrizeCard[] = [
    {
      place: "1st place",
      amount: "₹70,000",
      color: "yellow",
      image: "/images/prizes/money-coin.svg"
    },
    {
      place: "2nd place",
      amount: "₹40,000",
      color: "blue",
      image: "/images/prizes/gems.svg"
    },
    {
      place: "3rd place",
      amount: "₹20,000",
      color: "cyan",
      image: "/images/prizes/coins.svg"
    },
    {
      place: "4th place",
      amount: "₹20,000",
      color: "green",
      image: "/images/prizes/money.svg"
    },
  ];

  const trackPrizes: TrackPrize[] = [
    {
      name: "Best Tezos India Project",
      sponsor: "Tezos India",
      prize: "₹50,000",
      color: "yellow",
      logoUrl: "/sponsors/tezos.png"
    },
    {
      name: "Best Verbwire API Project",
      sponsor: "Verbwire",
      prize: "₹25,000",
      color: "blue",
      logoUrl: "/sponsors/verbwire.svg"
    },
    {
      name: "Best Aptos Project",
      sponsor: "Aptos",
      prize: "₹25,000",
      color: "cyan",
      logoUrl: "/sponsors/Aptos.png"
    },
    {
      name: "Best Polygon Project",
      sponsor: "Polygon",
      prize: "₹25,000",
      color: "indigo",
      logoUrl: "/sponsors/Polygon_Logo-White@2x.png"
    },
    {
      name: "Best Hack Built on Ethereum",
      sponsor: "ETH",
      prize: "₹25,000",
      color: "green",
      logoUrl: "/sponsors/ethindia-light.png"
    }
  ];

  const benefits: Benefit[] = [
    {
      provider: "Beeceptor",
      description: "Free 1-year Team Plan subscription valued at $240",
      eligibility: "Winning team",
      logoUrl: "/sponsors/beeceptor-white.svg"
    },
    {
      provider: "Beeceptor",
      description: "$25 credit towards the Team Plan to speed up projects",
      eligibility: "All participants",
      logoUrl: "/sponsors/beeceptor-white.svg"
    },
    {
      provider: "Axure",
      description: "Free 1-year subscription licenses of Axure RP Team Edition, valid for one user each valued at $504 each",
      eligibility: "Top 3 participants",
      logoUrl: "/sponsors/axure.png"
    },
    {
      provider: "XYZ",
      description: "Free domain for 1-year validity",
      eligibility: "Top 300 participants",
      logoUrl: "/sponsors/xyz-white-logo.svg"
    },
    {
      provider: "XYZ",
      description: "$25 coupons",
      eligibility: "Top 6 participants",
      logoUrl: "/sponsors/xyz-white-logo.svg"
    },
    {
      provider: "DSU DevHacks",
      description: "Certificates of participation",
      eligibility: "All participants"
    }
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
          </h2>

          <div className="prizes-grid">
            {prizes.map((prize, index) => {
              // Determine place class
              let placeClass = '';
              if (prize.place.startsWith('1st')) placeClass = 'place-1';
              else if (prize.place.startsWith('2nd')) placeClass = 'place-2';
              else if (prize.place.startsWith('3rd')) placeClass = 'place-3';
              else if (prize.place.startsWith('4th')) placeClass = 'place-4';
              return (
                <div key={index} className="prize-card">
                  <div className={`prize-header ${placeClass}`}>
                    <span className="prize-header-group">
                      <span className="prize-hash">#</span>
                      <span className={`prize-place ${placeClass}`}>{prize.place}</span>
                      <span className="prize-bracket">{' }'}</span>
                    </span>
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
              );
            })}
          </div>

          <div className="divider"></div>

          <h2 className="track-prizes-heading">
            Track Prizes
          </h2>

          <div className="track-prizes-screenshot-grid">
            {trackPrizes.map((trackPrize, index) => {
              // Unique color classes for each card
              const colorClass = `track-prize-screenshot-card-color${index + 1}`;
              return (
                <div key={index} className={`track-prize-screenshot-card ${colorClass}`}>
                  <div className="track-prize-screenshot-top">
                    <div className="track-prize-screenshot-label-bg">
                      <span className="track-prize-screenshot-label">{trackPrize.name}</span>
                    </div>
                    <div className="track-prize-screenshot-image">
                      <img
                        src={trackPrize.logoUrl}
                        alt={trackPrize.sponsor}
                        className="track-prize-screenshot-logo"
                      />
                    </div>
                  </div>
                  <div className="track-prize-screenshot-bottom">
                    <div className="track-prize-screenshot-prize">{trackPrize.prize}</div>
                    <div className="track-prize-screenshot-desc">{trackPrize.sponsor ? `Awarded by ${trackPrize.sponsor}` : ''}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="divider"></div>

          <div className="benefits-section">
            <h2 className="benefits-heading">Participant Benefits</h2>
            <p className="benefits-subheading">Additional perks for participants and winners</p>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  {benefit.logoUrl && (
                    <div className="benefit-logo-container">
                      <img
                        src={benefit.logoUrl}
                        alt={benefit.provider}
                        className="benefit-logo"
                      />
                    </div>
                  )}
                  <div className="benefit-provider">{benefit.provider}</div>
                  <div className="benefit-description">{benefit.description}</div>
                  <div className="benefit-eligibility">
                    <span className="eligibility-label">Eligibility:</span> {benefit.eligibility}
                  </div>
                </div>
              ))}
            </div>
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
