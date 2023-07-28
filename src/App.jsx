import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Start } from './pages/Start';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { AccountLayout } from './layout/AccountLayout';
import { AuthLayout } from './layout/AuthentificationLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Start />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
