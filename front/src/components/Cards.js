import React, { useState } from 'react';
import { Card, Modal, Space, Tooltip } from 'antd';
import {
    MenuOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';

const TitleCard = ({title, information}) => {
    return (
        <span style={{ color: 'white' }}>
            {title} {information ? 
            (
                <Tooltip title={information} color='black'>
                    <QuestionCircleOutlined/> 
                </Tooltip> 
            ) : null}
        </span>
    )
}

const ContentCard = ({title, information, pathModal, value}) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: "20px"
                }}
            >
                <TitleCard title={title} information={information}/>
                {pathModal ? <MenuOutlined style={{ color: 'white' }} /> : null}
            </div>
            <div
                style={{
                    fontSize: "20px"
                }}
            >
                {value}
            </div>
        </div>
    )
}

const CustomModal = ({isVisible, handleOk, handleCancel, children}) => {
    return (
        <Modal
            title="Título da Modal"
            visible={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            closable={true}
            maskClosable={true}
        >
            {children}
        </Modal>
    );
};

// Seu componente Cards atualizado
const Cards = ({content}) => {
    const {title, information, pathModal, value} = content;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Space direction="vertical" size={16}>
                <Card
                    hoverable={pathModal ? true : false}
                    onClick={pathModal ? showModal : null}
                    className="custom-card .ant-card-head-title"
                    style={{
                        width: 300,
                        backgroundColor: 'rgba(0, 73, 138, 1)',
                        color: 'white'
                    }}
                >
                    <ContentCard title={title} information={information} pathModal={pathModal} value={value}/>
                </Card>
            </Space>

            <CustomModal isVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}>
                {123123123123}
            </CustomModal>
        </>
    )
};

export default Cards;