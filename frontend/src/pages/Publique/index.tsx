import DataTableProcura from "components/DataTableProcura";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Publique = () => {
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

export default Publique;