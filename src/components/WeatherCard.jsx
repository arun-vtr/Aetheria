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

  // AQI status details helper
  const getAqiDetails = (aqi) => {
    if (aqi === null || aqi === undefined) return { label: 'N/A', color: 'rgba(255,255,255,0.4)', desc: 'No AQI data available' };
    if (aqi <= 50) return { label: 'Good', color: '#10B981', desc: 'Minimal impact' };
    if (aqi <= 100) return { label: 'Moderate', color: '#F59E0B', desc: 'Acceptable quality' };
    if (aqi <= 150) return { label: 'Poor', color: '#F97316', desc: 'Unhealthy for sensitive groups' };
    if (aqi <= 200) return { label: 'Unhealthy', color: '#EF4444', desc: 'May cause discomfort' };
    return { label: 'Hazardous', color: '#8B5CF6', desc: 'Health warning' };
  };

  const aqiInfo = getAqiDetails(weather.aqi);

  // Generate automated advisories for India
  const getLocalAdvisory = (tempC, weatherCode, humidity, windSpeed, aqi) => {
    if (aqi && aqi > 150) {
      return {
        type: 'danger',
        icon: '😷',
        title: 'Severe AQI Alert',
        text: 'Hazardous air quality. Wear N95 masks and restrict outdoor activities.'
      };
    }
    if (aqi && aqi > 100) {
      return {
        type: 'warning',
        icon: '😷',
        title: 'Moderate AQI Alert',
        text: 'Poor air quality. Sensitive groups should avoid outdoor activities.'
      };
    }
    if (weatherCode >= 200 && weatherCode < 300) {
      return {
        type: 'danger',
        icon: '⛈️',
        title: 'Thunderstorm Warning',
        text: 'Electrical storm nearby. Stay indoors away from windows.'
      };
    }
    if (tempC > 38) {
      return {
        type: 'danger',
        icon: '🥵',
        title: 'Extreme Heat Warning',
        text: 'Dangerous heatwave. Stay hydrated & avoid direct sun.'
      };
    }
    if (weatherCode === 65 || weatherCode === 502 || weatherCode === 82) {
      return {
        type: 'warning',
        icon: '🌧️',
        title: 'Heavy Rain Watch',
        text: 'Heavy rain expected. Watch for localized waterlogging.'
      };
    }
    if (weatherCode === 741) {
      return {
        type: 'warning',
        icon: '🌫️',
        title: 'Dense Fog Advisory',
        text: 'Low visibility. Drive slowly and exercise caution.'
      };
    }
    if (windSpeed > 35) {
      return {
        type: 'warning',
        icon: '💨',
        title: 'High Wind Warning',
        text: 'Strong winds. Secure loose outdoor objects.'
      };
    }
    if (humidity >= 85 && tempC > 28) {
      return {
        type: 'info',
        icon: '💧',
        title: 'High Humidity Advisory',
        text: 'Sticky monsoon conditions. Stay cool & hydrated.'
      };
    }
    return {
      type: 'success',
      icon: '✅',
      title: 'Local Area Cleared',
      text: 'Weather conditions are stable. Great day to step outside!'
    };
  };

  const advisory = getLocalAdvisory(
    weather.tempC,
    weather.conditionId,
    weather.humidity,
    weather.windSpeed,
    weather.aqi
  );

  return (
    <div className="weather-section-wrap animate-fade-in">
      {/* Current Weather Card */}
      <div className="weather-card glass">
        <div className="weather-main">
          <div className="weather-icon-huge">{weatherEmoji}</div>
          <div className="weather-info-text">
            <div className="weather-city" title={`${weather.city}${weather.state ? `, ${weather.state}` : ''}`}>
              {weather.city}
              {weather.state ? `, ${weather.state}` : ''}
              {weather.country ? ` (${weather.country})` : ''}
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

      {/* Local Updates & AQI Card */}
      <div className="local-updates-card glass">
        <div className="local-updates-header">
          <span className="local-updates-icon">📍</span>
          <div className="local-updates-title-wrap">
            <span className="local-updates-label">REGIONAL STATS</span>
            <h2 className="local-updates-name">Local Updates</h2>
          </div>
        </div>

        {/* AQI Panel */}
        <div className="aqi-panel glass">
          <div className="aqi-header">
            <span className="aqi-title">Air Quality Index</span>
            <span className="aqi-badge" style={{ backgroundColor: `${aqiInfo.color}20`, color: aqiInfo.color, borderColor: `${aqiInfo.color}35` }}>
              {aqiInfo.label} ({weather.aqi ?? 'N/A'})
            </span>
          </div>
          {weather.aqi !== null && (
            <div className="aqi-metrics-row">
              <span className="aqi-metric">PM2.5: <strong>{weather.pm2_5 ? Math.round(weather.pm2_5) : 'N/A'} µg/m³</strong></span>
              <span className="aqi-metric">PM10: <strong>{weather.pm10 ? Math.round(weather.pm10) : 'N/A'} µg/m³</strong></span>
            </div>
          )}
        </div>

        {/* Local Advisory Box */}
        <div className={`advisory-box advisory-${advisory.type} glass`}>
          <div className="advisory-title-row">
            <span className="advisory-icon">{advisory.icon}</span>
            <span className="advisory-title">{advisory.title}</span>
          </div>
          <p className="advisory-text">{advisory.text}</p>
        </div>

        {/* Hourly Timeline */}
        {weather.hourly && weather.hourly.length > 0 && (
          <div className="hourly-forecast-wrap">
            <span className="hourly-label">Next 5 Hours</span>
            <div className="hourly-timeline">
              {weather.hourly.map((h, i) => (
                <div key={i} className="hourly-item glass">
                  <span className="hourly-time">{h.time}</span>
                  <span className="hourly-emoji">{getWeatherEmoji(h.conditionId)}</span>
                  <span className="hourly-temp">{Math.round(h.tempC)}°C</span>
                </div>
              ))}
            </div>
          </div>
        )}
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
