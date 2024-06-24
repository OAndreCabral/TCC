import React from 'react';
import { Button, Checkbox, Form, Image, Layout, message } from 'antd';
import Styles from './Login.module.css';
import Logo from '../../../../assets/logo.jpg'
import LoginImage from '../../../../assets/Rectangle 4.png'
import BotaoInput from '../../../../components/BotaoInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Content } = Layout;

const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/login', values);
            
            console.log('Success:', response.data);

            if (values.remember) {
                localStorage.setItem('user', JSON.stringify(response.data));
            } else {
                sessionStorage.setItem('user', JSON.stringify(response.data));
            }

            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                message.error('Credenciais inválidas. Por favor, tente novamente.');
            } else {
                console.log('Failed:', error);
            }
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Content className={Styles.content}>
            <Image
                width={"50vw"}
                height={"100vh"}
                preview={false}
                src={LoginImage}
                style={{ objectFit: 'cover' }}
            />
            <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <div className={Styles.formsLogin}>
                    <div className={Styles.headerLogin}>
                        <Image width={200} preview={false} src={Logo} />
                        <p style={{ fontSize: '20px', color: '#424242' }}>Sua logistica em um só lugar</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                        <p style={{ fontSize: '25px', color: '#424242', marginBottom: '20px' }}>Login</p>
                        <Form.Item 
                            name="email"
                            style={{ width: '40%' }}
                            rules={[
                                { required: true, message: 'Por favor, insira seu e-mail!' },
                                { type: 'email', message: 'O e-mail é inválido!' },
                            ]}
                        >
                            <BotaoInput placeholder={"E-mail"} onChange={e => form.setFieldsValue({ email: e.target.value })} maxLength={100}/>
                        </Form.Item>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Form.Item
                                name="password"
                                style={{ width: '40%', margin: 0 }}
                                rules={[
                                    { required: true, message: 'Por favor, insira sua senha!' },
                                ]}
                            >
                                <BotaoInput placeholder={"Senha"} password onChange={e => form.setFieldsValue({ password: e.target.value })} maxLength={100}/>
                            </Form.Item>
                            <Form.Item style={{ width: '40%' }} name="remember" valuePropName="checked">
                                <Checkbox>Lembrar de mim</Checkbox>
                            </Form.Item>
                        </div>
                        <Form.Item  className={Styles.formButton}>
                            <Button className={Styles.button} type="primary" htmlType="submit">Entrar</Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </Content>
    );
}

export default Login;