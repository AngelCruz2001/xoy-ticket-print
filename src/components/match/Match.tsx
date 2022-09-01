import { Description } from "./Description"
import match1 from "../../assets/matches/match1.png"
import "./Match.scss"
export const Match = () => {
    return (
        <div className="item">
            <div className="imgContainer">
                <img src={match1} alt="" />
            </div>

            <Description />

            <button>Comprar</button>

        </div>
    )
}
