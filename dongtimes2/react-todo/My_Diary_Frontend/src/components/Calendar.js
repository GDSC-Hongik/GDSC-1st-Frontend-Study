import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { daysList } from '../constants/Constants';
import selectedDateState from '../recoil/dateState';

const Calendar = () => {
  const [day, setDay] = useState(dayjs());
  const setSelectedDate = useSetRecoilState(selectedDateState);

  const dateList = [];

  const lastDayOfPastMonth = day.add(-1, 'month').endOf('month').day();
  const lastDateOfPastMonth = day.add(-1, 'month').daysInMonth();
  const lastDateOfThisMonth = day.daysInMonth();
  const firstDayOfNextMonth = day.add(1, 'month').startOf('month').day();

  useEffect(() => {
    setSelectedDate((prev) => {
      return {
        ...prev,
        year: dayjs().year(),
        month: dayjs().month() + 1,
        date: dayjs().date(),
      };
    });
  }, [setSelectedDate]);

  const handleGoPrevMonth = () => {
    setDay((day) => day.add(-1, 'month'));
    setSelectedDate((prev) => {
      return {
        ...prev,
        year: day.add(-1, 'month').year(),
        month: day.add(-1, 'month').month() + 1,
        date: 1,
      };
    });
  };

  const handleGoNextMonth = () => {
    setDay((day) => day.add(1, 'month'));
    setSelectedDate((prev) => {
      return {
        ...prev,
        year: day.add(1, 'month').year(),
        month: day.add(1, 'month').month() + 1,
        date: 1,
      };
    });
  };

  const handleGoToday = () => {
    setDay(dayjs());
    setSelectedDate((prev) => {
      return {
        ...prev,
        year: dayjs().year(),
        month: dayjs().month() + 1,
        date: dayjs().date(),
      };
    });
  };

  const handleDayClick = (year, month, date) => {
    setSelectedDate((prev) => {
      return { ...prev, year, month, date };
    });
  };

  for (let pivot = lastDayOfPastMonth; pivot >= 0; pivot--) {
    const yearOfPastMonth = day.add(-1, 'month').year();
    const pastMonth = day.add(-1, 'month').month() + 1;
    const dateOfPastMonth = lastDateOfPastMonth - pivot;

    dateList.push(
      <DateSpan
        key={`p${yearOfPastMonth}${pastMonth}${dateOfPastMonth}`}
        onClick={() => {
          handleDayClick(yearOfPastMonth, pastMonth, dateOfPastMonth);
        }}
        color="#888681"
      >
        {dateOfPastMonth}
      </DateSpan>,
    );
  }

  for (
    let dateOfThisMonth = 1;
    dateOfThisMonth <= lastDateOfThisMonth;
    dateOfThisMonth++
  ) {
    const yearOfThisMonth = day.year();
    const thisMonth = day.month() + 1;

    dateList.push(
      <DateSpan
        key={`t${yearOfThisMonth}${thisMonth}${dateOfThisMonth}`}
        onClick={() => {
          handleDayClick(yearOfThisMonth, thisMonth, dateOfThisMonth);
        }}
        color={
          day.year() === dayjs().year() &&
          day.month() === dayjs().month() &&
          dateOfThisMonth === dayjs().date()
            ? 'red'
            : 'white'
        }
      >
        {dateOfThisMonth}
      </DateSpan>,
    );
  }

  for (let pivot = 6; pivot >= firstDayOfNextMonth; pivot--) {
    const yearOfNextMonth = day.add(1, 'month').year();
    const nextMonth = day.add(1, 'month').month() + 1;
    const dateOfNextMonth = 7 - pivot;

    dateList.push(
      <DateSpan
        key={`n${yearOfNextMonth}${nextMonth}${dateOfNextMonth}`}
        onClick={() => {
          handleDayClick(yearOfNextMonth, nextMonth, dateOfNextMonth);
        }}
        color="#888681"
      >
        {dateOfNextMonth}
      </DateSpan>,
    );
  }

  return (
    <>
      <ControlBox>
        <div>
          <div className="control-left-area">
            <button type="button" onClick={handleGoToday}>
              오늘
            </button>
          </div>
          <div className="control-middle-area">
            {day.year()}년 {day.month() + 1}월
          </div>
          <div className="control-right-area">
            <button type="button" onClick={handleGoPrevMonth}>
              이전
            </button>
            <button type="button" onClick={handleGoNextMonth}>
              다음
            </button>
          </div>
        </div>
      </ControlBox>
      <CalendarBox>
        <DayBox>
          {daysList.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </DayBox>
        <DateBox>{dateList.map((date) => date)}</DateBox>
      </CalendarBox>
    </>
  );
};

const ControlBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 20px 0;
  background-color: rgba(104, 103, 100, 40%);
  border-radius: 20px;
  color: white;

  & > div {
    display: flex;
    align-items: center;
    flex-basis: 40%;

    @media screen and (max-width: 1500px) {
      flex-basis: 100%;
    }
  }

  & button {
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid gray;
    color: white;
    background-color: rgba(50, 50, 50, 70%);
    transition-duration: 0.3s;
    height: 35px;

    &:hover {
      background-color: lightgray;
    }
  }

  .control-left-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    height: 100%;
  }

  .control-middle-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 40%;
    height: 100%;
  }

  .control-right-area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-basis: 40%;
    height: 100%;
  }
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  font-size: 20px;
  padding: 15px 0;
  color: white;
`;

const DateBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  font-size: 40px;

  & > span {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

const DateSpan = styled.span`
  color: ${(props) => props.color};
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 60%);
  border-radius: 20px;
`;

export default Calendar;
