import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Todo from './component/todo.js'
import Calendar from './component/calendar.js'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='Container'>
        <div className='title'><h1>Todo list</h1></div>
        <div>
        <Calendar/>
          <Routes>
            <Route path ="/new" element={<Todo/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
