import Footer from "components/Footer";
import NavBar from "components/NavBar";
import FormLogin from "components/Login"

function Login() {
    return (
        <>
            <NavBar />
            <div className="container">
                <FormLogin />
            </div>
            <Footer />
        </>
    );
}

export default Login;