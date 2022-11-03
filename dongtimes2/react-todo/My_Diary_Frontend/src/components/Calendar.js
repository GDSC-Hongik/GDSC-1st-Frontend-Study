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
        color="lightgray"
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
            : 'black'
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
        color="lightgray"
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
      <DayBox>
        {daysList.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </DayBox>
      <DateBox>{dateList.map((date) => date)}</DateBox>
    </>
  );
};

const ControlBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;

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
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: white;
    transition-duration: 0.3s;

    &:hover {
      background-color: lightgray;
    }
  }

  .control-left-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
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
  }
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  font-size: 20px;
  margin: 15px 0;
`;

const DateBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  font-size: 40px;

  & > span {
    width: 100%;
    text-align: center;
    padding: 10px 5px;
  }
`;

const DateSpan = styled.span`
  color: ${(props) => props.color};
`;

export default Calendar;
