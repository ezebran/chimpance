import cohete from './../../../assets/img/img-cohete.svg'

export default function SectionSeven(){
    return(
        <section id="banner-desarrollo">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="fc-darkBlue-01 mb-3">No te quedes atrás. <br /> Evoluciona en la jungla digital.</h3>
                    <h5 className="fc-darkBlue-01 mb-4">Pensemos juntos cómo sorprender a tus potenciales clientes.</h5>
                    <a href="#form" className="btn btn-outline-darkBlue-01">Empecemos</a>
                </div>
            </div>
        </div>
        <img src={cohete} className="img img-fluid" />
    </section>
    )
}