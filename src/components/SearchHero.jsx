import { useState } from 'react';

export default function SearchHero({
  onSearch,
  onLocate,
  isLocating,
  isSearching
}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handlePopularClick = (city) => {
    setQuery(city);
    onSearch(city);
  };

  return (
    <>
      <header className="app-header">
        <div className="logo-wrap">
          <svg className="logo-svg" viewBox="0 0 24 24" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#logo-container-bg)" stroke="url(#logo-container-border)" strokeWidth="1.2" />
            <path d="M7 17L11.2 7.2C11.5 6.5 12.5 6.5 12.8 7.2L17 17" stroke="url(#logo-a-grad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.5 13.2C10.8 12 13.2 12 14.5 13.2" stroke="url(#logo-wave-grad)" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="12" cy="6.2" r="1.5" fill="#F59E0B" />
            <defs>
              <linearGradient id="logo-container-bg" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0e0a1b" />
                <stop offset="1" stopColor="#05030a" />
              </linearGradient>
              <linearGradient id="logo-container-border" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="0.5" stopColor="#ec4899" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="logo-a-grad" x1="7" y1="7" x2="17" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="logo-wave-grad" x1="9.5" y1="12" x2="14.5" y2="13.2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">Aetheria</span>
        </div>
      </header>

      <section className="hero-section">
        <h1 className="hero-title">
          Music for <span className="title-gradient">Your Weather</span>
        </h1>
        <p className="hero-subtitle">
          Discover tracks that perfectly match the sky above you
        </p>

        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrap glass">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              id="city-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a city name..."
              disabled={isSearching || isLocating}
            />
            <button
              type="button"
              className={`btn-locate ${isLocating ? 'loading' : ''}`}
              id="locate-btn"
              title="Use my location"
              onClick={onLocate}
              disabled={isSearching || isLocating}
            >
              {isLocating ? '⏳' : '📍'}
            </button>
          </div>
          <button
            type="submit"
            className="btn-primary btn-search"
            id="search-btn"
            disabled={isSearching || isLocating || !query.trim()}
          >
            {isSearching ? 'Loading...' : 'Get Music'} <span className="arrow">→</span>
          </button>
        </form>

        <div className="popular-cities">
          <span className="popular-label">Popular:</span>
          {[
            { name: 'Kochi', icon: '🌴' },
            { name: 'Mumbai', icon: '🌆' },
            { name: 'Delhi', icon: '🏙️' },
            { name: 'London', icon: '🌧️' },
            { name: 'Dubai', icon: '☀️' }
          ].map((city) => (
            <button
              key={city.name}
              className="city-chip glass"
              onClick={() => handlePopularClick(city.name)}
              disabled={isSearching || isLocating}
            >
              {city.icon} {city.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
