
import Colunas from "components/Colunas";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import SliderHome from "components/SliderHome";

const Home = () => {
    return (
        <>
            <NavBar />
            <SliderHome />
            <Colunas />
            <Footer />
        </>
    );
}

export default Home;