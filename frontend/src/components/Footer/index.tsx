import { Link } from "react-router-dom";

const Footer = () => {

    function newPopupTermos() {

        window.open(
            '/termos',
            'pagina',
            "width=570, height=500, top=100, left=390, scrollbars=no "

        );
    }
	
	function newPopupPolitica() {

        window.open(
            '/politica',
            'pagina',
            "width=570, height=500, top=100, left=390, scrollbars=no "

        );
    }

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <Link className="nav-item" to="/"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Home</span></li></Link>
					
					<Link className="nav-item" to="/login"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Login</span></li></Link>

                    <Link className="nav-item" to="/perfil"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Meu perfil</span></li></Link>
					
					<Link className="nav-item" to="/publique"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Lista Vagas</span></li></Link>

                    <Link className="nav-item" to="/contrate"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Lista Freelancers</span></li></Link>
					
                    <Link className="nav-item" to="/lista-vagas"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique sua vaga</span></li></Link>

                    <Link className="nav-item" to="/lista-anuncios"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Publique-se como freelancer</span></li></Link>
					
                    <Link className="nav-item" to="/sobre-nos"><li className="nav-item">
                        <span className="nav-link px-2 text-muted">Sobre nós</span></li></Link>
						
                    <Link className="nav-item" to="">
                        <li className="nav-item">
                            <span onClick={() => newPopupTermos()} className="nav-link px-2 text-muted" >Termos de uso</span></li></Link>
					
					<Link className="nav-item" to="">
                        <li className="nav-item">
                            <span onClick={() => newPopupPolitica()} className="nav-link px-2 text-muted" >Politica de privacidade</span></li></Link>
                </ul>
                <p className="text-center text-muted">©Freelancers</p>
            </footer>
        </div >
    );
}

export default Footer;


// target='_blank'
