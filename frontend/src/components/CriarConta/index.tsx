import "components/CriarConta/style.css"
import { Link } from "react-router-dom";

const CriarUmaConta = () => {
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
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Seu E-mail não sera compartilhado com outras plataformas.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <Link to='/criar-conta'><span onClick={() => newPopupTermos()} className="nav-link px-2 text-muted" >Termos de uso</span></Link>
                    <Link to='/criar-conta'><span onClick={() => newPopupPolitica()} className="nav-link px-2 text-muted" >Politica de privacidade</span></Link>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Eu concordo com os termos.</label>
                </div>



                <button type="submit" className="btn btn-primary">Criar conta</button>
            </form>
        </>
    );
}

export default CriarUmaConta;