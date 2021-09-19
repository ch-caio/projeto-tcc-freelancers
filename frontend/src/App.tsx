import DataTable from "components/DataTable";
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



    </>
  );
}

export default App;
