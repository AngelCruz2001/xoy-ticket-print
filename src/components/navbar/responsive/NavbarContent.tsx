import React from 'react'
import './NavbarContent.scss'
import logo from '../../../assets/xoyTicketColor.png'
import close from '../../../assets/icons/close.svg'
import x from '../../../assets/icons/x.svg'
type Props = {
    setIsOpen: (isOpen: boolean) => void
}

export const NavbarContent = ({ setIsOpen }: Props) => {
    return (
        <div className='content'>
            <div className='content__icons'>
                <div className='content__icons__icon--logo'

                >
                    <img src={logo} alt="" />
                </div>
                <div className='content__icons__icon'
                    onClick={() => setIsOpen(false)}
                >
                    <img src={close} alt="" />
                </div>


            </div>
            <div className='content__items'>
                <div className='content__items__item' >
                    <p>Inicio</p>
                </div>
                <div className='content__items__item'>
                    <p>Eventos</p>
                </div>
                <div className='content__items__item'>
                    <p>Terminos y Condiciones</p>
                </div>

            </div>



        </div>
    )
}
