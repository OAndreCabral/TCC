import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Styles from './Login.module.css';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 16, }}
            style={{ minWidth: 600, }}
            initialValues={{ remember: true, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={Styles.formsComplete}
            
        >
            <div className={Styles.formsLogin}>
                <img className={Styles.logo} src={logo} alt="Logo de um caminhão"/>
                <div>

                <Form.Item
                    label="Email"
                    name="usuario"
                    rules={[
                        {
                        required: true,
                        message: 'Insira o nome de usuario',
                        },
                    ]}
                >
                <Input />
                </Form.Item>
        
                <Form.Item
                    label="Senha"
                    name="senha"
                    rules={[
                        {
                        required: true,
                        message: 'Insira sua senha',
                        },
                    ]}
                >
                <Input.Password />
                </Form.Item>
        
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                <Checkbox>Lembrar dados</Checkbox>
                </Form.Item>
        
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Link to="/home">
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            >
                            Entrar
                        </Button>
                    </Link>
                </Form.Item>
                </div>
            </div>

      </Form>
    );
}

export default Login;