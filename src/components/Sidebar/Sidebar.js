import React, { useState } from 'react';
import {
    HomeOutlined,
    DesktopOutlined,
    CalendarOutlined,
    SettingOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import './Sidebar.css';
import logo from '../../assets/logo.svg'

const items = [
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
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {setCollapsed(!collapsed);};
    return (
        <div style={{ width: 256 }}>
            <div className='header'>
            {!collapsed && <img src={logo} className='logo'/>}
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{marginBottom: 16,}}
                    >{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                className='sidebar'
            />
        </div>
    );
}

export default Sidebar;