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

                    <Link className="nav-item" to="/contrate"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Contrate</span></li></Link>

                    <Link className="nav-item" to="/publique"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique seus serviços</span></li></Link>

                    <Link className="nav-item" to="/login"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Login</span></li></Link>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;


