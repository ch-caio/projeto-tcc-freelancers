import { Link } from "react-router-dom";

const Footer = () => {

    function newPopup() {

        window.open(
            '/termos',
            'pagina',
            "width=350, height=255, top=100, left=110, scrollbars=no "

        );
    }

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <Link className="nav-item" to="/"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Home</span></li></Link>

                    <Link className="nav-item" to="/lista-vagas"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique sua vaga</span></li></Link>

                    <Link className="nav-item" to="/lista-anuncios"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique seu perfil</span></li></Link>

                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
                    <Link className="nav-item" to="">
                        <li className="nav-item">
                            <span onClick={() => newPopup()} className="nav-link px-2 text-muted" >Pagina de termos</span></li></Link>
                </ul>
                <p className="text-center text-muted">©Freelancers</p>
            </footer>
        </div >
    );
}

export default Footer;


// target='_blank'
