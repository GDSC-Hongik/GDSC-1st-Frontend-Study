import PropTypes from 'prop-types';

const CompleteTodo = ({ todoList, setTodoList }) => {
  const handleCheckToggle = (todoId) => {
    setTodoList((prev) => {
      prev.forEach((todo) => {
        if (todo.id === todoId) {
          todo.done = false;
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
      <div>Complete</div>
      <div>
        {todoList.map(
          (todo) =>
            todo.done && (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={true}
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

CompleteTodo.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default CompleteTodo;
