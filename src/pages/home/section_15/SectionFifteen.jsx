import { wordpress, bootstrap, html, javascript, laravel, angular, react } from './../../../assets/img/logos-tecnologias';

export default function SectionFifteen(){
    return(
        <section id="tecnologias" className="d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="fc-lightBlue">Tecnologías</h1>
                        <div className="d-flex justify-content-around">
                            <img src={wordpress} alt="WordPress" />
                            <img src={bootstrap} alt="Bootstrap" />
                            <img src={html} alt="HTML5" />
                            <img src={javascript} alt="JavaScript" />
                            <img src={laravel} alt="Laravel" />
                            <img src={angular} alt="Angular" />
                            <img src={react} alt="React" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}