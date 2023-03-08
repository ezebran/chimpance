import arrowBlue from './../../../assets/img/img-arrow-blue.svg'
import imgPepi from './../../../assets/img/img-pepi.png'
import imgLaurel from './../../../assets/img/img-laurel.svg'
import imgEikon from './../../../assets/img/img-eikon.svg'

export default function SectionTwelve(){
    return(
        <section id="premios" className="pt-100 pb-100 position-relative d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="fc-lightBlue text-center wow bounceInUp">BANANAS QUE GANAMOS</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="wow bounceInUp">
                            <div className="box-premio align-items-center position-relative d-flex justify-content-center">
                                <img loading="lazy" src={imgPepi} />
                                <img loading="lazy" src={imgLaurel} />
                            </div>
                            <div className="d-flex align-items-baseline">
                                <img loading="lazy" src={arrowBlue} />
                                <div>
                                    <h3 className="ff-circularLight ms-2">Dirección de Arte en <br />Internet</h3>
                                    <p className="fc-blanco ms-2 mb-2">Cliente: Cinergia Producciones</p>
                                    <a className="ms-2" href="http://pablolavezzari.com/"
                                        target="_blank">www.pablolavezzari.com</a>
                                    <h5 className="ff-circularBold fc-lightBlue fs-18 ms-2 mt-3">FEPI DE ORO</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="wow bounceInUp">
                            <div className="box-premio align-items-center position-relative d-flex justify-content-center">
                                <img loading="lazy" src={imgEikon} />
                                <img loading="lazy" src={imgLaurel} />
                            </div>
                            <div className="d-flex align-items-baseline">
                                <img loading="lazy" src={arrowBlue} />
                                <div>
                                    <h3 className="ff-circularLight ms-2">Comunicación de <br />Identidad Corporativa</h3>
                                    <p className="fc-blanco ms-2 mb-2">Cliente: Cinergia Producciones</p>
                                    <a className="ms-2" href="https://delgredal.com" target="_blank">www.delgredal.com</a>
                                    <h5 className="ff-circularBold fc-lightBlue fs-18 ms-2 mt-3">EIKON</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}