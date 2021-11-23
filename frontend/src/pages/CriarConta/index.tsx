import Footer from "components/Footer";
import NavBar from "components/NavBar";
import CriarUmaConta from "components/CriarConta";
const CriarConta = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <CriarUmaConta />
            </div>
            <Footer />
        </>
    );
}

export default CriarConta;