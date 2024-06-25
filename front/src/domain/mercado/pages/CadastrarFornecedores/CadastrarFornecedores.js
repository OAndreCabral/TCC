import React, { useContext, useState } from 'react';
import Styles from './CadastrarFornecedores.module.css';
import BotaoInput from '../../../../components/BotaoInput';
import { Button, Layout, Row, Col, Modal, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../../components/MainLayout';

const { Content } = Layout;

const CadastrarFornecedores = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { user, updateUser } = useContext(UserContext);

  function validateCNPJ(_, value) {
    const cnpj = value.replace(/\D/g, '');
  
    if (cnpj.length !== 14) {
      return Promise.reject(new Error('O CNPJ deve ter 14 dígitos!'));
    }
  
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += cnpj[i] * weight--;
      if (weight < 2) weight = 9;
    }
    let firstDigit = (sum % 11 < 2) ? 0 : 11 - sum % 11;
  
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += cnpj[i] * weight--;
      if (weight < 2) weight = 9;
    }
    let secondDigit = (sum % 11 < 2) ? 0 : 11 - sum % 11;
  
    if (firstDigit !== Number(cnpj[12]) || secondDigit !== Number(cnpj[13])) {
      return Promise.reject(new Error('CNPJ inválido!'));
    }
  
    return Promise.resolve();
  }  

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
    let cep = values.cep;
    let tellphone = values.tellphone;
    cep = cep.replace(/\D/g, '');
    tellphone = tellphone.replace(/\D/g, '');

    const createBranch = {
      fantasy_name: values.nomeFantasia,
      corporate_reason: values.razaoSocial,
      email: values.email,
      password: values.password,
      phone_number: tellphone,
      cnpj: values.cnpj,
      user_type: "PROVIDER",
      address: {
        street: values.logradouro,
        number: values.numero,
        cep: cep,
        district: values.bairro,
        city: values.municipio,
        state: values.estado
      }
    }

    axios.post(`http://localhost:3000/users`, createBranch, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log('Perfil atualizado com sucesso:', response);
      message.success('Usuário atualizado com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao atualizar o perfil:', error);
      if (error.response && error.response.status === 409) {
        message.error(error.response.data.message);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  async function handleCepChange(e) {
    let cep = e.target.value;
    cep = cep.replace(/\D/g, '');
    const token = user.token;
    try {
      const response = await axios.post(`http://localhost:3000/busca-cep?cep=${cep}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = response.data;
      if (data) {
        form.setFieldsValue({
          logradouro: data.logradouro,
          bairro: data.bairro,
          estado: data.uf,
          municipio: data.localidade,
        });
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  }
  
  return (
    <Content className={Styles.content}>
    <div className={Styles.contentTitleFornecedores}>
      <h1>Cadastrar fornecedor</h1>
    </div>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="nomeFantasia"
              rules={[
                { required: true, message: 'Por favor, insira seu nome fantasia!' },
              ]}
            >
              <BotaoInput placeholder={"Nome Fantasia"} maxLength={255}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="cnpj"
              rules={[
                { required: true, message: 'Por favor, insira seu CNPJ!' },
                { validator: validateCNPJ, message: 'Por favor, insira um CNPJ válido!' },
              ]}
            >
              <BotaoInput mask="99.999.999/9999-99" placeholder="CNPJ"/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu e-mail!' },
              { type: 'email', message: 'O e-mail é inválido!' },
          ]}>
              <BotaoInput placeholder={"E-mail"} maxLength={100}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="razaoSocial"
              rules={[
                { required: true, message: 'Por favor, insira sua razão social!' },
              ]}
            >
              <BotaoInput placeholder={"Razão Social"} maxLength={255}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
          <Form.Item name="tellphone"
             rules={[
              { required: true, message: 'Por favor, insira seu telefone!' },
            ]}
          >
            <BotaoInput mask="(99) 99999-9999" placeholder={"Telefone"}/>
          </Form.Item>         
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="password">
              <BotaoInput password placeholder={"Senha"} maxLength={100}/>
            </Form.Item>
          </Col>
        </Row>
      </div>
      <div className={Styles.contentTitleEndereco}>
        <h1>Endereço</h1>
      </div>
      <Row gutter={[16, 16]}>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="cep"
              rules={[
                { required: true, message: 'Por favor, insira seu cep!' },
              ]}
            >
              <BotaoInput mask="99999-999" placeholder={"CEP"} onBlur={handleCepChange}/>
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="logradouro"
              rules={[
                { required: true, message: 'Por favor, insira seu logradouro!' },
              ]}  
            >
              <BotaoInput placeholder={"Logradouro"} />
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="numero"
              rules={[
                { required: true, message: 'Por favor, insira seu número!' },
              ]} 
            >
              <BotaoInput placeholder={"Número"} />
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="complemento">
             <BotaoInput placeholder={"Complemento"} />
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="bairro"
              rules={[
                { required: true, message: 'Por favor, insira seu bairro!' },
              ]} 
            >
              <BotaoInput placeholder={"Bairro"} />
            </Form.Item>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Form.Item name="estado" rules={[
                  { required: true, message: 'Por favor, insira seu estado!' },
            ]} >
               <BotaoInput placeholder={"Estado"} />
            </Form.Item>       
          </Col>
          <Col xs={18} sm={12} md={6} lg={6}>
          <Form.Item name="municipio" rules={[
                { required: true, message: 'Por favor, insira sua cidade!' },
          ]} >
            <BotaoInput placeholder={"Cidade"} />
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
  </Content>
  );
};

export default CadastrarFornecedores;