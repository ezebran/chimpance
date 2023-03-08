import webVideo from './../../../assets/img/web.mp4'

export default function SectionTen(){
    return(
        <section id="banner-proyectos" className="position-relative d-flex d-md-none">
            <div className="contenedor-video">
                <div className="gradiente"></div>
                <video muted playsInline autoPlay loop>
                    <source className="embed-responsive-item" loading="lazy" src={webVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="ff-circularLight mb-0">NUESTROS</h3>
                        <h2>PROYECTOS</h2>
                        <a href="https://chimpancedigital.com.ar/desarrolloweb/" target="_blank" className="btn btn-white">Ver todos</a>
                    </div>
                </div>
            </div>
        </section>
    )
}