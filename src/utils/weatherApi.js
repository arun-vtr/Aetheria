// WMO Weather Codes to OWM Condition ID mapping
export function wmoToOwmCode(wmoCode) {
  const mapping = {
    0: 800, // Clear sky
    1: 801, // Mainly clear
    2: 802, // Partly cloudy
    3: 804, // Overcast
    45: 741, 48: 741, // Fog
    51: 300, 53: 300, 55: 300, // Drizzle
    56: 611, 57: 611, // Freezing drizzle
    61: 500, 63: 500, // Rain
    65: 502, // Heavy rain
    66: 611, 67: 611, // Freezing rain
    71: 600, 73: 601, 75: 602, // Snow
    77: 611, // Snow grains
    80: 520, 81: 521, 82: 522, // Rain showers
    85: 621, 86: 622, // Snow showers
    95: 200, 96: 230, 99: 233 // Thunderstorms
  };
  return mapping[wmoCode] || 800;
}

// Map OWM Code to Mood key
export function getMoodKey(owmCode, tempC, humidity = 0) {
  if (tempC > 35) return 'tropical';
  if (tempC < 5) return 'cold';
  
  // Stormy: Thunderstorms
  if (owmCode >= 200 && owmCode < 300) return 'stormy';
  
  // Rainy: Drizzle, Rain, Rain Showers
  if (owmCode >= 300 && owmCode < 600) return 'rainy';
  
  // Snowy
  if (owmCode >= 600 && owmCode < 700) return 'snowy';
  
  // Misty / Foggy
  if (owmCode >= 700 && owmCode < 800) return 'misty';
  
  // Sunny: Clear Sky
  if (owmCode === 800) return 'sunny';
  
  // Cloudy: Mainly clear, partly cloudy, overcast
  if (owmCode > 800 && owmCode < 900) {
    // Monsoon Override: Heavy overcast and high humidity >= 85% is treated as rainy
    if (owmCode >= 803 && humidity >= 85) {
      return 'rainy';
    }
    return 'cloudy';
  }

  return 'sunny';
}

// Fetch City coordinates using Nominatim (OSM) — supports small towns, villages, localities
export async function fetchWeatherByCity(city) {
  const cleanCity = city.trim();

  // Use Nominatim search — it knows even small Indian villages
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanCity)}&format=json&limit=10&addressdetails=1&countrycodes=in`;
  
  const geoRes = await fetch(nominatimUrl, {
    headers: { 'User-Agent': 'AetheriaApp/1.0' }
  });
  if (!geoRes.ok) {
    throw new Error('Geocoding service unavailable');
  }
  const geoData = await geoRes.json();

  if (!geoData || geoData.length === 0) {
    throw new Error(`"${cleanCity}" was not found. Try a nearby town or check spelling.`);
  }

  // Pick the most relevant result (highest importance)
  const match = geoData[0];
  const latitude = parseFloat(match.lat);
  const longitude = parseFloat(match.lon);

  // Extract place name from address details
  const addr = match.address || {};
  const placeName =
    addr.town ||
    addr.city ||
    addr.village ||
    addr.suburb ||
    addr.county ||
    match.name ||
    cleanCity;
  const state = addr.state || '';

  // Fetch weather forecast details
  const weather = await fetchWeatherByCoords(latitude, longitude);

  return {
    ...weather,
    city: placeName,
    state,
    country: 'IN'
  };
}

// Fetch Forecast via Open-Meteo Forecast API with Hourly forecast & Air Quality
export async function fetchWeatherByCoords(lat, lon) {
  // Request times in IST (Asia/Kolkata, UTC+5:30) so hourly timestamps are already local
  const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&forecast_days=2&timezone=Asia%2FKolkata`;
  const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm2_5,pm10`;
  
  const [forecastRes, aqiRes] = await Promise.all([
    fetch(forecastUrl),
    fetch(aqiUrl).catch(() => null)
  ]);

  if (!forecastRes.ok) {
    throw new Error('Weather service unavailable');
  }

  const forecastData = await forecastRes.json();
  const current = forecastData.current;
  if (!current) {
    throw new Error('Failed to parse weather metrics');
  }

  let aqiData = null;
  if (aqiRes && aqiRes.ok) {
    try {
      aqiData = await aqiRes.json();
    } catch (e) {
      console.warn('AQI parsing failed:', e);
    }
  }

  const owmCode = wmoToOwmCode(current.weather_code);
  const tempC = current.temperature_2m;
  const humidity = current.relative_humidity_2m;
  const windSpeed = current.wind_speed_10m;
  const feelsLike = current.apparent_temperature;

  // Find the current IST hour in the hourly array
  // API timestamps are already in IST (e.g. "2026-06-10T10:00") — parse HH directly
  const nowIST = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const currentISTHour = nowIST.getHours();
  const currentISTDateStr = nowIST.toLocaleDateString('en-CA'); // YYYY-MM-DD format

  const hourlyForecasts = [];
  if (forecastData.hourly) {
    const times = forecastData.hourly.time || [];
    const temps = forecastData.hourly.temperature_2m || [];
    const codes = forecastData.hourly.weather_code || [];

    // Find index where the timestamp matches current IST date + hour
    const currentHourPrefix = `${currentISTDateStr}T${String(currentISTHour).padStart(2, '0')}`;
    let startIndex = times.findIndex(t => t.startsWith(currentHourPrefix));
    if (startIndex === -1) startIndex = 0;

    for (let i = startIndex; i < Math.min(startIndex + 5, times.length); i++) {
      // Timestamps from API are already IST — extract HH:MM directly from the string
      const timeStr = times[i]; // e.g. "2026-06-10T10:00"
      const hourPart = timeStr.substring(11, 16); // "10:00"
      hourlyForecasts.push({
        time: hourPart,
        tempC: temps[i],
        conditionId: wmoToOwmCode(codes[i])
      });
    }
  }

  const description = getWeatherDescription(owmCode);

  return {
    city: 'My Location',
    country: '',
    state: '',
    lat,
    lon,
    tempC,
    humidity,
    windSpeed,
    feelsLike,
    conditionId: owmCode,
    description,
    aqi: aqiData?.current?.us_aqi || null,
    pm2_5: aqiData?.current?.pm2_5 || null,
    pm10: aqiData?.current?.pm10 || null,
    hourly: hourlyForecasts
  };
}

// Fetch exact place name using Nominatim reverse geocoding API
export async function fetchPlaceName(lat, lon) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'AetheriaApp/1.0'
      }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      locality: data.address?.suburb || data.address?.neighbourhood || null,
      city: data.address?.city || data.address?.town || data.address?.village || null,
      state: data.address?.state || null,
      country: data.address?.country || null,
      countryCode: data.address?.country_code?.toUpperCase() || null
    };
  } catch (err) {
    console.error('Reverse geocoding failed:', err);
    return null;
  }
}

// Fetch Live tracks from Last.fm
export async function fetchLastFmTracks(tag, apiKey) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${encodeURIComponent(tag)}&api_key=${apiKey}&format=json&limit=30`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Music API unavailable');
  }
  const data = await res.json();
  const rawTracks = data.toptracks?.track;
  if (!rawTracks || rawTracks.length === 0) {
    throw new Error('No tracks found for this mood tag');
  }

  // Standard color gradient options for Last.fm tracks
  const gradients = [
    ['#FFD700', '#FF6B35'],
    ['#FF6B35', '#FF4F81'],
    ['#FF4F81', '#7F00FF'],
    ['#00F2FE', '#4FACFE'],
    ['#4FACFE', '#0000FF'],
    ['#ffe259', '#ffa751'],
    ['#11998e', '#38ef7d'],
    ['#373B44', '#4286f4'],
    ['#654ea3', '#eaafc8']
  ];

  return rawTracks.map((t, idx) => {
    const min = 3;
    const sec = Math.floor(Math.random() * 60);
    const mockDuration = `${min}:${String(sec).padStart(2, '0')}`;

    // Get track image if available (medium/large size if present)
    const lfmImage = t.image && t.image.length > 0 ? 
      (t.image.find(img => img.size === 'large' || img.size === 'medium') || t.image[t.image.length - 1])['#text'] : 
      null;

    return {
      name: t.name,
      artist: t.artist?.name || 'Unknown Artist',
      duration: t.duration && t.duration !== '0' ? 
        `${Math.floor(parseInt(t.duration) / 60)}:${String(parseInt(t.duration) % 60).padStart(2, '0')}` : 
        mockDuration,
      g: gradients[idx % gradients.length],
      lang: 'english', // Default to English for Last.fm results
      top: idx < 10, // First 10 are top picks
      image: lfmImage
    };
  });
}

// Get textual description of weather code
function getWeatherDescription(code) {
  if (code >= 200 && code < 300) return 'Thunderstorm';
  if (code >= 300 && code < 400) return 'Light Drizzle';
  if (code >= 500 && code < 511) return 'Rainy';
  if (code === 511) return 'Freezing Rain';
  if (code >= 520 && code < 600) return 'Showers';
  if (code >= 600 && code < 700) return 'Snowy';
  if (code === 741) return 'Foggy';
  if (code === 800) return 'Clear Sky';
  if (code === 801) return 'Partly Cloudy';
  if (code === 802) return 'Scattered Clouds';
  if (code === 803) return 'Broken Clouds';
  if (code === 804) return 'Overcast Clouds';
  return 'Cloudy';
}
