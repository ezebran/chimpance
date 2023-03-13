import chimpaLogo from './../assets/img/chimpance-logo.svg'
import iconLocation from './../assets/img/icon-location-pin.svg'

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img loading="lazy" width="179.658" height="32.285" src={chimpaLogo} alt="Chimpance" />
                    </div>
                    <div className="col-12 mt-2">
                        <div className="d-flex flex-row gap-2 justify-content-center align-items-center">
                            <img alt="flag-argentina" src={iconLocation} width="22px" height="22px" />
                            <h5 className="text-center py-2 fc-lightBlue mb-0">Velez Sarsfierld 576, Córdoba, Argentina</h5>
                        </div>
                        <ul className="p-0 d-flex justify-content-center">
                            <li>
                                <a href="https://www.linkedin.com/company/chimpancedigital/" target="_blank" className="ms-2 me-2">
                                    <svg  width="16.63" height="15.896" viewBox="0 0 16.63 15.896">
                                        <path id="linkedin" d="M3.775,15.9V5.171H.21V15.9ZM1.993,3.706A1.859,1.859,0,1,0,2.017,0,1.858,1.858,0,1,0,1.97,3.706h.023ZM5.748,15.9H9.313V9.907a2.44,2.44,0,0,1,.117-.87,1.951,1.951,0,0,1,1.829-1.3c1.29,0,1.806.983,1.806,2.425V15.9H16.63V9.747c0-3.295-1.759-4.827-4.1-4.827A3.55,3.55,0,0,0,9.289,6.726h.024V5.171H5.749c.047,1.006,0,10.725,0,10.725Z" fill="#36a9e1"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/chimpancedigital#" target="_blank" className="ms-2 me-2">
                                    <svg width="7.067" height="15.39" viewBox="0 0 7.067 15.39">
                                        <path id="Facebook" d="M1252.8,1144.9h-2.131v7.689h-3.158V1144.9h-1.5v-2.718h1.5v-1.758a2.983,2.983,0,0,1,3.188-3.226l2.341.009v2.638h-1.7a.647.647,0,0,0-.67.74v1.6h2.406Z" transform="translate(-1246.01 -1137.2)" fill="#36a9e1"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/chimpancedigital/?hl=es" target="_blank" className="ms-2 me-2">
                                    <svg  width="15.207" height="15.391" viewBox="0 0 15.207 15.391">
                                        <path id="instagram" d="M12.268,15.39H2.939A2.96,2.96,0,0,1,0,12.417V2.974A2.96,2.96,0,0,1,2.939,0h9.328a2.96,2.96,0,0,1,2.94,2.974v9.443A2.96,2.96,0,0,1,12.268,15.39ZM1.48,6.116v6.3A1.467,1.467,0,0,0,2.937,13.89h9.329a1.467,1.467,0,0,0,1.457-1.473v-6.3H11.453A4.168,4.168,0,1,1,3.445,7.695,4.215,4.215,0,0,1,3.75,6.116ZM7.6,4.986A2.681,2.681,0,0,0,5.433,6.115a2.723,2.723,0,0,0,.278,3.494A2.643,2.643,0,0,0,7.6,10.4a2.709,2.709,0,0,0,0-5.418Zm5.843-3.213h-.336l-2.243.007.009,2.609,2.569-.008V1.773Z" transform="translate(0)" fill="#36a9e1"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
} 