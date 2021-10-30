import slide1 from 'assets/img/imghome.png';
import "components/SliderHome/style.css"

const SliderHome = () => {
    return (
        <div className="imagem">
            <img src={slide1} className="img-fluid" alt="imagemFreelancers"></img>
        </div>
    );
}

export default SliderHome;


