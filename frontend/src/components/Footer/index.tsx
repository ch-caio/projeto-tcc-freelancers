import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <Link className="nav-item" to="/"><li className="nav-item"><a className="nav-link px-2 text-muted">Home</a></li></Link>
                    <Link className="nav-item" to="/contrate"><li className="nav-item"><a className="nav-link px-2 text-muted">Contrate</a></li></Link>
                    <Link className="nav-item" to="/publique"><li className="nav-item"><a className="nav-link px-2 text-muted">Publique seus serviços</a></li></Link>
                    <Link className="nav-item" to="/sobre"><li className="nav-item"><a className="nav-link px-2 text-muted">Sobre nos</a></li></Link>
                </ul>
                <p className="text-center text-muted">©Freelancers</p>
            </footer>
        </div>
    );
}

export default Footer;

