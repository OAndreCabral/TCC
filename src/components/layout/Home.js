import React, { useState } from 'react';
import './Home.module.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  DesktopOutlined,
  CalendarOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Pagination } from 'antd';

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          className='menu'
          items={[
            {
                key: '1',
                icon: <HomeOutlined />,
                label: 'Inicio',
              },
              {
                key: '2',
                icon: <DesktopOutlined />,
                label: 'Agendamento de Entrega',
              },
              {
                key: '3',
                icon: <CalendarOutlined />,
                label: 'Histórico de Entrega',
              },
              {
                key: '4',
                label: 'Configuração da Conta',
                icon: <SettingOutlined />,
              },
              {
                key: '5',
                label: 'Sair',
                icon: <LogoutOutlined />,
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: 'gray'
          }}
        >
            <div className='header'>
                <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
                />
                <div className='headerUser'>
                    <UserOutlined />
                    <div>Bátima Fernades</div>
                </div>
            </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <div className="title">Resumo das Póximas Entregas</div>
        <div className="info">
            <div className="date">DATA DE ENTREGA
                <div>01/03/2024</div>
                <div>01/03/2024</div>
                <div>01/03/2024</div>
                <div>28/02/2024</div>
                <div>28/02/2024</div>
                <div>27/02/2024</div>
                <div>27/02/2024</div>
            </div>
            <div className="time">HORA
                <div>17:45</div>
                <div>14:30</div>
                <div>10:00</div>
                <div>09:00</div>
                <div>08:00</div>
                <div>12:00</div>
                <div>10:00</div>
            </div>
            <div className="store">LOJA
                <div>Paraná Familia</div>
                <div>Lar Paraná</div>
                <div>Paraná Familia</div>
                <div>Centro</div>
                <div>Lar Paraná</div>
                <div>Paraná Familia</div>
                <div>Paraná Familia</div>
            </div>
            <div className="status">STATUS
                <div>Pendente</div>
                <div>Pendente</div>
                <div>Pendente</div>
                <div>Pendente</div>
                <div>Pendente</div>
                <div>Pendente</div>
                <div>Pendente</div>
            </div>
        </div>
        <Pagination defaultCurrent={1} total={50} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;