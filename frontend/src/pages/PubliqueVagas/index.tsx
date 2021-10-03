import AdicionarProcura from "components/AdicionarProcura";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ListaVagas = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <AdicionarProcura />
            </div>
            <Footer />
        </>
    );
}

export default ListaVagas;