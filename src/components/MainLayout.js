import { Button, Layout, Image } from 'antd';
import { useEffect, useState } from 'react';
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
import Filiais from '../domain/mercado/pages/Filiais/Filiais';
import Agenda from '../domain/mercado/pages/Agenda/Agenda';
import Perfil from './Perfil';
import Styles from './MainLayout.module.css'
import Menu from './Menu';
import Logo from '../assets/logo.jpg'
import LogoCollapsed from '../assets/logoCollapsed.png'

const { Header, Sider, Content } = Layout;

const menuItems = [
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
]

function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

        if (!user) {
            navigate('/unauthorized');
        }
    }, [location]);

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
                <Menu items={menuItems} />
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
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}/>
                        <Route path='/encomendas' element={<Encomendas />}/>
                        <Route path='/fornecedores' element={<Fornecedores />}/>
                        <Route path='/filiais' element={<Filiais />}/>
                        <Route path='/agenda' element={<Agenda />}/>
                        <Route path='/cadastro-filiais' element={<CadastroFiliais />}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
