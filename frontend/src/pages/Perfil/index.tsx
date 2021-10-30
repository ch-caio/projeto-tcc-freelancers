import Footer from "components/Footer";
import NavBar from "components/NavBar";
import MeuPerfil from "components/MeuPerfil";

const Perfil = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <MeuPerfil />
            </div>
            <Footer />
        </>
    );
}

export default Perfil;