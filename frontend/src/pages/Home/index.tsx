import AdicionarProcura from "components/AdicionarProcura";
import AdicionarUsuario from "components/AdicionarUsuario";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import SliderHome from "components/SliderHome";

const Home = () => {
    return (
        <>
            <NavBar />
            <SliderHome />
            <div className="container">
                <h2>Adicione o seu cadastro!</h2>
                <AdicionarUsuario />
                <br />
                <h2>Adicione uma vaga!</h2>
                <AdicionarProcura />
                <br />
            </div>
            <Footer />
        </>
    );
}

export default Home;