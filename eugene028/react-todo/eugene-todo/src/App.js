import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import TodoHome from './pages/TodoHome';
import Diary from './pages/Diary';
import { 
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
 } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path = '/' element = {<TodoHome />} />
        <Route path = '/diary' element = {<Diary />}/>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
