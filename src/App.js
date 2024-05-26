import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Dashboard/Dashboard';
import Delivery from './pages/Encomendas/Encomendas';
import History from './pages/Fornecedores/Fornecedores';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Home />}/>
        <Route path='/encomendas' element={<Delivery />}/>
        <Route path='/fornecedores' element={<History />}/>
        {/* <Route path='/agenda' element={<Configuracao />}/>
        <Route path='/filiais' element={<Sair />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
