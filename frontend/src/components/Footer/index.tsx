import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <Link className="nav-item" to="/"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Home</span></li></Link>

                    <Link className="nav-item" to="/contrate"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Contrate</span></li></Link>

                    <Link className="nav-item" to="/publique"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Pedidos de serviço</span></li></Link>

                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
                </ul>
                <p className="text-center text-muted">©Freelancers</p>
            </footer>
        </div>
    );
}

export default Footer;

