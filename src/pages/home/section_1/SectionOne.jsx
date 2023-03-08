import Lottie from "lottie-react";
import bgHeaderDesk from './../../../assets/img/lotties/bgHeaderDesk.json'
import bgHeaderMobile0 from './../../../assets/img/lotties/bgHeaderMobile0.json'
import bgHeaderMobile1 from './../../../assets/img/lotties/bgHeaderMobile1.json'
import bgParallax2 from './../../../assets/img/bg-parallax-02.png'
import junglaBack from './../../../assets/img/jungla-back.svg'


export default function SectionOne(){
    return(
        <header className="desarrollo-web d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3 className="ff-circularBook">
                        {'<'}<span className="fc-yellow">h1</span>{'>'}
                    </h3>
                    <h3 className="d-none d-md-block">Creamos experiencias digitales para hacer crecer tu empresa</h3>
                    <h3 className="d-block d-md-none">Creamos experiencias digitales para hacer crecer tu empresa</h3>
                    <h3 className="ff-circularBook">
                        {'< /'}<span className="fc-yellow">h1</span>{'>'}
                    </h3>
                    <div className="d-flex mt-5 gap-4 flex-column flex-md-row   ">
                        <a className="btn btn-blue-outline-white" href="#slider-desarrollo">Nuestros servicios</a>

                        <a className="btn btn-outline-primary" target="_blank" href="">Conocenos</a>
                    </div>
                </div>
            </div>
        </div>

    </header>
    )
}