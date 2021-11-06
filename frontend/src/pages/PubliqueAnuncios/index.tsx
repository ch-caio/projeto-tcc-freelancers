
import AdicionarUsuario from "components/AdicionarUsuario";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const AddAnuncios = () => {
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

export default AddAnuncios;