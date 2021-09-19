import logo from 'assets/img/logo.png';
import './styles.css';



const NavBar = () => {
    return (
        <div className="container">
            <img src={logo} width="250px" height="125px" />
            <div className="gradelinks">
                <ul>
                    <li className="nav-item"><a href="./src/App.tsx" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contrate</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Publique seus serviços</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Sobre nos </a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
