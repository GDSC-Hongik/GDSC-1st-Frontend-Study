import React, { useState, useCallback, useRef, useEffect } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../node_modules/axios/index';
import {
    MyDatePicker, DateSetting, TextArea, DiaryBtnCSS, DiaryTop
  } from '../components/styledComponent';
import { TiWeatherSunny,TiWeatherShower,TiWeatherDownpour,TiWeatherSnow, TiWeatherWindy, TiWeatherCloudy } from 'react-icons/ti';

const API_KEY = '81db2c638235e4355a9e73f56ee83466';
const lat = '37.56667'
const lon = '126.97806'


const Diary = () => {
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [weather, setWeather] = useState('');

    const getWeather = async(e) => {
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
    

    const weatherInfo = () => {
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

    let contentId = useRef(0);
    const onInsert = useCallback(
        (text) => {
            const newContent =  {
                id : contentId.current,
                text : text,
            }
            contentId.current++;
            setContent(content => content.concat(newContent));
        },[content]
    )

    const onChange = useCallback(
        e => {
            setContent(e.target.value);
        }
    )

    const onSubmit = useCallback(
        e => {
            if(content === "")
                window.alert("아무 내용도 입력하지 않았습니다.");
            else {
                onInsert(content, false);
                setContent('');
                e.preventDefault();
            }
        },[content]
    )

    return (
        <div>
            <TodoTemplate>
                <DateSetting>
                    <span>날짜 설정하기</span>
                    <MyDatePicker 
                        dateFormat = "yyyy/MM/dd" 
                        selected = {date} 
                        onChange = {date => setDate(date)}
                        locale = { ko } 
                        placeholderText='Weeks start on Monday' />
                    </DateSetting>
                    <DiaryTop>
                        <h4>{title === '' ? '제목을 입력해주세요' : {title}}</h4>
                        <span className = 'weatherIcon'>{weatherInfo()}</span>
                    </DiaryTop>
                    <TextArea onSubmit = {onSubmit} onChange = {onChange} value = {content} type = 'textarea'/>
                    <DiaryBtnCSS type = 'submit'>일기 작성하기</DiaryBtnCSS>
            </TodoTemplate>
        </div>
    );
};

export default Diary;