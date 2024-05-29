import React, { useState } from 'react';
import Styles from './EditarEncomenda.module.css';

import { Link } from 'react-router-dom';
import {
  DatabaseOutlined,
  TruckOutlined,
  ContainerOutlined,
  CarryOutOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row, Col } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import TextArea from 'antd/es/input/TextArea';
import Datepicker from '../../../../components/Datepicker';

const { Header, Sider, Content } = Layout;

const EditEncomenda = () => {
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
                <h1>Editar Encomenda</h1>
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
                        <Datepicker disabled />
                    </Col>
                    <Col xs={2} sm={12} md={9} lg={6}>
                        <Button type="primary" icon={<DownloadOutlined />} size={size}>
                            PDF NFe
                        </Button>
                    </Col>
                    <Col xs={24} sm={22} md={24} lg={18}>
                        <TextArea 
                            rows={12} 
                            cols={6} 
                            placeholder="Descrição" 
                        />
                    </Col>
                </Row>
            </div>
            <div className={Styles.contentTitleEndereco}>
                <h1>Fornecedor</h1>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <BotaoInput placeholder={"Nome Fantasia"}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <BotaoInput placeholder={"CNPJ"}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <BotaoInput placeholder={"Razão Social"}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <BotaoInput placeholder={"E-mail"}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <BotaoInput placeholder={"Telefone"}/>
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

export default EditEncomenda;