import axios from 'axios';
import { useEffect, useState } from 'react';

const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

const useWeather = () => {
  const [degree, setDegree] = useState<number>();
  const [icon, setIcon] = useState<string>();

  useEffect(() => {
    const fetch = async () => {
      console.log(process.env.REACT_APP_API_KEY);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_API_KEY}`,
      );
      setDegree(kelvinToCelsius(response.data.main.temp));
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      );
    };
    fetch();
  }, []);

  return { degree, icon };
};

export default useWeather;
