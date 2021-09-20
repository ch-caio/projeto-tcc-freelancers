import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Contrate = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Contrate;