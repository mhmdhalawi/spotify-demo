import Homepage from './pages/Homepage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Artist from './pages/Artist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path=':id' element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
