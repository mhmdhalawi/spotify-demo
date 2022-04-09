import Homepage from './pages/Homepage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Albumpage from './pages/Albumpage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='artists'>
            <Route index element={<Homepage />} />
            <Route path=':id' element={<Albumpage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
