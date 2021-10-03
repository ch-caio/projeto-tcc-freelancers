import { Link } from "react-router-dom";
import lupa from "assets/img/search.png"


const Colunas2 = () => {

    return (

        <div className="row">
            <div className="coluna esquerda" >
                <img src={lupa}></img>
            </div>

            <div className="coluna direita" >
                <h2>
                    Pesquisando por vagas?
                </h2>
                <p>
                    Existem diversas vagas disponivel em nosso site, pesquise por alguma que combine com você!
                </p>
                <Link className="btn" to="/publique">
                    <button >Pesquise!</button>
                </Link>
            </div>
        </div >



    );
}
export default Colunas2;