import logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <div className="container">
            <img alt="" src={logo} width="250px" height="125px" />
            <div className="gradelinks">
                <ul>
                    <Link className="nav-item" to="/"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Home</span></li></Link>

                    <Link className="nav-item" to="/lista-vagas"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique seu cadastro</span></li></Link>

                    <Link className="nav-item" to="/lista-anuncios"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique sua vaga</span></li></Link>

                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;


