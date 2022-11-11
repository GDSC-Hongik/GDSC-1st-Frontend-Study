import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import renderCalenderBoard from './renderCalenderBoard';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const Calender = () => {
  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format('MM/DD/YY'),
  );

  const handleSelectDate = (v: string) => {
    setSelectedDay(v);
  };

  const board = renderCalenderBoard(selectedDay, handleSelectDate);

  return (
    <Wrapper>
      <Days>
        {days.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </Days>
      <Board>{board}</Board>
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
