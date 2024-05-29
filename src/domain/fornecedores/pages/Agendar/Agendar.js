import React, { useState } from 'react';
import Styles from './Agendar.module.css';

import { Link } from 'react-router-dom';
import {
  EditOutlined,
  DatabaseOutlined,
  TruckOutlined,
  ContainerOutlined,
  CarryOutOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,DownloadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row, Col } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import Datepicker from '../../../../components/Datepicker';
import TextArea from 'antd/es/input/TextArea';

const { Header, Sider, Content } = Layout;

const History = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large');
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
          defaultSelectedKeys={['2']}
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
            backgroundColor: 'gray'
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className={Styles.contentTitle}>
                <h1>Encomenda</h1>
          </div>
          <div className={Styles.contentButtons}>
              <Row gutter={[26, 16]} className={Styles.button}>
                <Col xs={24} sm={22} md={24} lg={6}>
                  <BotaoInput placeholder={"Filial"}/>
                </Col>
                <Col xs={24} sm={22} md={24} lg={6}>
                  <BotaoInput placeholder={"Situação"}/>
                </Col>
                <Col xs={24} sm={18} md={16} lg={3}>
                  <Datepicker disabled={true} />
                </Col>
                <Col xs={2} sm={12} md={9} lg={6}>
                  <Button type="primary" icon={<DownloadOutlined />} size={size}>
                    PDF NFe
                  </Button>
                </Col>
                <Col xs={24} sm={22} md={24} lg={17}>
                  <TextArea 
                    rows={25} 
                    cols={18} 
                    placeholder="Descrição" 
                  />
                </Col>
              </Row>
          </div>
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