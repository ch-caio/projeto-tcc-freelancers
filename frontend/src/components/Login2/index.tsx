import React from "react";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useHistory } from "react-router";
import "components/Login2/style.css"
import { Link } from "react-router-dom";

export const FormLogin = () => {

	const auth = useAuth();
	const hitory = useHistory();

	function newPopupTermos() {

        window.open(
            '/termos',
            'pagina',
            "width=570, height=500, top=100, left=390, scrollbars=no "

        );
    }
	
	function newPopupPolitica() {

        window.open(
            '/politica',
            'pagina',
            "width=570, height=500, top=100, left=390, scrollbars=no "

        );
    }


	async function onFinish(values: { email: string, password: string }) {
		try {
			await auth.authenticate(values.email, values.password);
			hitory.push("/perfil");
		} catch (error) {
			message.error('Invalid email or password');
		}
	}
	
	/*function checkAceito() {
		//var ch = document.getElementById('check');
		var btn = document.getElementById('btnC');
		var element = <HTMLInputElement> document.getElementById("check");
		var isChecked = element.checked;
		if (isChecked) {
			btn.disabled = false
		}; else {
			btn.disabled = true
		};
		
	}*/
	

	return (
		<>
			<div className="conteudo">
				<div className="esquerdaLogin">
					<div className="container">
						<h1>Criar conta</h1>
						<form>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
								<div id="emailHelp" className="form-text">Seu E-mail nao sera compartilhado.</div>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
							</div>
							<Link className="nav-item" to="/login">
								<li className="nav-item">
									<span onClick={() => newPopupTermos()} className="nav-link px-2 text-muted" >Termos de uso</span>
								</li>
							</Link>					
							<Link className="nav-item" to="/login">
								<li className="nav-item">
									<span onClick={() => newPopupPolitica()} className="nav-link px-2 text-muted" >Politica de privacidade</span>
								</li>
							</Link>
							<li>
								<input type="checkbox" id="check" name="aceita" value="aceita"></input>
								<label htmlFor="check">Li e aceito os termos de uso e a politica de privacidade</label>
							</li>
							<p>
								<button type="submit" className="btn btn-primary" id="btnC">Criar conta</button>
							</p>
						</form>
					</div>
				</div>
				<div className="direitaLogin">
					<div className="container">
						<h1>Login</h1>
						<Form
							name='basic'
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							onFinish={onFinish}
							style={{
								paddingBottom: '30px',
							}}
						>
							<Form.Item
								label='Email'
								name='email'
								style={{
									paddingBottom: '30px',
								}}
							>
								<Input
									style={{
										display: "block",
										width: '300px',
										padding: '0.375rem 0.75rem',
										fontSize: '1rem',
										lineHeight: '1.5',
										color: '#212529',
										backgroundColor: '#c2eefffd ',
										border: '1px solid #ced4da',
										appearance: 'none',
										borderRadius: '0.25rem',
										transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
									}} />
							</Form.Item>

							<Form.Item
								label='Password'
								name='password'
								style={{
									paddingBottom: '30px',
								}}
							>
								<Input
									style={{
										display: "block",
										width: '300px',
										padding: '0.375rem 0.75rem',
										fontSize: '1rem',
										lineHeight: '1.5',
										color: '#212529',
										backgroundColor: '#c2eefffd',
										border: '1px solid #ced4da',
										appearance: 'none',
										borderRadius: '0.25rem',
										transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
									}} />
							</Form.Item>

							<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
								<Button
									type='primary'
									htmlType='submit'
									style={{
										display: 'inline-block',
										lineHeight: '1.5',
										textAlign: 'center',
										textDecoration: 'none',
										verticalAlign: 'middle',
										userSelect: 'none',
										border: '1px solid transparent',
										padding: '0.375rem 0.75rem',
										fontSize: '1rem',
										borderRadius: '5px',
										backgroundColor: '#0d6efd',
									}}
								>
									<p style={{ color: "white", fontSize: '16px' }}>Entrar</p>
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>

			</div>
		</>
	);
};

export default FormLogin;
	
	