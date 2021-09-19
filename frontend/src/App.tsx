import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import SliderHome from "components/SliderHome";



function App() {
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

export default App;
