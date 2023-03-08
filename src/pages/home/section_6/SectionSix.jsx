import arrowYellow from './../../../assets/img/arrow-yellow.svg'
import felpiOro from './../../../assets/img/fepi-de-oro-mobile.png'
import eikon from './../../../assets/img/eikon-mobile.svg'

export default function SectionSix(){
    return(
        <section id="premios-mobile" className="d-flex d-md-none mt-5">
            <div className="container">
                <div className="row">
                    <h4 className="fc-lightBlue ff-circularBold mb-4 text-center wow bounceInUp">BANANAS QUE GANAMOS</h4>
                    <h5 className="ff-circularBold fc-lightBlue wow bounceInUp mb-3 ms-4">FEPI DE ORO</h5>
                    <div className="col-12 d-flex justify-content-between align-items-start wow bounceInUp">
                        <div className="d-flex align-items-baseline">
                            <img loading="lazy" width="14.532" height="14.528" src={arrowYellow} />
                            <div className="ms-3">
                                <p className="mb-1">Dirección de Arte en Internet</p>
                                <p className="mb-1">Cliente: Cinergia Producciones</p>
                                <a href="http://pablolavezzari.com/" target="_blank">www.pablolavezzari.com</a>
                            </div>
                        </div>
                        <img loading="lazy" width="73.263" height="74.952" src={felpiOro} />
                    </div>
                    <div className="col-12 my-2 wow bounceInUp">
                        <hr />
                    </div>
                    <div className="col-12">
                        <h5 className="ff-circularBold fc-lightBlue wow bounceInUp mb-3 ms-4">EIKON</h5>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-start wow bounceInUp">
                        <div className="d-flex align-items-baseline">
                            <img loading="lazy" width="14.532" height="14.528" src={arrowYellow} />
                            <div className="ms-3">
                                <p className="mb-1">Comunicación de Identidad <br />
                                    Corporativa</p>
                                <p className="mb-1">Cliente: Cinergia Producciones</p>
                                <a href="https://delgredal.com" target="_blank">www.delgredal.com</a>
                            </div>
                        </div>
                        <img loading="lazy" className=" mb-3 ms-4" width="73.263" height="64.085"
                            src={eikon} />
                    </div>
                    <div className="col-12 my-2 wow bounceInUp">
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}