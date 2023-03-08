import { WistiaProvider, WistiaPlayer } from '@wistia/react-embeds';
import {logo22Svg, logoCinergiaSvg, logoInglobeSvg ,logoMcdgSvg} from './../../../assets/img/logos-testimonials'

export default function SectionFourteen(){
    return(
        <section id="text-doble" className="position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block">
                        <WistiaProvider>
                            <WistiaPlayer hashedId="uefvk3e6ck" />
                        </WistiaProvider>

                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className="col-md-6 d-flex flex-column align-self-center text-center">
                        <h2 className="wow bounceInUp mb-1">SOMOS TU</h2>
                        <div className="doble-text position-relative d-flex justify-content-center">
                            <h1 className="fc-lightBlue word w1">PARTNER</h1>
                            <h1 className="fc-lightBlue word w2">MANADA</h1>
                            <h1 className="fc-lightBlue word w3">PARTNER</h1>
                            <h1 className="fc-lightBlue word w4">MANADA</h1>
                        </div>
                        <h2 className="mb-4">DE CONFIANZA</h2>
                        <h5 className="wow bounceInUp d-none d-md-block">Colaboramos con <strong>agencias y consultoras</strong>, para que
                            amplíen su equipo y capacidades, con un seguimiento personalizado y horizontal, con un costo
                            adaptado a tus posibilidades.
                        </h5>
                        <p className="wow bounceInUp d-block d-md-none">Tenemos un proceso de trabajo especial para</p>
                        <h4 className="ff-circularBold fc-lightBlue">Agencias y Consultoras</h4>
                        <div className="wow bounceInUp d-none d-md-block">
                            <img loading="lazy" src={logoCinergiaSvg} />
                            <img loading="lazy" src={logoMcdgSvg} />
                            <img loading="lazy" src={logo22Svg} />
                            <img loading="lazy" src={logoInglobeSvg} />
                        </div>
                        <div className="mt-3">
                            <a href="#form" className="btn btn-blue-outline-white">Seamos Partners</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}