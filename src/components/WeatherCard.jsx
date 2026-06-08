export default function WeatherCard({ weather, mood, isLiveWeather }) {
  if (!weather || !mood) return null;

  // Map OWM codes to emojis for visual variety
  const getWeatherEmoji = (code) => {
    if (code >= 200 && code < 300) return '⛈️';
    if (code >= 300 && code < 400) return '🌦️';
    if (code >= 500 && code < 600) return '🌧️';
    if (code >= 600 && code < 700) return '❄️';
    if (code >= 700 && code < 800) return '🌫️';
    if (code === 800) return '☀️';
    if (code === 801) return '🌤️';
    if (code === 802) return '⛅';
    return '☁️';
  };

  const weatherEmoji = getWeatherEmoji(weather.conditionId);

  return (
    <div className="weather-section-wrap animate-fade-in">
      {/* Current Weather Card */}
      <div className="weather-card glass">
        <div className="weather-main">
          <div className="weather-icon-huge">{weatherEmoji}</div>
          <div className="weather-info-text">
            <div className="weather-city">
              {weather.city}
              {weather.country ? `, ${weather.country}` : ''}
            </div>
            <div className="weather-temp-wrap">
              <span className="weather-temp">{Math.round(weather.tempC)}</span>
              <span className="weather-unit">°C</span>
            </div>
            <div className="weather-desc">{weather.description}</div>
          </div>
        </div>

        <div className="weather-meta-grid">
          <div className="meta-pill glass">
            <span className="meta-icon">💧</span>
            <span className="meta-text">{weather.humidity}%</span>
          </div>
          <div className="meta-pill glass">
            <span className="meta-icon">💨</span>
            <span className="meta-text">{Math.round(weather.windSpeed)} km/h</span>
          </div>
          <div className="meta-pill glass">
            <span className="meta-icon">🌡️</span>
            <span className="meta-text">Feels {Math.round(weather.feelsLike)}°C</span>
          </div>
          <div className={`meta-pill live-pill glass ${isLiveWeather ? 'is-live' : 'is-demo'}`}>
            {isLiveWeather ? (
              <>
                <span className="live-dot-pulse"></span>
                <span className="meta-text">Live</span>
              </>
            ) : (
              <>
                <span className="meta-icon">📋</span>
                <span className="meta-text">Demo</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Music Mood Card */}
      <div className="mood-card glass">
        <div className="mood-header">
          <span className="mood-emoji">{mood.emoji}</span>
          <div className="mood-text-wrap">
            <span className="mood-label">MUSIC MOOD</span>
            <h2 className="mood-name">{mood.name}</h2>
            <p className="mood-desc">{mood.desc}</p>
          </div>
        </div>
        <div className="mood-tags">
          {mood.tags.map((tag) => (
            <span key={tag} className="mood-tag glass">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
