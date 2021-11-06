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
import Termos from './pages/Termos'
import PagePolitica from './pages/Politica'

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
                    <Route path="/perfil">
                        <MeuPerfil />
                    </Route>
                    <Route path='/profile'>
                        <ProtectedLayout>
                            <MeuPerfil />
                        </ProtectedLayout>
                    </Route>
                    <Route path='/termos'>
                        <Termos />
                    </Route>
					<Route path='/politica'>
						<PagePolitica />
					</Route>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Routes;

// handler={window}