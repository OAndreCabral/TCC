import React, { useState } from 'react';
import Styles from './CadastrarFornecedores.module.css';

import { Link } from 'react-router-dom';
import {
  DatabaseOutlined, DesktopOutlined,
  CalendarOutlined, SettingOutlined, LogoutOutlined, 
  LeftCircleOutlined, RightCircleOutlined, UserOutlined,
} from '@ant-design/icons';
import { 
  Button, Layout, Menu, theme, Switch, 
  Row, Col, Space 
} from 'antd';
import BotaoInput from '../../components/BotaoInput';

const { Header, Sider, Content } = Layout;

const History = () => {
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
          defaultSelectedKeys={['3']}
          className={Styles.menu}
          items={[
            {
              key: '1',
              icon: <DatabaseOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <DesktopOutlined />,
              label: <Link to="/encomendas">Encomendas</Link>,
            },
            {
              key: '3',
              icon: <CalendarOutlined />,
              label: <Link to='/fornecedores'>Fornecedores</Link>,
            },
            {
              key: '4',
              icon: <SettingOutlined />,
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
            backgroundColor: 'gray'
          }}
        >
            <div className={Styles.header}>
                <Button
                type="text"
                icon={collapsed ? <RightCircleOutlined /> : <LeftCircleOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    color: 'black'
                }}
                />
                <div className={Styles.headerUser}>
                    <UserOutlined />
                    <div>Bátima Fernades</div>
                </div>
            </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 35,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className={Styles.contentTitleFornecedores}>
            <h1>Cadastrar Fornecedores</h1>
          </div>
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Nome Fantasia"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"CNPJ"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"E-mail"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
              <BotaoInput placeholder={"Senha"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Razão Social"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Telefone"}/>         
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
              </Col>
            </Row>
          </div>
          <div className={Styles.contentTitleEndereco}>
            <h1>Endereço</h1>
          </div>
          <Row gutter={[16, 16]}>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"CEP"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Logradouro"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Número"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
              <BotaoInput placeholder={"Complemento"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Bairro"}/>
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"País"}/>         
              </Col>
              <Col xs={18} sm={12} md={8} lg={6}>
                <BotaoInput placeholder={"Estado"}/>         
              </Col>
              <Col xs={18} sm={12} md={6} lg={6}>
                <BotaoInput placeholder={"Municipio"}/>         
              </Col>
          </Row>
          <Row gutter={[16, 16]} className={Styles.contentBottomButton}>
            <Col>
              <Button>Cancelar</Button>
            </Col>
            <Col>
              <Button type='primary'>Salvar</Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default History;