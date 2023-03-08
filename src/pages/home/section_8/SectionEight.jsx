import arrowYellow from './../../../assets/img/arrow-yellow.svg'

export default function SectionEight(){
    return(
        <section id="ux-desarrollo" className="d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="ff-circularLight">HAGAMOS DE TU SITIO</h3>
                        <h2 className="mb-5"><span className="fc-lightBlue">UNA EXPERIENCIA PERSONAL</span> PARA TU CLIENTE</h2>
                        <div className="d-flex mb-4">
                            <img src={arrowYellow} width="22px" />
                            <h5 className="fc-blanco mb-0 ms-3">Resultados rápidos con procesos ágiles y automatizados.</h5>
                        </div>
                        <div className="d-flex mb-4">
                            <img src={arrowYellow} width="22px" />
                            <h5 className="fc-blanco mb-0 ms-3">Diseño atractivo y entretenido que capte la atención.</h5>
                        </div>
                        <div className="d-flex mb-4">
                            <img src={arrowYellow} width="22px" />
                            <h5 className="fc-blanco mb-0 ms-3">Un lenguaje eficaz que no de lugar a malos entendidos.</h5>
                        </div>
                        <a href="" className="btn btn-yellow">Experiencia de usuario</a>
                    </div>
                </div>
            </div>
        </section>
    )
}