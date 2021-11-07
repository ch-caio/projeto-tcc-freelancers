import "components/Colunas/styles.css"
import user from "assets/img/user.png"
import { Link } from "react-router-dom";

const Colunas = () => {

    return (

        <div className="row">
            <div className="coluna" >
                <img src={user}></img>
            </div>

            <div className="coluna right" >
                <h2>
                    Procurando por profissionais?
                </h2>
                <p>
                    Existe diversos profissionais qualificados disponivel em nosso site, procure por algum que preencha seus requisitos!
                </p>
                <Link to="/contrate">
                    <button className="btn1">Pesquise!</button>
                </Link>
            </div>
        </div >
    );
}
export default Colunas;