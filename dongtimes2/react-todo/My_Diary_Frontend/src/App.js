import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import NotFound from './pages/NotFound';
import Schedule from './pages/Schedule';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
