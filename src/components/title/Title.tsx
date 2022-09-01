import "./Title.scss";
interface TitleProps {
    title: string;
    icon: string;
}

export const Title = ({ title, icon }: TitleProps) => {
    return (
        <div className="title">
            <img src={icon} alt="Icono" />
            <h3>
                {title.toUpperCase()}
            </h3>
        </div>
    )
}
