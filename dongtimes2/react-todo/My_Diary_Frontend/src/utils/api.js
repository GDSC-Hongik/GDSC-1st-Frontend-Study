import axios from 'axios';

import userCoordinateGenerator from './userCoordinateGenerator';

const getGeocodingAPIUrl = (latitude, longitude) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GEOCODING_API_KEY}`;
};

const getWeatherAPIUrl = (latitude, longitude) => {
  return `https://api.openweathermap.org/data/2.5/weather?lang=kr&lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};

export const getWeatherData = async () => {
  try {
    const { latitude, longitude } = await userCoordinateGenerator();

    const result = await axios.all([
      axios.get(getGeocodingAPIUrl(latitude, longitude)),
      axios.get(getWeatherAPIUrl(latitude, longitude)),
    ]);

    return {
      location: result[0].data.results[4].formatted_address,
      temperature: (result[1].data.main.temp - 273.15).toFixed(1),
      description: result[1].data.weather[0].description,
      icon: result[1].data.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
  }
};
