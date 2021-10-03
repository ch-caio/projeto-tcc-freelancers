import "components/Colunas/styles.css"
import user from "assets/img/user.png"
import { Link } from "react-router-dom";

const Colunas = () => {

    return (

        <div className="row">
            <div className="coluna esquerda" >
                <img src={user}></img>
            </div>

            <div className="coluna direita" >
                <h2>
                    Publique o seu perfil
                </h2>
                <p>
                    Descreva o seu perfil com sua principais informações, formações, conhecimentos e deixa que contratantes pesquise seu perfil.
                </p>
                <Link className="btn" to="/contrate">
                    <button >acessar!</button>
                </Link>
            </div>
        </div >



    );
}
export default Colunas;