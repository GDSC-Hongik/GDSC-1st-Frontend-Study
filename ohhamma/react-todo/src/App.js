import Container from './Container';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <Container>
      <Title title='⛧ 투두리스트 ⛧' />
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
