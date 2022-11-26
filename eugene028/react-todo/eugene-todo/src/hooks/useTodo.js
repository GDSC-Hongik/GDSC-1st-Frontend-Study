import { useRecoilState } from 'recoil';
import { todoState, todoId } from '../stores/Atom'

const useTodo = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [id, setId] = useRecoilState(todoId);

  const todoInsert = (text, checked, day, month, year) => {
      const newtodo ={
        id : id,
        text : text,
        checked : checked,
        day : day,
        month : month,
        year : year 
      };
      setId(id + 1);
      setTodos(todos => todos.concat(newtodo));
      localStorage.setItem("TODO", JSON.stringify([...todos, newtodo]));
    }

const todoRemove = id => {
      const deletedItem = todos.filter(todo => todo.id !== id);
      setTodos(deletedItem);
      localStorage.setItem("TODO",JSON.stringify(deletedItem));
  }
   
  const todoToggle = id => {
      const toggledItem = todos.map(todo => 
        todo.id === id ? { ...todo, checked : !todo.checked } : todo)
      setTodos(toggledItem);
      localStorage.setItem("TODO",JSON.stringify(toggledItem));
  }

  return { todoInsert, todoToggle, todoRemove }
}

export default useTodo;