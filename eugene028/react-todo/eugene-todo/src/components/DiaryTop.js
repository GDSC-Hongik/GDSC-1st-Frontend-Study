import React from 'react';
import styled from'styled-components';
import weatherInfo from '../utils/weatherInfo';
import { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';

const API_KEY = '81db2c638235e4355a9e73f56ee83466';
const lat = '37.56667'
const lon = '126.97806'

const DiaryTop = ({weatherProps}) => {
    const [weather, setWeather] = useState({weatherProps});
    const getWeather = async() => {
        try {
            const weatherData = await axios({
                method : 'get',
                url : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            })
            setWeather({
                id : weatherData.data.weather[0].id,
                main : weatherData.data.weather[0].main
            })
        }
        catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        getWeather();
    },[]);

    return (
        <DiaryTopHead>
            <div className = "weatherWrite">오늘의 날씨</div>
            <span className = 'weatherIcon'>{weatherInfo(weather)}</span>
        </DiaryTopHead>
    );
}

const DiaryTopHead = styled.div`
    padding-bottom: 30px;
    display : flex;
    flex-direction : row;
    position: relative;
    h4{
        margin : 2px;
        font-size : 15px;
        display : inline;
    }
    .weatherWrite
    {
        font-size:15px;
        position:absolute;
        right:45px;
        color : gray;
        top:4px;
    }
    .weatherIcon
    {
        position: absolute;
        right : 5px;
        top: 0%;
    }
    margin : 2px;
`

export default DiaryTop;
