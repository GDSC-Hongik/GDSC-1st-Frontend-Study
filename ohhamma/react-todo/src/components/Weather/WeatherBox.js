import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 15px auto;
  color: rgba(69, 75, 102, 0.8);
  border-top: 2px solid rgba(25, 19, 8, 0.1);
  border-bottom: 2px solid rgba(25, 19, 8, 0.1);
`;

const Header = styled.div`
  font-size: 25px;
  margin: 5px auto 2px auto;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  margin: 0px 11px 8px 0;
`;

const Temp = styled.div``;

const Condition = styled.div``;

const Icon = styled.img`
  width: 65px;
  height: 65px;
  margin: 0px 15px 0px 5px;
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
        `http://openweathermap.com/img/w/${res.data.weather[0].icon}.png`
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
          <Temp>temp : {weather.temp}°C</Temp>
          <Condition>condition : {weather.condition}</Condition>
        </Text>
      </Body>
    </Wrapper>
  )
}

export default WeatherBox