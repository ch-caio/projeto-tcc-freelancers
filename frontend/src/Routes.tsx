import Contrate from 'pages/Contrate';
import Home from 'pages/Home';
import Publique from 'pages/Publique';
import SobreNos from 'pages/PaginaSobreNos';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListaAnuncios from 'pages/PubliqueAnuncios';
import ListaVagas from 'pages/PubliqueVagas';
import Login from 'pages/Login';
import MeuPerfil from 'pages/Perfil';
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const Routes = () => {
    return (
		<AuthProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/publique">
                    <Publique />
                </Route>
                <Route path="/contrate" >
                    <Contrate />
                </Route>
                <Route path="/sobre-nos" >
                    <SobreNos />
                </Route>
                <Route path="/lista-anuncios" >
                    <ListaAnuncios />
                </Route>
                <Route path="/lista-vagas" >
                    <ListaVagas />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/meu-perfil">
                    <MeuPerfil />
                </Route>
				<Route path='/profile'>
					<ProtectedLayout>
						<h2>Olá esse é o componente profile</h2>
					</ProtectedLayout>
				</Route>
            </Switch>
        </BrowserRouter>
		</AuthProvider>
    );
}

export default Routes;