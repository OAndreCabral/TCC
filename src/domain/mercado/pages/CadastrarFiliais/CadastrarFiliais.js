import React, { useState } from 'react';
import Styles from './CadastrarFiliais.module.css';
import BotaoInput from '../../../../components/BotaoInput';
import { Button, Layout, Row, Col, Modal, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const CadastrarFiliais = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

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

  const onFinish = (values) => {
    console.log('Success:', values);
    // Aqui você pode adicionar a lógica para lidar com os valores do formulário
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Content className={Styles.content}>
    <div className={Styles.contentTitleFornecedores}>
      <h1>Cadastrar filial</h1>
    </div>
    <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="nomeFantasia">
              <BotaoInput placeholder={"Nome Fantasia"} onChange={value => form.setFieldsValue({ nomeFantasia: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="cnpj">
              <BotaoInput placeholder={"CNPJ"} onChange={value => form.setFieldsValue({ cnpj: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="email">
              <BotaoInput placeholder={"E-mail"} onChange={value => form.setFieldsValue({ email: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="password">
              <BotaoInput placeholder={"Senha"} onChange={value => form.setFieldsValue({ password: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="razaoSocial">
              <BotaoInput placeholder={"Razão Social"} onChange={value => form.setFieldsValue({ razaoSocial: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
          <Form.Item name="tellphone">
            <BotaoInput placeholder={"Telefone"} onChange={value => form.setFieldsValue({ tellphone: value })}/>
          </Form.Item>         
          </Col>
        </Row>
      </div>
      <div className={Styles.contentTitleEndereco}>
        <h1>Endereço</h1>
      </div>
      <Row gutter={[16, 16]}>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="cep">
              <BotaoInput placeholder={"CEP"} onChange={value => form.setFieldsValue({ cep: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="logradouro">
              <BotaoInput placeholder={"Logradouro"} onChange={value => form.setFieldsValue({ logradouro: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="numero">
              <BotaoInput placeholder={"Número"} onChange={value => form.setFieldsValue({ numero: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="complemento">
             <BotaoInput placeholder={"Complemento"} onChange={value => form.setFieldsValue({ complemento: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="bairro">
              <BotaoInput placeholder={"Bairro"} onChange={value => form.setFieldsValue({ bairro: value })}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="estado">
             <BotaoInput placeholder={"Estado"} onChange={value => form.setFieldsValue({ estado: value })}/>  
            </Form.Item>         
          </Col>
          <Col xs={18} sm={12} md={6} lg={6}>
            <Form.Item name="municipio">
              <BotaoInput placeholder={"Municipio"} onChange={value => form.setFieldsValue({ municipio: value })}/>
            </Form.Item>         
          </Col>
      </Row>
    </Form>
    <Row gutter={[16, 16]} className={Styles.contentBottomButton}>
      <Col>
        <Button onClick={showModal} className={Styles.buttonCancel}>Cancelar</Button>
        <Modal
            title="Confirmação"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Tem certeza de que deseja cancelar o cadastro?</p>
          </Modal>
      </Col>
      <Col>
        <Button
          type='primary'
          className={Styles.buttonSalvar}
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
  </Content>
  );
};

export default CadastrarFiliais;