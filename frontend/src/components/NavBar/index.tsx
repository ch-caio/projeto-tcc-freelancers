import logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';
import './styles.css';



const NavBar = () => {
    return (
        <div className="container">
            <img src={logo} width="250px" height="125px" />
            <div className="gradelinks">
                <ul>
                    <Link className="nav-item" to="/"><li className="nav-item"><a className="nav-link px-2 text-muted">Home</a></li></Link>
                    <Link className="nav-item" to="/contrate"><li className="nav-item"><a className="nav-link px-2 text-muted">Contrate</a></li></Link>
                    <Link className="nav-item" to="/publique"><li className="nav-item"><a className="nav-link px-2 text-muted">Publique seus serviços</a></li></Link>
                    <Link className="nav-item" to="/sobre"><li className="nav-item"><a className="nav-link px-2 text-muted">Sobre nos</a></li></Link>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;


