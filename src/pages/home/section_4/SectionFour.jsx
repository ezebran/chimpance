import Lottie from "lottie-react";
import mono from '../../../assets/img/lotties/mono.json'
import chatDesk from '../../../assets/img/lotties/chatDesk.json'
import chatMobile from '../../../assets/img/lotties/chatMobile.json'

export default function SectionFour(){
   return(
    <section id="tu-marca">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-5 d-none d-md-block">
                    <h2>TU MARCA ES ÚNICA</h2>
                    <h1 className="fc-lightBlue">TU SITIO WEB TAMBIEN</h1>
                </div>
                <div className="col-12 text-center mb-5 d-block d-md-none">
                    <h3>TU MARCA ES ÚNICA</h3>
                    <h2 className="fc-lightBlue">TU SITIO WEB TAMBIEN</h2>
                </div>
                <div className="col-6 mb-5 d-none d-md-block">
                    <Lottie loop={true}  mode={"normal"} autoplay={true} animationData={mono} />
                </div>
                <div className="col-6 mb-5 d-none d-md-block">
                    <Lottie loop={true}  mode={"normal"} autoplay={true} animationData={chatDesk} />
                </div>
                <div className="col-12 mb-5 d-block d-md-none">
                    <Lottie loop={true}  mode={"normal"} autoplay={true} animationData={chatMobile} />
                </div>
                <div className="col-12 text-center">
                    <h3 className="mb-4">Te hacemos un hogar en la jungla digital</h3>
                    <div className="d-block d-md-none">
                        <a className="btn btn-blue-outline-white" href="https://api.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web">Hablemos</a>
                    </div>
                    <div className="d-none d-md-block">
                        <a className="btn btn-blue-outline-white" target="_blank" href="https://web.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web">Hablemos</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   ) 
}