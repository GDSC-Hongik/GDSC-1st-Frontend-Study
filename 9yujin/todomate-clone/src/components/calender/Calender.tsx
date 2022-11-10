import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';

const kelvinToCelsius = (kelvin: number) => kelvin - 273.15;
const days = ['일', '월', '화', '수', '목', '금', '토'];

const Calender = () => {
  const firstDay = dayjs().startOf('month').day();
  const daysInMonth = dayjs().daysInMonth();
  const arr = Array.from({ length: firstDay + daysInMonth }, (v, i) =>
    i < firstDay ? 0 : i - firstDay + 1,
  );

  useEffect(() => {
    const fetch = async () => {
      console.log(process.env.REACT_APP_API_KEY);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_API_KEY}`,
      );
      const degree = kelvinToCelsius(response.data.main.temp);
      console.log(degree);
    };
    fetch();
  }, []);

  return (
    <Wrapper>
      <Days>
        {days.map((v) => (
          <div>{v}</div>
        ))}
      </Days>
      <Board>
        {arr.map((v, i) => (
          <Item key={v + i}>
            {v !== 0 && (
              <>
                <TodoCheck fill="#DBDDDF" />
                <span>{v}</span>
              </>
            )}
          </Item>
        ))}
      </Board>
    </Wrapper>
  );
};

export default Calender;

const Wrapper = styled.div`
  margin-top: 16px;
  transform: translate3d(-14px, 0, 0);
  width: calc(100% + 28px);
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & > div {
    margin: 4px auto;
    font-size: 10px;
  }
`;

const Item = styled.div`
  width: 21px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 700;
  margin: 8px auto;

  & > svg {
    margin-bottom: 4px;
  }
`;
