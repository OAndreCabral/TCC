import React, { useContext, useEffect, useState } from 'react';
import Styles from './Nfe.module.css';
import { InboxOutlined } from '@ant-design/icons';

import { Button, Col, DatePicker, Form, Layout, Modal, Row, Select, Upload, message } from 'antd';
import BotaoInput from '../../../../components/BotaoInput';
import axios from 'axios';
import { UserContext } from '../../../../components/MainLayout';
import TextArea from 'antd/lib/input/TextArea';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const { Dragger } = Upload;
const { Content } = Layout;

const STATUS = [
    {
        key: "AG_CONFIRMACAO",
        label: "Ag. Confirmação"
    },
    {
        key: "AG_ENTREGA",
        label: "Ag. Entrega"
    },
    {
        key: "CANCELADO",
        label: "Cancelado"
    },
    {
        key: "ENTREGUE",
        label: "Entregue"
    },
]

const Nfe = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [filiais, setFiliais] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        const token = user.token;

        axios.get('http://localhost:3000/users/list-branch',  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }).then(response => {
                setFiliais(response.data);
        }).catch(error => {
            console.error('Erro ao buscar filiais:', error);
        });

        axios.get('http://localhost:3000/users/list-provider',  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setFornecedores(response.data);
        }).catch(error => {
            console.error('Erro ao buscar filiais:', error);
        });
    }, [user.token]);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
        navigate(-1);
    };
    
    const handleCancel = () => {
        setVisible(false);
    };

    const handleFornecedorChange = async (value) => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${value}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            form.setFieldsValue({
                cnpj: response.data.cnpj,
                email: response.data.email,
                tellphone: response.data.phone_number,
                razaoSocial: response.data.corporate_reason
            });
        } catch (error) {
            console.error('Erro ao buscar detalhes do fornecedor:', error);
        }
    };

    const onFinish = async (values) => {
        const formData = new FormData();
        
        for (const key in values) {
            if (values[key] instanceof moment) {
                formData.append(key, values[key].format('YYYY-MM-DD'));
            } else {
                formData.append(key, values[key]);
            }
        }

        if (fileList.length > 0) {
            formData.append('nfe', fileList[0].originFileObj);
        }

        try {
            const response = await axios.post('http://localhost:3000/schedules', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.token}`
                }
            });
    
            console.log('Resposta do servidor:', response.data);

            message.success('Encomenda criada com sucesso!');
            navigate(-1);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                message.error(error.response.data.message);
            } else {
                console.error('Erro ao enviar o formulário:', error);
            }
        }
    };
    
    return (
        <Content className={Styles.content}>
            <h1>Encomenda</h1>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}
            >
                <div style={{ display: 'flex', width: '100%', gap: '100px', justifyContent: 'center' }}>
                    <Form.Item style={{ width: '30%', height: '100%' }} name="nfe" rules={[{validator: (_, value) =>  fileList.length ? Promise.resolve() : Promise.reject(new Error('Por favor, faça upload de um arquivo!'))}]}>
                        <Dragger
                            multiple={false}
                            style={{ height: '100%' }} 
                            accept=".xml"
                            beforeUpload={(file) => {
                                if (file.type !== 'text/xml') {
                                    message.error('Por favor, faça upload de um arquivo XML!');
                                    return false;
                                }
                                return true;
                            }}
                            onChange={(info) => {
                                if (info.fileList.length > 1) {
                                    info.fileList = info.fileList.slice(-1);
                                }
                                setFileList(info.fileList);
                            }}
                        >
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Clique ou arrate seu documento .xml para área de upload</p>
                        </Dragger>
                    </Form.Item>
                    <div >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Form.Item name="filial" rules={[{required: true, message: 'Por favor, selecione uma filial!'}]}>
                                    <Select placeholder="Selecione uma filial" size='large'>
                                        {filiais.map(filial => (
                                            <Select.Option key={filial.id} value={filial.id}>
                                                {filial.fantasy_name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Form.Item name="date" rules={[{required: true, message: 'Por favor, selecione a data de entrega!'}]}>
                                    <DatePicker placeholder="Selecione a data de entrega" style={{ width: '100%' }} size='large' format="DD-MM-YYYY"/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <Form.Item name="status" rules={[{required: true, message: 'Por favor, selecione o status!'}]}>
                                    <Select placeholder="Selecione o status" size='large'>
                                        {STATUS.map(status => (
                                            <Select.Option key={status.key} value={status.key}>
                                                {status.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item name="description" style={{ height: '100%' }} >
                                    <TextArea
                                        style={{ height: '300px' }} 
                                        showCount
                                        size='large'
                                        maxLength={255}
                                        placeholder="Descrição"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <h1>Fornecedor</h1>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <Form.Item name="fornecedor" rules={[{required: true, message: 'Por favor, selecione um fornecedor!'}]}>
                                <Select placeholder="Selecione uma filial" size='large' onChange={handleFornecedorChange}>
                                    {fornecedores.map(filial => (
                                        <Select.Option key={filial.id} value={filial.id}>
                                            {filial.fantasy_name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={18} sm={12} md={8} lg={6}>
                            <Form.Item name="cnpj">
                                <BotaoInput disabled mask="99.999.999/9999-99" placeholder="CNPJ"/>
                            </Form.Item>
                        </Col>
                        <Col xs={18} sm={12} md={8} lg={6}>
                            <Form.Item name="email">
                                <BotaoInput disabled placeholder={"E-mail"} maxLength={100}/>
                            </Form.Item>
                        </Col>
                        <Col xs={18} sm={12} md={8} lg={6}>
                            <Form.Item name="tellphone">
                                <BotaoInput disabled mask="(99) 99999-9999" placeholder={"Telefone"}/>
                            </Form.Item>         
                        </Col>
                        <Col xs={18} sm={12} md={8} lg={6}>
                            <Form.Item name="razaoSocial">
                                <BotaoInput disabled placeholder={"Razão Social"} maxLength={255}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <Row gutter={[16, 16]} className={Styles.contentBottomButton}>
                    <Col>
                        <Button onClick={showModal} className={Styles.buttonCancel}>Cancelar</Button>
                        <Modal
                            title="Confirmação"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <p>Tem certeza de que deseja cancelar a atualização?</p>
                        </Modal>
                    </Col>
                    <Col>
                        <Button
                        type='primary'
                        className={Styles.buttonSalvar}
                        onClick={() => form.submit()} 
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#001C36';
                            e.target.style.color = 'white';
                            e.target.style.borderColor = 'white';
                        }}
                        >
                        Salvar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Content>
    );
};

export default Nfe;