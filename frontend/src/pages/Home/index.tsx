import DataTable from "components/DataTableUsuario";
import Footer from "components/Footer";
import Grid from "components/Grid";
import NavBar from "components/NavBar";
import SliderHome from "components/SliderHome";

const Home = () => {
    return (
        <>
            <NavBar />
            <SliderHome />
            <div className="container">
                <Grid />
            </div>
            <Footer />
        </>
    );
}

export default Home;