import PropTypes from 'prop-types';

const ProgressTodo = ({ todoList, setTodoList }) => {
  const handleCheckToggle = (todoId) => {
    setTodoList((prev) => {
      prev.forEach((todo) => {
        if (todo.id === todoId) {
          todo.done = true;
        }
      });
      return [...prev];
    });
  };

  const handleDeleteButtonClick = (todoId) => {
    setTodoList((prev) => {
      const newList = prev.filter((todo) => todo.id !== todoId);
      return [...newList];
    });
  };

  return (
    <>
      <div>Progress</div>
      <div>
        {todoList.map(
          (todo) =>
            !todo.done && (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => handleCheckToggle(todo.id)}
                ></input>{' '}
                {todo.value}{' '}
                <button
                  type="button"
                  onClick={() => handleDeleteButtonClick(todo.id)}
                >
                  삭제
                </button>
              </div>
            ),
        )}
      </div>
    </>
  );
};

ProgressTodo.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default ProgressTodo;
