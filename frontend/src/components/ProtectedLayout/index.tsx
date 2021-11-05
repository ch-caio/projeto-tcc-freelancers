import React from 'react';
import { useAuth } from "../../context/AuthProvider/useAuth"
import { Link } from "react-router-dom";
import "components/ProtectedLayout/style.css"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
	const auth = useAuth();
	
	if(!auth.email){
		return (
			<>
			<div className="proibe">
				<Link to="/login">
					<img className="imgMeio" src="https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
				</Link>
			</div>
			<div className="proibeText">
				<h1>Faça Login!</h1>
				<Link to="/login">
					<button className="btn">Entrar</button>
				</Link>
				<h2>ou</h2>
				<h1>Cadastre-se</h1>
				<Link to="/login">
					<button className="btn">Cadastrar</button>
				</Link>
			</div>
			</>
		);
	}

	return children;
};