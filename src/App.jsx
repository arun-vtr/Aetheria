import { useState, useEffect, useCallback } from 'react';
import SearchHero from './components/SearchHero';
import WeatherCard from './components/WeatherCard';
import MusicSection from './components/MusicSection';
import ParticleCanvas from './components/ParticleCanvas';

import { MOODS, DEMO_TRACKS } from './config';
import { KEYS } from './keys';
import {
  getMoodKey,
  fetchWeatherByCity,
  fetchWeatherByCoords,
  fetchPlaceName,
  fetchLastFmTracks
} from './utils/weatherApi';

export default function App() {
  // Global States
  const [weather, setWeather] = useState(null);
  const [moodKey, setMoodKey] = useState('sunny');
  const [tracks, setTracks] = useState([]);
  
  // Use the pre-configured Last.fm key from keys.js for all public users
  const lastFmKey = KEYS.lastFm || '';

  const [isLiveWeather, setIsLiveWeather] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Sync active theme with HTML body element
  useEffect(() => {
    document.body.className = `theme-${moodKey}`;
  }, [moodKey]);

  // Load music tracks based on weather mood
  const loadMusic = useCallback(async (activeMoodKey, apiKeys = lastFmKey) => {
    const moodInfo = MOODS[activeMoodKey];
    if (!moodInfo) return;

    const demoSongs = DEMO_TRACKS[moodInfo.demoKey] || [];

    if (apiKeys) {
      try {
        const randomTag = moodInfo.lastfmTags[Math.floor(Math.random() * moodInfo.lastfmTags.length)];
        const liveTracks = await fetchLastFmTracks(randomTag, apiKeys);
        
        // Merge live English tracks from Last.fm with curated local tracks
        const hindiCurated = demoSongs.filter((t) => t.lang === 'hindi');
        const punjabiCurated = demoSongs.filter((t) => t.lang === 'punjabi');
        const tamilCurated = demoSongs.filter((t) => t.lang === 'tamil');
        const teluguCurated = demoSongs.filter((t) => t.lang === 'telugu');
        const malayalamCurated = demoSongs.filter((t) => t.lang === 'malayalam');

        const merged = [
          ...liveTracks,
          ...hindiCurated,
          ...punjabiCurated,
          ...tamilCurated,
          ...teluguCurated,
          ...malayalamCurated
        ];

        setTracks(merged);
        return;
      } catch (err) {
        console.warn('Last.fm live music fetch failed, falling back to demo tracks:', err);
      }
    }
    
    // Fallback to offline demo tracks
    setTracks(demoSongs);
  }, [lastFmKey]);

  // Retrieve weather and tracks for a city search
  const handleSearch = async (city) => {
    setIsSearching(true);
    try {
      const weatherData = await fetchWeatherByCity(city);
      setWeather(weatherData);
      setIsLiveWeather(true);

      const calculatedMood = getMoodKey(
        weatherData.conditionId,
        weatherData.tempC,
        weatherData.humidity
      );
      setMoodKey(calculatedMood);
      await loadMusic(calculatedMood);
    } catch (err) {
      alert(err.message || 'Failed to fetch weather for this city.');
    } finally {
      setIsSearching(false);
    }
  };

  // Retrieve weather and tracks via user's current GPS location
  const handleLocate = useCallback(async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      // Fallback
      handleSearch('London');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Fetch weather and reverse-geocode place name in parallel
          const [weatherData, placeName] = await Promise.all([
            fetchWeatherByCoords(latitude, longitude),
            fetchPlaceName(latitude, longitude)
          ]);

          if (placeName) {
            weatherData.city = placeName;
          }
          
          setWeather(weatherData);
          setIsLiveWeather(true);

          const calculatedMood = getMoodKey(
            weatherData.conditionId,
            weatherData.tempC,
            weatherData.humidity
          );
          setMoodKey(calculatedMood);
          await loadMusic(calculatedMood);
        } catch (err) {
          console.error(err);
          alert('Failed to get weather for your location. Loading London as fallback.');
          handleSearch('London');
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.warn('Geolocation blocked or failed:', error.message);
        // Fallback on block/denial
        handleSearch('London');
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, [loadMusic]);

  // Initial load: Attempt GPS lookup, fallback to London
  useEffect(() => {
    handleLocate();
  }, []); // Run once on mount

  return (
    <div className="app-content-wrapper">
      {/* Dynamic Background Particle System */}
      <ParticleCanvas theme={moodKey} />

      <main className="main-content-container">
        {/* Search Header Hero */}
        <SearchHero
          onSearch={handleSearch}
          onLocate={handleLocate}
          isLocating={isLocating}
          isSearching={isSearching}
        />

        {/* Live Weather details display */}
        {weather && (
          <WeatherCard
            weather={weather}
            mood={MOODS[moodKey]}
            isLiveWeather={isLiveWeather}
          />
        )}

        {/* Music Playlist grid and language filters */}
        {tracks.length > 0 && <MusicSection tracks={tracks} />}
      </main>

      <footer className="app-footer-credit">
        <p>
          Aetheria • Weather data keyless via{' '}
          <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer">
            Open-Meteo
          </a>{' '}
          • Music by{' '}
          <a href="https://www.last.fm" target="_blank" rel="noopener noreferrer">
            Last.fm
          </a>
        </p>
      </footer>
    </div>
  );
}
