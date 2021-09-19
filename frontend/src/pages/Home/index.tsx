import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import SliderHome from "components/SliderHome";

const Home = () => {
    return (

        <>
            <NavBar />
            <SliderHome />
            <div className="container">
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Home;