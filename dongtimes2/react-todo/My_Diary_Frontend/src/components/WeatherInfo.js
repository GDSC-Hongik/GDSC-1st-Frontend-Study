import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getWeatherData } from '../utils/api';
import Spinner from './Spinner';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState({
    description: '',
    icon: '',
    location: '',
    temperature: '',
  });

  useEffect(() => {
    const getUserLocation = async () => {
      const result = await getWeatherData();

      setWeatherData((prev) => {
        return { ...prev, ...result };
      });
    };

    getUserLocation();
  }, []);

  return (
    <>
      <WeatherInfoBox>
        {weatherData.temperature ? (
          <>
            <div className="top-area">
              <IconBox>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt={`${weatherData.description}`}
                ></img>
                <div>{weatherData.description}</div>
              </IconBox>
              <TemperatureBox>
                {weatherData.temperature && (
                  <span> {weatherData.temperature} °C</span>
                )}
              </TemperatureBox>
            </div>
            <div className="bottom-area">
              <LocationBox>{weatherData.location}</LocationBox>
            </div>
          </>
        ) : (
          <div className="spinner-area">
            <Spinner />
          </div>
        )}
      </WeatherInfoBox>
    </>
  );
};

const WeatherInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgba(30, 30, 30, 60%);
  border-radius: 20px;
  padding: 10px 20px;
  width: 45%;

  .top-area {
    display: flex;
  }

  .bottom-area {
    display: flex;
    justify-content: right;
    padding: 10px 0;
  }

  .spinner-area {
    display: flex;
    justify-content: center;
  }
`;

const TemperatureBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 70%;
  font-size: 60px;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 30%;
  & > img {
    background-color: rgba(255, 255, 255, 40%);
    border-radius: 20px;
    margin-bottom: 10px;
  }

  & div {
    text-align: center;
    font-size: 20px;
  }
`;

export default WeatherInfo;
