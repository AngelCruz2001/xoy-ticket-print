
interface CellProps {
    text?: string | number;
    icon?: string;
    clickFunction?: () => void;
}

export const Cell = ({ text, icon, clickFunction }: CellProps) => {
    return (
        <div className='cell' onClick={clickFunction}>
            <p>
                {text && text}
            </p>

            {
                icon && <i className={icon}></i>
            }


        </div>
    )
}
