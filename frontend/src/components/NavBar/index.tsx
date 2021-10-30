import logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <div className="container">
            <Link className="nav-item" to="/">
                <img alt="" src={logo} width="250px" height="125px" /></Link>

            <div className="gradelinks">
                <ul>
                    <Link className="nav-item" to="/lista-vagas"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique sua vaga</span></li></Link>

                    <Link className="nav-item" to="/lista-anuncios"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique seu perfil</span></li></Link>

                    <Link className="nav-item" to="/login"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Usuario</span></li></Link>

                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
                </ul>
            </div >
        </div >
    );
}
export default NavBar;


