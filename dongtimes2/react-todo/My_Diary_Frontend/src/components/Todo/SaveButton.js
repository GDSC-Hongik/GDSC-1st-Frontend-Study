import axios from 'axios';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import selectedDateState from '../../recoil/dateState';
import { loadTodo } from '../../utils/api';
import dateParamGenerator from '../../utils/dateParamGenerator';

const SaveButton = ({ todoList, setTodoList, type }) => {
  const selectedDate = useRecoilValue(selectedDateState);
  const paramDate = dateParamGenerator(
    selectedDate.year,
    selectedDate.month,
    selectedDate.date,
  );

  const handleSavetodo = async () => {
    try {
      await axios.post(process.env.REACT_APP_SERVER_URL + '/todo', {
        data: todoList,
      });

      const todoData = await loadTodo(type, paramDate);
      todoData.data ? setTodoList([...todoData.data]) : setTodoList([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ButtonBox>
      <button type="button" onClick={handleSavetodo}>
        저장 및 새로고침
      </button>
    </ButtonBox>
  );
};

SaveButton.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  border-radius: 20px;
  background-color: rgba(224, 223, 220, 25%);

  & > button {
    width: 95%;
    padding: 10px 0;
    font-size: 20px;
    margin: 10px 0;
    border: 0;
    border-radius: 20px;
    transition-duration: 0.3s;
    background-color: rgba(255, 255, 255, 70%);
  }

  & > button:hover {
    background-color: gray;
    color: white;
  }
`;

export default SaveButton;
