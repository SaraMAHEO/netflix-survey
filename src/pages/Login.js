import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from '../components/Logo';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const onFinish = (values) => {
        setUser(values.username);
        navigate("/home");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Logo />
            <div className="login-form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez entrer un nom utilisateur!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez entrer un mot de passe!',
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
                        <Checkbox>Se souvenir de moi</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >

                        <Button type="primary" htmlType="submit">
                            Se connecter
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
};

export default Login;