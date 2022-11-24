import PropTypes from 'prop-types';
import { useState, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';

import selectedDateState from '../../recoil/dateState';
import { loadTodo } from '../../utils/api';
import dateParamGenerator from '../../utils/dateParamGenerator';
import Header from './Header';
import Input from './Input';
import ItemList from './ItemList';
import SaveButton from './SaveButton';

const Todo = ({ onShowModal, setSelectedTodo }) => {
  const [todoList, setTodoList] = useState(['initial']);
  const [allTodoList, setAllTodoList] = useState(['initial']);
  const [isDailyMode, setIsDailyMode] = useState(true);

  const selectedDate = useRecoilValue(selectedDateState);

  useLayoutEffect(() => {
    const paramDate = dateParamGenerator(
      selectedDate.year,
      selectedDate.month,
      selectedDate.date,
    );

    const loadData = async () => {
      if (isDailyMode) {
        const todoData = await loadTodo('day', paramDate);
        todoData.data ? setTodoList([...todoData.data]) : setTodoList([]);
      } else {
        const todoData = await loadTodo('all');
        todoData.data ? setAllTodoList([...todoData.data]) : setAllTodoList([]);
      }
    };

    paramDate && loadData();
  }, [selectedDate, isDailyMode]);

  return (
    <>
      {isDailyMode ? (
        <>
          <Header setIsDailyMode={setIsDailyMode}>
            {selectedDate.year}년 {selectedDate.month}월 {selectedDate.date}일
          </Header>
          <Input setTodoList={setTodoList} date={selectedDate} />
          <ItemList
            todoList={todoList}
            setTodoList={setTodoList}
            onShowModal={onShowModal}
            setSelectedTodo={setSelectedTodo}
          />
          <SaveButton
            todoList={todoList}
            setTodoList={setTodoList}
            type={'day'}
          />
        </>
      ) : (
        <>
          <Header setIsDailyMode={setIsDailyMode}>모든 메모 보기</Header>
          <ItemList
            todoList={allTodoList}
            setTodoList={setAllTodoList}
            onShowModal={onShowModal}
            setSelectedTodo={setSelectedTodo}
          />
          <SaveButton
            todoList={allTodoList}
            setTodoList={setAllTodoList}
            type={'all'}
          />
        </>
      )}
    </>
  );
};

Todo.propTypes = {
  onShowModal: PropTypes.func.isRequired,
  setSelectedTodo: PropTypes.func.isRequired,
};

export default Todo;
