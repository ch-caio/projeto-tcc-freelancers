import { useAuth } from "context/AuthProvider/useAuth"
import React from "react";


export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth()

	if (!auth.email) {
		return <h1>Você nao tem acesso a essa pagina!</h1>;
	}
	return children;
}
