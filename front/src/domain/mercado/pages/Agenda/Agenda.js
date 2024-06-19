import React, { useState } from 'react';
import Styles from './Agenda.module.css';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DatabaseOutlined,
  TruckOutlined,
  ContainerOutlined,
  CarryOutOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Calendario from '../../../../components/Calendario';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          className={Styles.menu}
          items={[
            {
              key: '1',
              icon: <DatabaseOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <TruckOutlined />,
              label: <Link to="/encomendas">Encomendas</Link>,
            },
            {
              key: '3',
              icon: <ContainerOutlined />,
              label: <Link to='/fornecedores'>Fornecedores</Link>,
            },
            {
              key: '4',
              icon: <CarryOutOutlined />,
              label: <Link to='/agenda'>Agenda</Link>,
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: <Link to='/filiais'>Filiais</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: 'gray',
          }}
        >
          <div className={Styles.header}>
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
            <div className={Styles.headerUser}>
              <UserOutlined />
              <div>Bátima Fernades</div>
            </div>
          </div>
        </Header>
        <Content className={Styles.content}>
            <div>
                <h1 className={Styles.contentTitle}>Agenda</h1>
            </div>
            <Calendario />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
