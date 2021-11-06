import ListaContrate from 'pages/Contrate';
import EditarProcura from 'pages/EditarProcura';
import Home from 'pages/Home';
import ListaPublique from 'pages/Publique';
import SobreNos from 'pages/PaginaSobreNos';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddAnuncios from 'pages/PubliqueAnuncios';
import AddVagas from 'pages/PubliqueVagas';
import Login from 'pages/Login';
import MeuPerfil from 'pages/Perfil';
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'


const Routes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/publique">
                        <ListaPublique />
                    </Route>
                    <Route path="/contrate" >
                        <ListaContrate />
                    </Route>
                    <Route path="/sobre-nos" >
                        <SobreNos />
                    </Route>
                    <Route path="/adicionar-anuncios" >
                        <AddAnuncios />
                    </Route>
                    <Route path="/adicionar-vagas" >
                        <AddVagas />
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
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Routes;