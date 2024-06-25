import { Avatar, Dropdown, Menu } from "antd";
import React from "react";
import {
    UserOutlined,
    DownOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import Style from './Perfil.module.css'
import { useNavigate } from "react-router-dom";

const Perfil = ({ fantasyName }) => {
    const navigate = useNavigate();

    const handleEditar = () => {
        navigate('/editar-perfil');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');

        navigate('/');
    };
    
    const menu = (
        <Menu>
            <Menu.Item key="0" icon={<EditOutlined />} onClick={handleEditar}>
                Editar Perfil
            </Menu.Item>
            <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    const truncatedFantasyName = fantasyName.length > 20 ? fantasyName.substring(0, 20) + '...' : fantasyName;

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div className={Style.perfil}>
                <Avatar size="large" icon={<UserOutlined />}/>
                <p>{truncatedFantasyName}</p>
                <DownOutlined />
            </div>
        </Dropdown>
    )
}

export default Perfil;
