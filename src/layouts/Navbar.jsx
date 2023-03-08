import Lottie from "lottie-react";
import bgJunglaDesk from './../assets/img/lotties/bgJunglaDesk.json'
import bgJunglaMobile from './../assets/img/lotties/bgJunglaMobile.json'
import './Navbar.styles.css'
import chimpaLogo from './../assets/img/chimpance-logo.svg'
import isoImg from './../assets/img/iso.svg'
import React from 'react'
import flagArgMobile from './../assets/img/flag-arg-mobile.svg'
import flagUsa from './../assets/img/flag-usa-mobile.svg'

export default function Navbar({isMobile}){

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      function handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <>
            <nav id="navbar" className={`navbar custom-nav ${isScrolled ? 'bg-scroll-navbar' : ''}`}>
                <div className="container position-relative">
                    <div className="d-none d-md-block">
                        <a className="navbar-brand" href="index.php">
                            <img loading="lazy" src={chimpaLogo} alt="Chimpance" />
                        </a>
                    </div>
                    <div className="col-12 d-flex justify-content-center d-md-none">
                        <a className="navbar-brand" href="index.php">
                            <img loading="lazy"  src={isoImg} alt="Chimpance" />
                        </a>
                    </div>
                    <div className="d-flex align-items-center">
                        <a id="contact_nav" href="https://web.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web" target="_blank"  className="btn btn-white d-none d-md-block">Contactanos</a>
                        <div className="d-none d-md-block">
                            
                            <div className={`hamburger ${menuIsOpen ? 'checked' : ''}`} id="hamburger" onClick={()=>setMenuIsOpen(!menuIsOpen)}><div></div></div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="menu-wrap nav-mobile">
                <div className={`menu ${menuIsOpen ? 'checked' : ''}`} id="menu">
                    <div>
                        {!isMobile ?
                        (<div id="bg-video" className="d-none d-md-block" style={{position: 'absolute'}}>
                            <Lottie id="nav-deskLottie" autoplay={true}  loop={true}  mode={"normal"} animationData={bgJunglaDesk} background="transparent" className="bg-lottie-jungle" />
                        </div>):
                        (<div id="bg-video" className="d-block d-md-none" style={{position: 'absolute'}}>
                            <Lottie autoplay={true}  loop={true}  mode={"normal"} animationData={bgJunglaMobile} background="transparent" className="bg-lottie-jungle" />
                        </div>)
                        }
                        <div>
                            <ul className="p-0">
                                <li><a className="ff-circularBold" href="#form" id="link">Contacto</a></li>
                                <li className="nav-item dropdown d-block d-md-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Español <img src={flagArgMobile} />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item d-flex justify-content-between" href="#">
                                                Ingles <img src={flagUsa} />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}