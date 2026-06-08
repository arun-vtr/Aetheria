import { useState, useEffect } from 'react';

function TrackCard({ track, index }) {
  const [coverUrl, setCoverUrl] = useState(track.image || null);

  useEffect(() => {
    // If track already has an image from Last.fm, use it immediately
    if (track.image) {
      setCoverUrl(track.image);
      return;
    }

    let isMounted = true;
    const fetchCover = async () => {
      try {
        const query = `${track.name} ${track.artist}`;
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=1&media=music`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.results && data.results.length > 0 && isMounted) {
          // Replace 100x100 artwork with higher resolution 300x300
          const highRes = data.results[0].artworkUrl100?.replace('100x100bb', '300x300bb') || data.results[0].artworkUrl100;
          setCoverUrl(highRes);
        }
      } catch (err) {
        console.warn('Cover art fetch failed for:', track.name);
      }
    };

    fetchCover();

    return () => {
      isMounted = false;
    };
  }, [track.name, track.artist, track.image]);

  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(track.name + ' ' + track.artist)}`;
  
  // Generate initials for the avatar/album art fallback
  const getInitials = (title, artist) => {
    const t = title.charAt(0) || '';
    const a = artist.charAt(0) || '';
    return (t + a).toUpperCase();
  };

  const initials = getInitials(track.name, track.artist);

  // Gradient styles
  const gradStart = track.g && track.g[0] ? track.g[0] : '#6366f1';
  const gradEnd = track.g && track.g[1] ? track.g[1] : '#a855f7';
  
  const cardGradient = {
    background: `linear-gradient(135deg, ${gradStart}20, ${gradEnd}10)`,
    borderColor: `${gradStart}30`
  };

  const avatarGradient = {
    background: `linear-gradient(135deg, ${gradStart}, ${gradEnd})`
  };

  return (
    <div className="track-card glass hover-lift" style={cardGradient}>
      <div className="track-card-top">
        <span className="track-index">#{String(index + 1).padStart(2, '0')}</span>
        <div className="track-avatar" style={avatarGradient}>
          {coverUrl ? (
            <img 
              src={coverUrl} 
              alt={track.name} 
              className="track-cover-img"
              onError={() => setCoverUrl(null)} // fallback to initials if image loading fails
            />
          ) : (
            <span className="track-avatar-initials">{initials}</span>
          )}
        </div>
      </div>
      
      <div className="track-info">
        <h3 className="track-title" title={track.name}>
          {track.name}
        </h3>
        <p className="track-artist" title={track.artist}>
          {track.artist}
        </p>
      </div>

      <div className="track-footer">
        <span className="track-duration">⏱️ {track.duration}</span>
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-spotify glass"
          title={`Search "${track.name}" on Spotify`}
        >
          🎧 Spotify
        </a>
      </div>
    </div>
  );
}

export default function MusicSection({ tracks }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'top' | 'english' | 'hindi' | 'punjabi' | 'tamil' | 'telugu' | 'malayalam'

  const tabs = [
    { id: 'all', label: '✨ All Tracks' },
    { id: 'top', label: '⭐ Top Picks' },
    { id: 'english', label: '🇬🇧 English' },
    { id: 'hindi', label: '🇮🇳 Hindi' },
    { id: 'punjabi', label: '🥁 Punjabi' },
    { id: 'tamil', label: '🎵 Tamil' },
    { id: 'telugu', label: '🎻 Telugu' },
    { id: 'malayalam', label: '🌴 Malayalam' }
  ];

  // Filter tracks based on tab selection
  const filteredTracks = tracks.filter((track) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'top') return track.top;
    if (activeTab === 'english') return track.lang === 'english';
    if (activeTab === 'hindi') return track.lang === 'hindi';
    if (activeTab === 'punjabi') return track.lang === 'punjabi';
    if (activeTab === 'tamil') return track.lang === 'tamil';
    if (activeTab === 'telugu') return track.lang === 'telugu';
    if (activeTab === 'malayalam') return track.lang === 'malayalam';
    return true;
  });

  return (
    <section className="music-section animate-fade-in">
      <div className="section-header">
        <span className="section-icon">🎧</span>
        <h2 className="section-title">Recommended Tracks</h2>
      </div>

      {/* Filter Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn glass ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tracks Grid */}
      {filteredTracks.length > 0 ? (
        <div className="tracks-grid">
          {filteredTracks.map((track, index) => (
            <TrackCard
              key={`${track.name}-${track.artist}`}
              track={track}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="empty-tracks glass">
          <p>No tracks found for this category in demo mode.</p>
        </div>
      )}
    </section>
  );
}
