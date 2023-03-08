import React, { useState, useRef } from 'react';

import circulo from './../../../assets/img/slider-desarrollo/img-circulo.svg'
import circuloFin from './../../../assets/img/slider-desarrollo/img-circulo-fin.svg'
import brief from './../../../assets/img/slider-desarrollo/img-brief.svg'
import arrowForm from './../../../assets/img/icon-arrow-form.svg'
import angleRight from './../../../assets/img/icon-angle-rigth.svg'

import img01 from './../../../assets/img/slider-desarrollo/img-01.svg'
import img02 from './../../../assets/img/slider-desarrollo/img-02.svg'
import img03 from './../../../assets/img/slider-desarrollo/img-03.svg'
import img04 from './../../../assets/img/slider-desarrollo/img-04.svg'
import img05 from './../../../assets/img/slider-desarrollo/img-05.svg'

import imgUx from './../../../assets/img/slider-desarrollo/img-ux.png'
import imgUi from './../../../assets/img/slider-desarrollo/img-ui.png'
import imgProgramacion from './../../../assets/img/slider-desarrollo/img-programacion.png'
import imgTest from './../../../assets/img/slider-desarrollo/img-test.svg'
import imgFinal from './../../../assets/img/slider-desarrollo/img-final.png'

export default function SectionEleven(){

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    const sliderRef = useRef(null);
    
    function handleMouseDown(e) {
        setIsDown(true);
        sliderRef.current.classList.add('active');
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    }
    
    function handleMouseLeave() {
        setIsDown(false);
        sliderRef.current.classList.remove('active');
    }
    
    function handleMouseUp() {
        setIsDown(false);
        sliderRef.current.classList.remove('active');
    }
    
    function handleMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
        console.log(walk);
    }
    
    
    function handleButtonClick() {
        sliderRef.current.scrollLeft += 350;
    }

    return(
        <section id="desarrollo-mapa" className="pb-100 pt-100">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="d-none d-md-block">HACEMOS TU MAPA</h1>
                        <h2 className="mb-4 d-none d-md-block">DE LA JUNTA DIGITAL</h2>
                        <h3 className="fc-blanco d-block d-md-none">Hacemos tu mapa de la jungla digital</h3>
                        <h4 className="fc-yellow ff-circularBold mb-3">¡MANOS A LA OBRA!</h4>
                        <p className="d-block d-md-none">Nuestra manada está compuesta por varios profesionales.</p>
                        <h5 className="d-none d-md-block">En esta manada contamos con un equipazo de nativos digitales, que conocen esta jungla como la palma de su mano para que nadie se quede en el camino.</h5>
                    </div>
                </div>
            </div>
            <ul ref={sliderRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                <div className="slider d-flex justify-content-around">
                    <span></span>
                    <li className="d-flex position-relative">
                        <img className="img-fluid" src={circulo} alt="" />

                        </li>
                    
                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">Brief</h3>
                            <img src={brief} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Definimos juntos de manera estratégica el alcance del proyecto.</h4>   
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Definimos juntos de manera estratégica el alcance del proyecto.</h5>
                    </li>
                    <li className="d-flex position-relative" ><img className="img-fluid angle-right" src={angleRight} alt="" onClick={handleButtonClick} /></li>

                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">UX</h3>
                            <img src={img01} className="img-number" />
                            <img src={imgUx} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Realizamos un mapa del sitio web y app de manera estratégica.</h4>
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Realizamos un mapa del sitio web y app de manera estratégica.</h5>
                    </li>
                    <li className="d-flex position-relative"><img className="img-fluid angle-right" src={angleRight} alt="" onClick={handleButtonClick} /></li>

                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">UI</h3>
                            <img src={img02} className="img-number" />
                            <img src={imgUi} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Diseñamos las interfaces visuales para guiar al usuario.</h4>
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Diseñamos las interfaces visuales para guiar al usuario.</h5>
                    </li>
                    <li className="d-flex position-relative"><img className="img-fluid angle-right" src={angleRight} alt="" onClick={handleButtonClick} /></li>

                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">Programación</h3>
                            <img src={img03} className="img-number" />
                            <img src={imgProgramacion} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Desarrollamos las funciones internas de la web / app.</h4>
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Desarrollamos las funciones internas de la web / app.</h5>
                    </li>
                    <li className="d-flex position-relative"><img className="img-fluid angle-right" src={angleRight} alt="" onClick={handleButtonClick} /></li>
                    
                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">Test</h3>
                            <img src={img04} className="img-number" />
                            <img src={imgTest} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Hacemos pruebas antes de lanzar tu Sitio y App oficialmente.</h4>
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Hacemos pruebas antes de lanzar tu Sitio y App oficialmente.</h5>
                    </li>
                    <li className="d-flex position-relative"><img className="img-fluid angle-right" src={angleRight} alt="" onClick={handleButtonClick} /></li>

                    <li className="box">
                        <div className="d-flex flex-column align-items-center justify-content-between py-5">
                            <h3 className="fc-darkBlue-01 text-center">Final</h3>
                            <img src={img05} className="img-number" />
                            <img src={imgFinal} className="img-front" width="80%" />
                            <h4 className="fc-darkBlue-01"><img src={arrowForm} alt="" /> Terminamos nuestra labor cuando empiezas a ver tus objetivos realizados.</h4>
                        </div>
                        <h5 className="text-white position-absolute d-sm-block d-md-none mobile-text" > Terminamos nuestra labor cuando empiezas a ver tus objetivos realizados.</h5>
                    </li>
                    <li className="d-flex position-relative"><img className="img-fluid" src={circuloFin} alt="" /></li>
                </div>
            </ul>
        </section>

    )
}