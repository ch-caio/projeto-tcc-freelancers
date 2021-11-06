import DataTableProcura from "components/DataTableProcura";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const ListaPublique = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <DataTableProcura />
            </div>
            <Footer />
        </>
    );
}

export default ListaPublique;