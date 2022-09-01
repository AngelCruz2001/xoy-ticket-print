import "./Footer.scss";
import xoyColor from "../../assets/xoyTicketColor.png";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import x from "../../assets/icons/xFooterMobile.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
export const Footer = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/pdf")
    }

    const { width } = useWindowDimensions();

    return (
        <>
            <div className="footer">

                <div className="leftside">
                    <div className="imgContainer">
                        <img src={xoyColor} alt="" />
                    </div>

                    <div className="info">
                        <h2>Contacto</h2>
                        <p>Av. Providencia 2610, Col. Providencia,
                            44630 Guadalajara, Jalisco</p>
                        <span>hola@xoyticket.com</span>
                    </div>
                </div>

                <div className="rightside">

                    <div className="links">
                        <h3>Inicio</h3>
                        <h3>Iniciar sesión</h3>
                        <h3>Terminos y condiciones</h3>
                        <h3>Aviso de privacidad</h3>
                    </div>
                    <div className="social">
                        <p>Écha un vistazo a nuestras redes</p>
                        <div className="social__icons">
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>

                </div>



                <div className="copyright">
                    <p onClick={handleClick} className="copyrightText">© Copyright 2022 Xoyticket <br />
                        Todos los Derechos Reservados</p>

                </div>


                <img src={x} alt="" className="xFooter" />
            </div>
        </>
    )
}
