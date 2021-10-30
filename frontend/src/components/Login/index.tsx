
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Endereço de Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Lembrar senha</label>
                </div>
                <div className="d-grid gap-5 d-md-block">
                    <button type="button" className="btn btn-primary btn-lg">Criar conta</button>
                    <br />
                    <br />
                    <Link className="nav-item" to="/meu-perfil">
                        <button type="button" className="btn btn-primary btn-lg">Entrar</button></Link>
                </div>
            </form >
        </div >
    );
}
export default Login;
