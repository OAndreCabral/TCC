import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/domain/mercado/pages/Dashboard/Dashboard';
import Encomendas from '../src/domain/mercado/pages/Encomendas/Encomendas';
import History from '../src/domain/mercado/pages/Fornecedores/Fornecedores';
import Login from '../src/domain/mercado/pages/Login/Login';
import EditarFornecedores from '../src/domain/mercado/pages/EditarFornecedores/EditarFornecedores';
import CadastrarFornecedores from '../src/domain/mercado/pages/CadastrarFornecedores/CadastrarFornecedores';
import Nfe from '../src/domain/mercado/pages/Nfe/Nfe';
import EditarEncomenda from '../src/domain/mercado/pages/EditarEncomenda/EditarEncomenda';
import Agenda from '../src/domain/mercado/pages/Agenda/Agenda';
import Filiais from '../src/domain/mercado/pages/Filiais/Filiais';
import ListaEntregas from '../src/domain/fornecedores/pages/ListaEntregas/ListaEntregas';
import Agendar from '../src/domain/fornecedores/pages/Agendar/Agendar';

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
        <Route path='/edit-encomenda' element={<EditarEncomenda />}/>
        <Route path='/agenda' element={<Agenda />}/>
        <Route path='/filiais' element={<Filiais />}/>
        <Route path='/lista-entregas' element={<ListaEntregas />}/>
        <Route path='/agendar' element={<Agendar />}/>
      </Routes>
    </Router>
  );
}

export default App;
