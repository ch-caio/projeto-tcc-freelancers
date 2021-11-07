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
                    <Link className="nav-item" to="/publique"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Lista Vagas</span></li></Link>

                    <Link className="nav-item" to="/contrate"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Lista Freelancers</span></li></Link>

                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
						
					
                    <Link className="nav-item" to="/perfil"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Meu perfil</span></li></Link>
					
					<Link className="nav-item" to="/login"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Login</span></li></Link>
                </ul>
            </div >
        </div >
    );
}
export default NavBar;


