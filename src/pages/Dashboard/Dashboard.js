import React, { useState } from 'react';
import Styles from './Dashboard.module.css';
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
import { Button, Layout, Menu, Row, Col, theme } from 'antd';
import Cards from '../../components/Cards';
import BotaoBuscar from '../../components/BotaoBuscar';
import DropdownButton from '../../components/DropdownButton';
import Datepicker from '../../components/Datepicker';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4th menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

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
            <h1 className={Styles.contentTitle}>Dashboard</h1>
          </div>
          <div className={Styles.contentButtons}>
            <Row gutter={[16, 16]}>
              <Col xs={28} sm={28} md={28} lg={28}>
                <DropdownButton placeholder="Buscar Filial" items={items}/>
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Datepicker />
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <BotaoBuscar />
              </Col>
            </Row>
          </div>
          <div className={Styles.contentCards}>
            <Row gutter={[16, 16]}>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Cards titulo="Entregues" value={35} />
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Cards titulo="Pendentes" value={35} />
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Cards titulo="Cancelados" value={35} />
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Cards titulo="Aguardando Aprovação" value={35} />
              </Col>
              <Col xs={28} sm={28} md={28} lg={28}>
                <Cards titulo="Valor" value={35} />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
