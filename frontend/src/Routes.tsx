import Contrate from 'pages/Contrate';
import Home from 'pages/Home';
import Publique from 'pages/Publique';
import Sobre from 'pages/Sobre';
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
                <Route path="/sobre" >
                    <Sobre />
                </Route>
                <Route path="/contrate" >
                    <Contrate />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;