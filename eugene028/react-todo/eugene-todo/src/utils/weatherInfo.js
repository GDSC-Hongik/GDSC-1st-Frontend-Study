import { TiWeatherSunny,TiWeatherShower,TiWeatherDownpour,TiWeatherSnow, TiWeatherWindy, TiWeatherCloudy } from 'react-icons/ti';

const weatherInfo = (weather) => {
    let weatherIcon = weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
        // eslint-disable-next-line default-case
        switch (weatherIcon) {
            case 0:
              return <TiWeatherSunny size="2rem" color="white" />; 
            case 2:
              return <TiWeatherCloudy size="2rem" color="white" />; 
            case 3:
              return <TiWeatherShower size="2rem" color="white" />;
            case 5:
              return <TiWeatherDownpour size="2rem" color="white" />;
            case 6:
              return <TiWeatherSnow size="2rem" color="white" />;
            case 7:
              return <TiWeatherWindy size="2rem" color="white" />;
            case 8:
              return <TiWeatherCloudy size="2rem" color="white" />;
          };
}

export default weatherInfo;