import Contrate from 'pages/Contrate';
import Home from 'pages/Home';
import Publique from 'pages/Publique';
import SobreNos from 'pages/PaginaSobreNos';
import Termos from './pages/Termos'
import PagePolitica from './pages/Politica'
import EditarProcura from './pages/EditarProcura/Edit';
import Login from './pages/Login/index'
import PubliqueAnuncios from './pages/PubliqueAnuncios'
import PubliqueVagas from './pages/PubliqueVagas'
import CriarConta from './pages/CriarConta'

import { AuthProvider } from 'context/AuthProvider';
import { ProtectedLayout } from 'components/ProtectedLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Perfil from 'pages/Perfil';



function Routes() {
    return (
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
                <Route path='/termos'>
                    <Termos />
                </Route>
                <Route path='/politica'>
                    <PagePolitica />
                </Route>
                <Route path='/EditProcura/:id'>
                    <EditarProcura />
                </Route>
                <Route path="/publica-vagas">
                    <PubliqueVagas />
                </Route>
                <Route path="/publica-anuncios">
                    <PubliqueAnuncios />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/criar-conta'>
                    <CriarConta />
                </Route>


                {/* partes protegidas abaixo e tela de login*/}

                <AuthProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/perfil'>
                                <ProtectedLayout>
                                    <Perfil />
                                </ProtectedLayout>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;