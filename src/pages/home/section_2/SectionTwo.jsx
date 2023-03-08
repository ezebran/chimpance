import OwlCarousel from 'react-owl-carousel';

import bgSlider1 from './../../../assets/img/mockup/bg-slider-desarrollo-web-01.jpg'
import slider1 from './../../../assets/img/mockup/img-slider-desarrollo-web-01.png'

import bgSlider2 from './../../../assets/img/mockup/bg-slider-desarrollo-web-02.jpg'
import slider2 from './../../../assets/img/mockup/img-slider-desarrollo-web-02.png'

import bgSlider3 from './../../../assets/img/mockup/bg-slider-desarrollo-web-03.jpg'
import slider3 from './../../../assets/img/mockup/img-slider-desarrollo-web-03.png'

import bgSlider4 from './../../../assets/img/mockup/bg-slider-desarrollo-web-04.jpg'
import slider4 from './../../../assets/img/mockup/img-slider-desarrollo-web-04.png'

import bgSlider5 from './../../../assets/img/mockup/bg-slider-desarrollo-web-05.jpg'
import slider5 from './../../../assets/img/mockup/img-slider-desarrollo-web-05.png'

export default function SectionTwo(){
    return(
        <section id="slider-desarrollo" className="position-relative d-none d-md-block">
        <div className="container">
            <div className="row">
                <div className="col-12 position-relative">
                    <div className="nav owl-slider-tabs w-100 d-flex justify-content-between">
                        <a className="pagina-web slidetabs " href="#pagina-web">Pagina Web</a>
                        <a className="landing-page slidetabs " href="#landing-page">Landing Page</a>
                        <a className="ecommerce slidetabs " href="#ecommerce">eCommerce</a>
                        <a className="plataforma slidetabs " href="#plataforma">Plataforma</a>
                        <a className="app slidetabs " href="#app">App</a>
                    </div>
                </div>
            </div>
        </div>
        <OwlCarousel className="owl-theme" id="owl-desarrollo" items={1} dots={false} loop={true} margin={10} nav={true} autoplay={true} autoplayTimeout={'5000'} autoplayHoverPause={true} >
            <div className="item" data-hash="pagina-web">
                <img src={bgSlider1} className="bg" />
                <div className="container d-flex align-items-center">
                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column align-self-center align-items-start">
                            <h1>Creamos tu <span className="fc-lightBlue">Sitio web</span> a tu medida.</h1>
                            <h5 className="ff-circularBold mt-2 mb-5">Un sitio intuitivo, rápida y personal</h5>

                            <a href="#form" className="btn btn-blue-outline-white">Quiero digitalizarme</a>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={slider1} className="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="item" data-hash="landing-page">
                <img src={bgSlider2} className="bg" />
                <div className="container d-flex align-items-center">
                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column align-self-center align-items-start">
                            <h1>Diseñamos una<br /><span className="fc-lightBlue">Landing page</span> que enamore.</h1>
                            <h5 className="ff-circularBold mt-2 mb-5">Para convertir a tus visitantes, en clientes</h5>
                            <a href="#form" className="btn btn-blue-outline-white">Quiero enamorarme</a>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={slider2} className="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="item" data-hash="ecommerce">
                <img src={bgSlider3} className="bg" />
                <div className="container d-flex align-items-center">
                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column align-self-center align-items-start">
                            <h1>Te ayudamos a despegar con el <span className="fc-lightBlue">e-Commerce</span>
                                que<br />necesitas.</h1>
                            <h5 className="ff-circularBold mt-2 mb-5">Llega a nuevos mercados y genera nuevas estrategias</h5>

                            <a href="#form" className="btn btn-blue-outline-white">Quiero evolucionar</a>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={slider3} className="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="item" data-hash="plataforma">
                <img src={bgSlider4} className="bg" />
                <div className="container d-flex align-items-center">
                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column align-self-center align-items-start">
                            <h1>Desarrollamos tu<br /><span className="fc-lightBlue">plataforma</span> para que no dejes
                                de crecer.</h1>
                            <h5 className="ff-circularBold mt-2 mb-5">Automatización e integración de procesos</h5>

                            <a href="#form" className="btn btn-blue-outline-white">Quiero crecer</a>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={slider4} className="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="item" data-hash="app">
                <img src={bgSlider5} className="bg" />
                <div className="container d-flex align-items-center">
                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column align-self-center align-items-start">
                            <h1>Creamos tu <span className="fc-lightBlue">APP</span> para que la distancia no sea un
                                problema.</h1>
                            <h5 className="ff-circularBold mt-2 mb-5">Vende más, con eficiencia y rapidez</h5>
                            <a href="#form" className="btn btn-blue-outline-white">Consultar</a>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={slider5} className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </section>
    )
}