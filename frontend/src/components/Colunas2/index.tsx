import { Link } from "react-router-dom";
import lupa from "assets/img/search.png"


const Colunas2 = () => {

    return (

        <div className="row">
            <div className="coluna right" >
                <h2>
                    Pesquisando por vagas?
                </h2>
                <p>
                    Existem diversas vagas disponivel em nosso site, pesquise por alguma que combine com você!
                </p>
                <Link to="/publique">
                    <button className="btn1">Pesquise!</button>
                </Link>
            </div>
			<div className="coluna" >
                <img src={lupa}></img>
            </div>
        </div >



    );
}
export default Colunas2;