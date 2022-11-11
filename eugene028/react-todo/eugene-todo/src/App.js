import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import TodoHome from './pages/TodoHome';
import Diary from './pages/Diary';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<TodoHome />} />
      <Route path = '/diary' element = {<Diary />}/>
    </Routes>
  );
}

export default App;
