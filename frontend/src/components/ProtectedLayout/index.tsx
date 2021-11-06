import React from 'react';
import { useAuth } from "../../context/AuthProvider/useAuth"
import { Link } from "react-router-dom";
import "components/ProtectedLayout/style.css"
import Footer from "components/Footer";
import NavBar from "components/NavBar";

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
	const auth = useAuth();
	
	if(!auth.email){
		return (
			<>
			<NavBar/>
			<div className="proibe">
				<Link className="linkMeio" to="/login">
					<img className="imgMeio" src="https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
				</Link>
			</div>
			<div className="proibeText">
				<ul>
					<li>
						<h1>Faça Login!</h1>
						<Link to="/login">
							<button className="btn">Entrar</button>
						</Link>
					</li>
					<li>
						<h1>OU</h1>
					</li>
					<li>
						<h1>Cadastre-se</h1>
						<Link to="/login">
							<button className="btn">Cadastrar</button>
						</Link>
					</li>
				</ul>
			</div>
			<Footer/>
			</>
		);
	}

	return children;
};