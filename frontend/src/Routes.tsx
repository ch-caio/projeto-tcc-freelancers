import Contrate from 'pages/Contrate';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Publique from 'pages/Publique';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
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
                <Route path="/login" >
                    <Login />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;