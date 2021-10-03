
import AdicionarUsuario from "components/AdicionarUsuario";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ListaAnuncios = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <AdicionarUsuario />
            </div>
            <Footer />
        </>
    );
}

export default ListaAnuncios;