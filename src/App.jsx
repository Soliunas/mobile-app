import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Start } from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Start />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
