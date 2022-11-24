import React from 'react';
import styled from 'styled-components';
import useWeather from '../../hooks/useWeather';

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
  const [weather, icon, city, country] = useWeather();

  return (
    <Wrapper>
      <Header>{city}, {country}</Header>
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