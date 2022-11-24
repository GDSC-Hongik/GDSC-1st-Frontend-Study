import { useEffect, useState } from 'react';
import axios from 'axios';

const useWeather = () => {
  const city = "Seoul";
  const country = "KR";
  //const lang = "kr";
  const apiKey = "3b96fc00a042714fb70503d9ab39bdba";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const [weather, setWeather] = useState({
    temp : 0,
    condition : "",
  });
  const [icon, setIcon] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setWeather({ 
        temp: Math.round(res.data.main.temp),
        condition: res.data.weather[0].main
      });
      setIcon(
        `http://openweathermap.com/img/wn/${res.data.weather[0].icon}.png`
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line
  }, [])

  return [weather, icon, city, country];
}

export default useWeather;