import imgBackground from 'assets/img/aboutus.png';
import "components/SobreNos/style.css"

const SobreNos = () => {
    return (
        <>
            <div className="imagemBackGround">
                <img src={imgBackground} />
            </div>

            <div className="texto">
                <ul className="visaoMissaoValores">
                    <li><h1>HISTÓRIA</h1>
                        <ol className="texto1">
                            <li><p>
                                Um grupo de amigos da FATEC se juntou para fazer um site para freelancers!
                            </p></li>
                        </ol>
                    </li>

                    <li><h1>VISÃO</h1>
                        <ol className="texto1">
                            <li><p>
                                Promover a modalidade freelancer para todos os profissionais, dando a eles uma plataforma que os permitam entrar em contato com empregadores e outros freelancers.
                            </p></li>
                        </ol>
                    </li>

                    <li><h1>PUBLICO ALVO</h1>
                        <ol className="texto1">
                            <li><p>
                                Um site para freelancers e empregadores.
                            </p></li>
                        </ol>
                    </li>

                </ul>
            </div>

        </>
    );
}

export default SobreNos;