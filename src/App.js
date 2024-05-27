import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Dashboard/Dashboard';
import Encomendas from './pages/Encomendas/Encomendas';
import History from './pages/Fornecedores/Fornecedores';
import Login from './pages/Login/Login';
import EditarFornecedores from './pages/EditarFornecedores/EditarFornecedores';
import CadastrarFornecedores from './pages/CadastrarFornecedores/CadastrarFornecedores';
import Nfe from './pages/Nfe/Nfe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Home />}/>
        <Route path='/encomendas' element={<Encomendas />}/>
        <Route path='/fornecedores' element={<History />}/>
        <Route path='/edit-fornecedores' element={<EditarFornecedores />}/>
        <Route path='/cadastrar-fornecedores' element={<CadastrarFornecedores />}/>
        <Route path='/nfe' element={<Nfe />}/>
        {/* <Route path='/agenda' element={<Configuracao />}/>
        <Route path='/filiais' element={<Sair />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
