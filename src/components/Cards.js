import React from 'react';
import { Card, Space } from 'antd';
import {
    MenuOutlined,
    QuestionCircleOutlined
  } from '@ant-design/icons';

const Cards = ({ titulo, value} ) => (
<Space direction="vertical" size={16}>
    <Card
    title={
        <span style={{ color: 'white' }}>
        {titulo} <QuestionCircleOutlined/>
        </span>
    }
    extra={
        <a href="#"><MenuOutlined style={{ color: 'white' }} />
        </a>
    }
    className="custom-card .ant-card-head-title"
    style={{
        width: 300,
        backgroundColor: 'rgba(0, 73, 138, 1)',
        color: 'white'
    }}
    >
    <p>{value}</p>
    </Card>
</Space>
);

export default Cards;