import React from 'react'
import './NavbarResponsive.scss'
import { NavbarContent } from './NavbarContent'
type Props = {
    setIsOpen: (isOpen: boolean) => void
}
export const NavbarResponsive = ({ setIsOpen }: Props) => {
    return (
        <div className='navbar'>
            <NavbarContent setIsOpen={setIsOpen} />
        </div>
    )
}
