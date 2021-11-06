import DataTableUsuario from "components/DataTableUsuario";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ListaContrate = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <DataTableUsuario />
            </div>
            <Footer />
        </>
    );
}

export default ListaContrate;