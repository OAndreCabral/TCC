import { Button, Layout, Menu, theme, Table, Row, Col } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import BotaoBuscar from '../../../../components/BotaoBuscar';
import DropdownButton from '../../../../components/DropdownButton';
import Datepicker from '../../../../components/Datepicker';

import React, { useState } from 'react';
import Styles from './ListaEntregas.module.css';

import { Link } from 'react-router-dom';
import {
  EditOutlined,
  DatabaseOutlined,
  TruckOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,SignalFilled,
  UserOutlined,PlusOutlined,FileExclamationOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const History = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const data = [
        {
            key: '1',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aguardando Aprovação',
            data: '01/05/2023'
        },
        {
            key: '2',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aguardando Aprovação',
            data: '02/05/2023'
        },
        {
            key: '3',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aprovado',
            data: '03/05/2023'
        },
        {
            key: '4',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aprovado',
            data: '04/05/2023'
        },
        {
            key: '5',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aprovado',
            data: '05/05/2023'
        },
        {
            key: '6',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aguardando Aprovação',
            data: '06/05/2023'
        },
        {
            key: '7',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aguardando Aprovação',
            data: '07/05/2023'
        },
        {
            key: '8',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aguardando Aprovação',
            data: '08/05/2023'
        },
        {
            key: '9',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aprovado',
            data: '09/05/2023'
        },
        {
            key: '10',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aprovado',
            data: '10/05/2023'
        },
        {
            key: '11',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aguardando Aprovação',
            data: '11/05/2023'
        },
        {
            key: '12',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Max Centro',
            status: 'Aguardando Aprovação',
            data: '12/05/2023'
        },
        {
            key: '13',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aprovado',
            data: '13/05/2023'
        },
        {
            key: '14',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aprovado',
            data: '14/05/2023'
        },
        {
            key: '15',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aguardando Aprovação',
            data: '15/05/2023'
        },
        {
            key: '16',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aguardando Aprovação',
            data: '16/05/2023'
        },
        {
            key: '17',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Familia',
            status: 'Aprovado',
            data: '17/05/2023'
        },
        {
            key: '18',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aguardando Aprovação',
            data: '18/05/2023'
        },
        {
            key: '19',
            Fornecedor: 'Dragão Celestial das Terras Encantadas do Sol Nascente',
            CNPJ: '12.345.678/0001-95',
            Filial: 'Paraná Atacadista',
            status: 'Aprovado',
            data: '19/05/2023'
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
            title: 'Fornecedor',
            dataIndex: 'Fornecedor',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.nomeFantasia.localeCompare(b.nomeFantasia),
        },
        {
            title: 'CNPJ',
            dataIndex: 'CNPJ',
            sorter: (a, b) => a.CNPJ.localeCompare(b.CNPJ),
        },
        {
            title: 'Filial',
            dataIndex: 'Filial',
            sorter: (a, b) => a.CNPJ.localeCompare(b.CNPJ),
        },
        {
            title: 'Data de Entrega',
            dataIndex: 'data',
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
            title: 'Editar',
            render: (record) => (
            <Link to={`/edit-fornecedores/${record.key}`}>
                <EditOutlined style={{ cursor: 'pointer' }} />
            </Link>
            )
        },
        {
            title: 'Documento',
            render: (record) => (
            <Link to={`/edit-fornecedores/${record.key}`}>
                <FileExclamationOutlined style={{ cursor: 'pointer' }} />
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
          defaultSelectedKeys={['1']}
          className={Styles.menu}
          items={[
            {
              key: '1',
              icon: <DatabaseOutlined />,
              label: <Link to="/dashboard">Entregas</Link>,
            },
            {
              key: '2',
              icon: <TruckOutlined />,
              label: <Link to="/encomendas">Agenda</Link>,
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
          <h1>Entregas</h1>
        </div>
        <div className={Styles.contentButtons}>
          <Row gutter={[16, 16]}>
            <Col xs={28} sm={28} md={28} lg={28}>
                <BotaoInput placeholder={"Fornecedor"}/>
            </Col>
            <Col xs={28} sm={28} md={28} lg={28}>
                <DropdownButton placeholder={"Filial"}/>
            </Col>
            <Col xs={28} sm={28} md={28} lg={28}>
                <Datepicker />
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