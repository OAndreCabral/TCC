import { Result, Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './domain/mercado/pages/Login/Login';
import './App.css'

function Unauthorized() {
  const navigate = useNavigate();

    return (
        <Result
            status="403"
            title="403"
            subTitle="Desculpe, você não está autorizado a acessar esta página."
            extra={<Button type="primary" onClick={() => navigate('/')}>Voltar para casa</Button>}
        />
    );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/*' element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
