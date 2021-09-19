const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contrate</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Publique seus serviços</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Sobre nos</a></li>
                </ul>
                <p className="text-center text-muted">©Freelancers</p>
            </footer>
        </div>
    );
}

export default Footer;