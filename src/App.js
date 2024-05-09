import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Delivery from './pages/Delivery/Delivery';
import History from './pages/History/History';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/agendamento' element={<Delivery />}/>
        <Route path='/historico' element={<History />}/>
        {/* <Route path='/configuracao' element={<Configuracao />}/>
        <Route path='/sair' element={<Sair />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
