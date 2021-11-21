import { Button, Col, Form, Row, Input, message } from "antd";
import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useHistory } from "react-router";
import "antd/dist/antd.css"

export const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    async function onFinish(values: { email: string, password: string }) {
        try {
            await auth.authenticate(values.email, values.password);
            history.push('/pefil');

        } catch (error) {
            message.error('senha ou email invalido')
        }
    }

    return (
        <Row
            justify='center'
            align='middle'
            style={{ height: '100vh' }}
        >
            <Col span={12}>
                <Form
                    name='basic'
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Email'
                        name='email'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType="submit">Entar</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    );
}

export default login;