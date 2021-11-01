import React from "react";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useHistory } from "react-router";

export const FormLogin = () => {
	
	const auth = useAuth();
	const hitory = useHistory();

	async function onFinish (values: {email: string, password: string}) {
		try {
			await auth.authenticate(values.email, values.password);
			hitory.push("/profile");
		} catch(error) {
			message.error('Invalid email or password');
		}
	}
	
	return (
	  <Row
	    justify='center'
		align='middle'
		style={{
			height: '100vh',
			textAlign: 'center',
			paddingTop: '30px',	
			marginLeft: '10%',
			marginRight: '10%',
		}}
	  >
	  <Col span={12}>
	    <Form
		  name='basic'
		  labelCol={{span: 8}}
		  wrapperCol={{span: 16}}
		  onFinish={onFinish}
		  style={{
			  backgroundColor: 'rgba(255,255,255,0.5)',
		  }}
		>
		  <Form.Item
		    label='Email'
			name='email'
			style={{
				paddingBottom: '30px',	
			}}
		  >
		    <Input />
		  </Form.Item>
		  
		  <Form.Item
		    label='Password'
			name='password'
			style={{
				paddingBottom: '30px',	
			}}
		  >
		    <Input.Password />
		  </Form.Item>
		  
		  <Form.Item wrapperCol={{offset: 8, span: 16}}>
		    <Button 
				type='primary'
				htmlType='submit'
				style={{
					background: '#003CBA',
					border: '3px solid #555555',
					color: 'white',
					padding: '14px 40px',
					textAlign: 'center',
					display: 'inline-block',
					fontSize: '16px',
					borderRadius: '12px',
					marginLeft: '20px',
				}}			
			>
			  Entrar
			</Button>
		  </Form.Item>
		</Form>
	  </Col>	    
	  </Row>
	);
};

export default FormLogin;