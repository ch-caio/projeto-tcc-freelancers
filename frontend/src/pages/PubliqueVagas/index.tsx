import AdicionarProcura from "components/AdicionarProcura";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const AddVagas = () => {
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

export default AddVagas;