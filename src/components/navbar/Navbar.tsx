import { useState } from 'react';
import "./Navbar.scss"
import xoyWhite from "../../assets/xoyTicketWhite.png"
import ham from "assets/ham.svg"
import { Searchbar } from "../../components/searchbar"
import { NavbarResponsive } from "./responsive"
import { useAppDispatch } from '../../hooks/hooks';
import { startLogout } from '../../store/auth/thunks';
export const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    
    return (

        <>
            {
                isOpen
                    ? <NavbarResponsive setIsOpen={setIsOpen} />
                    :

                    <div className='container'>
                        <div className="container__items">
                            <div className="container__items__item--logo">
                                <img src={xoyWhite} alt="Logotipo de la empresa XoyTicket" />

                            </div>
                            <div onClick={()=>{
                                dispatch(startLogout())
                            }}
                                style={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                cursor: "pointer",
                            }}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <p>Cerrar sesión</p>
                            </div>

                        </div>
                    </div>

            }
        </>


    )
}
