import dayjs from 'dayjs';
import styled, { css } from 'styled-components';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';

const renderCalenderBoard = (
  selectedDay: string,
  handleSelectDate: (v: string) => void,
) => {
  const firstDay = dayjs(selectedDay).startOf('month').day();
  const daysInMonth = dayjs(selectedDay).daysInMonth();
  const arr = Array.from({ length: firstDay + daysInMonth }, (v, i) =>
    i < firstDay
      ? 0
      : dayjs(selectedDay)
          .startOf('month')
          .set('date', i - 1)
          .format('MM/DD/YY'),
  );

  const content = arr.map((v, i) => (
    <Item key={v ? v.toString() : `${v}${i}`} isSelected={selectedDay === v}>
      {v !== 0 && (
        <div onClick={() => handleSelectDate(v)}>
          <TodoCheck fill="#DBDDDF" />
          <span>{dayjs(v).date()}</span>
        </div>
      )}
    </Item>
  ));

  return content;
};

export default renderCalenderBoard;
const Item = styled.div<{ isSelected: Boolean }>`
  width: 21px;
  margin: 8px auto;
  cursor: pointer;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? '#000' : '#b6b6b6')};
    ${({ isSelected }) =>
      isSelected
        ? css`
            color: #000;
            font-size: 11px;
            text-decoration: underline;
          `
        : css`
            color: #b6b6b6;
            font-size: 10px;
          `}
  }
  svg {
    margin-bottom: 4px;
  }
`;
