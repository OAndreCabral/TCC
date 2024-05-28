import React, { useState } from 'react';
import Styles from './Filiais.module.css';

import { Link } from 'react-router-dom';
import {
  EditOutlined,
  DatabaseOutlined,
  TruckOutlined,
  ContainerOutlined,
  CarryOutOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,SignalFilled,
  UserOutlined,PlusOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Table, Row, Col, Space } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import BotaoBuscar from '../../../../components/BotaoBuscar';

const { Header, Sider, Content } = Layout;

const History = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const data = [
      {
        key: '1',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      },
      {
        key: '2',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '3',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '4',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '5',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      },
      {
        key: '6',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '7',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '8',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '9',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      },
      {
        key: '10',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '11',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '12',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      },
      {
        key: '13',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '14',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '15',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      },
      {
        key: '16',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '17',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '18',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Ativo',
      },
      {
        key: '19',
        nomeFantasia: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
        CNPJ: '12.345.678/0001-95',
        status: 'Inativo',
      }
    ];

    const columns = [
      {
        title: 'ID',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key,
      },
      {
        title: 'Nome Fantasia',
        dataIndex: 'nomeFantasia',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.nomeFantasia.localeCompare(b.nomeFantasia),
      },
      {
        title: 'CNPJ',
        dataIndex: 'CNPJ',
        sorter: (a, b) => a.CNPJ.localeCompare(b.CNPJ),
      },
      {
        title: 'Situação',
        dataIndex: 'status',
        filters: [
          {
            text: 'Ativo',
            value: 'Ativo',
          },
          {
            text: 'Inativo',
            value: 'Inativo',
          },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: 'Ações',
        render: (record) => (
          <Link to={`/edit-fornecedores/${record.key}`}>
            <EditOutlined style={{ cursor: 'pointer' }} />
          </Link>
        )
      },     
    ];

    const onChange = (pagination, filters, sorter, extra) => {
      return ('params', pagination, filters, sorter, extra);
    };
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
          <h1>Filiais</h1>
        </div>
        <div className={Styles.contentButtons}>
          <Row gutter={[16, 16]}>
            <Col xs={28} sm={28} md={28} lg={28}>
              <BotaoInput placeholder={"Nome Fantasia"}/>
            </Col>
            <Col xs={28} sm={28} md={28} lg={28}>
              <BotaoInput placeholder={"CNPJ"}/>
              </Col>
            <Col xs={28} sm={28} md={28} lg={28}>
              <BotaoBuscar />
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={[16, 16]} className={Styles.contentTopButtons}>
            <Col>
              <Button icon={<SignalFilled />}>Colunas</Button>
            </Col>
            <Col>
              <Button type='primary' icon={<PlusOutlined />}>Adicionar</Button>
            </Col>
          </Row>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          showSorterTooltip={{
            target: 'sorter-icon',
          }}
        />
        </Content>
      </Layout>
    </Layout>
  );
};

export default History;