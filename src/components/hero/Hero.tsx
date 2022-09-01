import "./Hero.scss"
import banner from "../../assets/banner.png"
export const Hero = () => {
    return (
        <section className="hero">
            <img src={banner} alt="" />
            <button className="buttonHero">
                Comprar
            </button>
        </section>
    )
}
