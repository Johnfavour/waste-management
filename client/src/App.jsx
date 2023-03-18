import React, { useContext } from 'react';
import './app.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/admin' /> : <Login />} />
        <Route path='/admin' element={user ? <Admin /> : <Login />} />
      </Routes>
      <div className='footer'>
        <p className='copyright'>© <span id="date">{new Date().getFullYear()}</span> JEDolce Todos los derechos reservados</p>
      </div>
    </BrowserRouter>
  )
};

export default App;
