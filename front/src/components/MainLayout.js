import { Button, Layout, Image } from 'antd';
import { createContext, useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProjectOutlined,
    TeamOutlined,
    CodeSandboxOutlined,
    CalendarOutlined,
    TruckOutlined
} from '@ant-design/icons';
import Dashboard from '../domain/mercado/pages/Dashboard/Dashboard';
import Encomendas from '../domain/mercado/pages/Encomendas/Encomendas'
import Fornecedores from '../domain/mercado/pages/Fornecedores/Fornecedores'
import CadastroFiliais from '../domain/mercado/pages/CadastrarFiliais/CadastrarFiliais'
import CadastroEncomenda from '../domain/mercado/pages/Nfe/Nfe'
import EditarEncomenda from '../domain/mercado/pages/EditarEncomenda/EditarEncomenda';
import EditarFornecedores from '../domain/mercado/pages/EditarFornecedores/EditarFornecedores'
import EditarFilial from '../domain/mercado/pages/EditarFilial/EditarFilial';
import CadastroFornecedores from '../domain/mercado/pages/CadastrarFornecedores/CadastrarFornecedores'
import EditarPerfil from '../domain/mercado/pages/EditarPerfil/EditarPerfil'
import Filiais from '../domain/mercado/pages/Filiais/Filiais';
import Agenda from '../domain/mercado/pages/Agenda/Agenda';
import Perfil from './Perfil';
import Styles from './MainLayout.module.css'
import Menu from './Menu';
import Logo from '../assets/logo.jpg'
import LogoCollapsed from '../assets/logoCollapsed.png'

const { Header, Sider, Content } = Layout;

export const UserContext = createContext({
    user: null,
    updateUser: () => {},
});

const menuItemsProvider = [
    {
        key: '2',
        icon: <CodeSandboxOutlined />,
        label: <Link to="/encomendas">Entregas</Link>,
    },
    {
        key: '5',
        icon: <CalendarOutlined />,
        label: <Link to="/agenda">Agenda</Link>,
    },
];

const menuItemsDefault = [
    {
        key: '1',
        icon: <ProjectOutlined />,
        label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
        key: '2',
        icon: <CodeSandboxOutlined />,
        label: <Link to="/encomendas">Encomendas</Link>,
    },
    {
        key: '3',
        icon: <TruckOutlined />,
        label: <Link to="/fornecedores">Fornecedores</Link>,
    },
    {
        key: '4',
        icon: <TeamOutlined />,
        label: <Link to="/filiais">Filiais</Link>,
    },
    {
        key: '5',
        icon: <CalendarOutlined />,
        label: <Link to="/agenda">Agenda</Link>,
    },
];

function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')));

    const updateUser = (newData) => {
        setUser(oldData => ({
          ...oldData,
          ...newData,
        }));
      };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

        if (!user) {
            navigate('/unauthorized');
        }
    }, [location]);

    const menuItems = user && user.user_type === 'PROVIDER' ? menuItemsProvider : menuItemsDefault;

    const defaultValue = user && user.user_type === 'PROVIDER' ? '2' : '1';

    const imageSrc = collapsed ? LogoCollapsed : Logo;
    const iconButton = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

    return (
        <Layout className={Styles.layout}>
            <Sider 
                trigger={null}
                collapsed={collapsed}
            >
                <div className={Styles.logo}>
                    <Image
                        width={100}
                        src={imageSrc}
                        preview={false}
                    />
                </div>
                <Menu items={menuItems} value={defaultValue} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        backgroundColor: 'white',
                        padding: '10px 0',
                    }}
                >
                    <div
                        className={Styles.perfil}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            icon={iconButton}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                width: 64,
                                height: 64,
                                border: 'none'
                            }}
                        />
                        {user && <Perfil fantasyName={user.fantasy_name}/>}
                    </div>
                </Header>
                <Content
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <UserContext.Provider value={{ user, updateUser }}>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />}/>
                            <Route path='/encomendas' element={<Encomendas />}/>
                            <Route path='/fornecedores' element={<Fornecedores />}/>
                            <Route path='/filiais' element={<Filiais />}/>
                            <Route path='/agenda' element={<Agenda />}/>
                            <Route path='/cadastro-filiais' element={<CadastroFiliais />}/>
                            <Route path='/editar-perfil' element={<EditarPerfil />}/>
                            <Route path='/cadastro-fornecedores' element={<CadastroFornecedores />}/>
                            <Route path='/cadastro-encomenda' element={<CadastroEncomenda />}/>
                            <Route path='/editar-encomenda/:id' element={<EditarEncomenda />}/>
                            <Route path='/editar-filial/:id' element={<EditarFilial />}/>
                            <Route path='/editar-fornecedores/:id' element={<EditarFornecedores />}/>
                        </Routes>
                    </UserContext.Provider>
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
