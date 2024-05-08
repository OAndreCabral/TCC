import React, { useState } from 'react';
import Styles from './History.module.css';
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
import { Button, Layout, Menu, theme, Table } from 'antd';

const { Header, Sider, Content } = Layout;

const History = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const data = [
      {
        key: '1',
        date: '01/03/2024',
        time: '17:45',
        store: 'Paraná Familia',
        status: 'Pendente',
        received: ''
      },
      {
        key: '2',
        date: '01/03/2024',
        time: '17:45',
        store: 'Paraná Atacadista',
        status: 'Pendente',
        received: ''
      },
      {
        key: '3',
        date: '01/03/2024',
        time: '17:45',
        store: 'Paraná Centro',
        status: 'Pendente',
        received: ''
      },
      {
        key: '4',
        date: '01/03/2024',
        time: '17:45',
        store: 'Paraná Familia',
        status: 'Pendente',
        received: ''
      },
      {
        key: '5',
        date: '02/03/2024',
        time: '09:30',
        store: 'Paraná Familia',
        status: 'Entregue',
        received: ''
      },
      {
        key: '6',
        date: '03/03/2024',
        time: '14:15',
        store: 'Paraná Centro',
        status: 'Pendente',
        received: ''
      },
      {
        key: '7',
        date: '04/03/2024',
        time: '11:00',
        store: 'Paraná Familia',
        status: 'Em trânsito',
        received: ''
      },
      {
        key: '8',
        date: '05/03/2024',
        time: '18:20',
        store: 'Paraná Centro',
        status: 'Entregue',
        received: ''
      },
      {
        key: '9',
        date: '06/03/2024',
        time: '10:45',
        store: 'Paraná Atacadista',
        status: 'Pendente',
        received: ''
      },
      {
        key: '10',
        date: '07/03/2024',
        time: '16:30',
        store: 'Paraná Centro',
        status: 'Em trânsito',
        received: ''
      },
      {
        key: '11',
        date: '08/03/2024',
        time: '08:00',
        store: 'Paraná Familia',
        status: 'Entregue',
        received: ''
      },
      {
        key: '12',
        date: '09/03/2024',
        time: '13:45',
        store: 'Paraná Atacadista',
        status: 'Pendente',
        received: ''
      },
      {
        key: '13',
        date: '10/03/2024',
        time: '15:10',
        store: 'Paraná Atacadista',
        status: 'Em trânsito',
        received: ''
      },
      {
        key: '14',
        date: '11/03/2024',
        time: '07:30',
        store: 'Paraná Familia',
        status: 'Entregue',
        received: ''
      },
      {
        key: '15',
        date: '12/03/2024',
        time: '12:00',
        store: 'Paraná Centro',
        status: 'Pendente',
        received: ''
      },
      {
        key: '16',
        date: '13/03/2024',
        time: '14:50',
        store: 'Paraná Atacadista',
        status: 'Em trânsito',
        received: ''
      },
      {
        key: '17',
        date: '14/03/2024',
        time: '09:15',
        store: 'Paraná Atacadista',
        status: 'Entregue',
        received: ''
      },
      {
        key: '18',
        date: '15/03/2024',
        time: '16:40',
        store: 'Paraná Familia',
        status: 'Pendente',
        received: ''
      },
      {
        key: '19',
        date: '16/03/2024',
        time: '11:20',
        store: 'Paraná Atacadista',
        status: 'Em trânsito',
        received: ''
      }
    ];

    const columns = [
      {
        title: 'DATA DE ENTREGA',
        dataIndex: 'date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
          return new Date(a.date) - new Date(b.date);
        },
      },
      {
        title: 'HORA',
        dataIndex: 'time',
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
          return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
        },
      },
      {
        title: 'LOJA',
        dataIndex: 'store',
        filters: [
          {
            text: 'Paraná Familia',
            value: 'Paraná Familia',
          },
          {
            text: 'Paraná Atacadista',
            value: 'Paraná Atacadista',
          },
          {
            text: 'Paraná Centro',
            value: 'Paraná Centro',
          },
        ],
        onFilter: (value, record) => record.store.indexOf(value) === 0,
      },
      {
        title: 'STATUS',
        dataIndex: 'status',
        filters: [
          {
            text: 'Pendente',
            value: 'Pendente',
          },
          {
            text: 'Entregue',
            value: 'Entregue',
          },
          {
            text: 'Em trânsito',
            value: 'Em trânsito',
          },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: 'Recebido por',
        dataIndex: 'received',
        filters: [
          {
            text: 'Pedro',
            value: 'Pedro',
          },
          {
            text: 'Gabriel',
            value: 'Gabriel',
          },
          {
            text: 'José',
            value: 'José',
          },
          {
            text: 'Carlos',
            value: 'Carlos',
          },
        ],
        onFilter: (value, record) => record.received.indexOf(value) === 0,
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
                icon: <HomeOutlined />,
                label: 'Inicio',
              },
              {
                key: '2',
                icon: <DesktopOutlined />,
                label: 'Agendamento',
              },
              {
                key: '3',
                icon: <CalendarOutlined />,
                label: 'Histórico de Entrega',
              },
              {
                key: '4',
                label: 'Configuração',
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
        <div className={Styles.title}>Histórico de Entrega</div>
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