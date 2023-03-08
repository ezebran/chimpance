import bgPosicionamiento from './../../../assets/img/bg-posicionamiento.png'
import laptopImage from './../../../assets/img/mock-laptop.svg'
import './SectionThree__styles.css'
import { WistiaProvider, WistiaPlayer } from '@wistia/react-embeds';

export default function SectionThree(){
    return(
        <section id="posicionamiento-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative d-none d-md-block">
                        <img loading="lazy" src={laptopImage} className="img-fluid" />
                        <div className="wistia_embed wistia_async_vsf2thqw1a position-absolute border border-2 border-white style1">
                            <div className="wistia_swatch style2">
                                <img loading="lazy" src="https://fast.wistia.com/embed/medias/vsf2thqw1a/swatch"
                                    className="style3" alt=""
                                    aria-hidden="true" onLoad={() => {document.querySelector('.wistia_swatch.style2').style.opacity=1}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 position-relative d-block d-md-none p-0">
                        <WistiaProvider>
                            <WistiaPlayer hashedId="5n6rk1zqoa" />
                        </WistiaProvider>
                        <div className="wistia_responsive_padding">
                            <div className="wistia_responsive_wrapper">
                                <div className="wistia_embed wistia_async_5n6rk1zqoa videoFoam=true style4">
                                    <div className="wistia_swatch style5">
                                        <img loading="lazy" src="https://fast.wistia.com/embed/medias/5n6rk1zqoa/swatch"
                                            className="style6"
                                            alt="" aria-hidden="true" onLoad={() => {document.querySelector('.wistia_swatch.style5').style.opacity=1}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={bgPosicionamiento} className="img img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}