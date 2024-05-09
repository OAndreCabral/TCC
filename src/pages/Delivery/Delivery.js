import React, { useState } from 'react';
import Styles from './Delivery.module.css';

import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,  MenuUnfoldOutlined,
  HomeOutlined,  DesktopOutlined,
  CalendarOutlined, ShoppingCartOutlined,
  SettingOutlined,  LogoutOutlined,
  UserOutlined,  DownOutlined,
  CloudUploadOutlined,  UploadOutlined,
  CarOutlined,
} from '@ant-design/icons';

import { 
  Button, Layout, 
  Menu, theme, 
  Dropdown, Space, 
  Upload, DatePicker,
  Input,   
} from 'antd';

const onOk = (value) => {
  return value;
};

const { TextArea } = Input;

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
          defaultSelectedKeys={['2']}
          className={Styles.menu}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/">Inicio</Link>,
            },
            {
              key: '2',
              icon: <DesktopOutlined />,
              label: <Link to="/agendamento">Agendamento</Link>,
            },
            {
              key: '3',
              icon: <CalendarOutlined />,
              label: <Link to='/historico'>Histórico de Entrega</Link>,
            },
            {
              key: '4',
              icon: <SettingOutlined />,
              label: <Link to='/configuracao'>Configuração</Link>,
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: <Link to='/sair'>Sair</Link>,
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
          <div className={Styles.infoDate}>
            <div>Selecione a Loja de Destino</div>
            <div className={Styles.iconSelectPlace}>
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
          <div className={Styles.infoDate}>
            <div>Anexar Nota Fiscal</div>
            <div className={Styles.iconSelectNF}>
              <CloudUploadOutlined color='blue'/>
              <Upload directory>
                <Button icon={<UploadOutlined />}>Adicionar Arquivo</Button>
              </Upload>
            </div>
          </div>
          <div className={Styles.infoDate}>
            <div>Selecione a Data e o Horario da Entrega</div>
            <div className={Styles.iconSelectDate}>
              <CalendarOutlined />
              <Space direction="vertical" size={12}>
                <DatePicker
                  showTime
                  onChange={(value, dateString) => {
                    return value, dateString;
                  }}
                  onOk={onOk}
                />
              </Space>
            </div>
          </div>
          <div className={Styles.infoDate}>
            <div>Especificação da Mercadoria</div>
            <div className={Styles.iconSelectInput}>
              <ShoppingCartOutlined />
              <TextArea rows={4} cols={48} />
            </div>
          </div>
          <div className={Styles.infoDate}>
            <div>Especificação do Veiculo</div>
            <div className={Styles.iconSelectCar}>
              <CarOutlined />
              <TextArea rows={1} placeholder="ABC-1234" maxLength={8} />
              <TextArea rows={1} placeholder="Ex: Peugeot Boxer" maxLength={10} />
            </div>
          </div>
          <Button className={Styles.button}>Enviar</Button>
        </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Delivery;