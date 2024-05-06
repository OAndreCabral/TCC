import React, { useState } from 'react';
import Styles from './Delivery.module.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  DesktopOutlined,
  CalendarOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, Space } from 'antd';

const items = [
    {
      label: "Parana Centro",
      key: '0',
    },
    {
      label: "Parana Familia",
      key: '1',
    },
    {
        label: "Parana Lar Parana",
        key: '2',
    },
  ];

const { Header, Sider, Content } = Layout;

const Delivery = () => {
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
        <div className={Styles.title}>Agendamento de Entrega</div>
        <div className={Styles.info}>
            <div className='infoStore'>
                <div className={Styles.store}>Selecione a Loja de Destino</div>
                <div className={Styles.iconStoreSelect}>
                    <HomeOutlined />
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        >
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Selecione o Local
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className={Styles.nf}>Anexar Nota Fiscal</div>
            <div className={Styles.date}>Selecione a Data e o Horario da Entrega</div>
            <div className={Styles.product}>Especificação da Mercadoria</div>
            <div className={Styles.vehicle}>Especificação do Veiculo</div>
        </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Delivery;