import { Button, Col, Form, Row, Input, message } from "antd";
import "antd/dist/antd.css"
import { useAuth } from "context/AuthProvider/useAuth";
import { useHistory } from "react-router-dom";



export const Login = () => {

    const auth = useAuth()
    const history = useHistory()

    async function onFinish(values: { email: string, password: string }) {
        try {
            await auth.authenticate(values.email, values.password);
            history.push("/perfil");

        } catch (error) {
            message.error('Email ou senha incorreto')
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
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
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

export default Login;