import OwlCarousel from 'react-owl-carousel';
import bgSliderMobile01 from './../../../assets/img/mockup/bg-slider-mobile-01.jpg'
import bgSliderMobile02 from './../../../assets/img/mockup/bg-slider-mobile-02.jpg'
import bgSliderMobile03 from './../../../assets/img/mockup/bg-slider-mobile-03.jpg'
import bgSliderMobile04 from './../../../assets/img/mockup/bg-slider-mobile-04.jpg'
import bgSliderMobile05 from './../../../assets/img/mockup/bg-slider-mobile-05.jpg'
import bgSliderMobile06 from './../../../assets/img/mockup/bg-slider-mobile-06.jpg'

export default function SectionFive(){

    return(
        <section id="slider-exito-mobile" className="d-block d-md-none h-100 pb-5 ">
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fc-lightBlue mb-0">PORTFOLIO</h3>
                    </div>
                </div>
            </div>
            <OwlCarousel className="owl-theme" id="owl-exito-mobile" items={1} dots={true} loop={true} nav={false}>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile01} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        
                                        <h4 className="ff-circularBold">.01 <br />
                                        Soluciones tecnológicas para el agro</h4>
                                    </div>
                                    <p className="fc-yellow mb-4">www.efitech.com.ar</p>
                                    <a href="www.efitech.com.ar" target="_blank" className="btn btn-white">Ver proyecto</a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile02} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        
                                        <h4 className="ff-circularBold">.02 <br />
                                        Sitio web de exposición de obras artísticas</h4>
                                    </div>
                                    <p className="fc-yellow mb-4">www.pablolavezzari.com.ar</p>
                                    <a href="www.pablolavezzari.com.ar" target="_blank" className="btn btn-white">Ver proyecto</a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile03} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    
                                    <h4 className="ff-circularBold">.03 <br />
                                        Plataforma de alquiler de departamentos temporarios en Brasil</h4>
                                </div>
                                <p className="fc-yellow mb-4">www.pablolavezzari.com.ar</p>
                                <a href="www.pablolavezzari.com.ar" target="_blank" className="btn btn-white">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile04} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    
                                    <h4 className="ff-circularBold">.04 <br />
                                        Plataforma de alquiler de departamentos temporarios en Brasil</h4>
                                </div>
                                <p className="fc-yellow mb-4">wwwdelgredal.com.ar</p>
                                <a href="www.pablolavezzari.com.ar" target="_blank" className="btn btn-white">Ver proyecto</a>
                            </div>
                        </div>
                </div>
                </div>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile05} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    
                                    <h4 className="ff-circularBold">.05 <br />
                                        Plataforma de gestión de trámites y consultas</h4>
                                </div>
                                <p className="fc-yellow mb-4">https://www.tcpcordoba.gov.ar/</p>
                                <a href="https://www.tcpcordoba.gov.ar/" target="_blank" className="btn btn-white">Ver proyecto</a>
                            </div>
                        </div>
                </div>
                </div>
                <div className="item">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <img src={bgSliderMobile06} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    
                                    <h4 className="ff-circularBold">.06 <br />
                                        Plataforma de venta mayorista de viajes</h4>
                                </div>
                                <p className="fc-yellow mb-4">wwwdelgredal.com.ar</p>
                                <a href="https://www.tcpcordoba.gov.ar/" target="_blank" className="btn btn-white">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}