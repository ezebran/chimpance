import arrowYellow from './../../../assets/img/arrow-yellow.svg'
import handDesarrollo from './../../../assets/img/img-hand-desarrollo-web.svg'

export default function SectionNine(){
    return(
        <section id="desarrollo-contacto">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="fc-blanco mb-4">¡Saquemos el máximo<br />provecho a tu sitio web!</h3>
                        <h5 className="fc-blanco mb-5"><img src={arrowYellow} className="me-2" width="22px" />Experiencias de usuario y Diseños Personalizados</h5>
                        <a href="#form" className="btn btn-outline-primary">Quiero UX en mi sitio</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-block d-md-none mt-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end p-0">
                        <img src={handDesarrollo} />
                    </div>
                </div>
            </div>
        </section> 
    )
}