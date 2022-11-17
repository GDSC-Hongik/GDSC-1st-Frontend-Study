import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 96px auto 0px 30px;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  width: 230px;
  height: 140px;
`;

const Header = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 13px;
  color: rgba(255, 255, 255, 0.5);
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 7px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  font-weight: 450;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.4);
`;

const Temp = styled.div``;

const Condition = styled.div``;

const Icon = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 16px;
  opacity: 1.0;
`;

const WeatherBox = () => {
  const cityName = "Seoul";
  const countryName = "KR";
  //const lang = "kr";
  const apiKey = "3b96fc00a042714fb70503d9ab39bdba";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
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
  }, [])


  return (
    <Wrapper>
      <Header>{cityName}, {countryName}</Header>
      <Body>
        <Icon src={icon}/>
        <Text>
          <Temp>{weather.temp}°C</Temp>
          <Condition>{weather.condition}</Condition>
        </Text>
      </Body>
    </Wrapper>
  )
}

export default WeatherBox