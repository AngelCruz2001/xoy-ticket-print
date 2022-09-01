import React from 'react'
import './Brands.scss'
import brand1 from '../../assets/brands/brand1.png'
import brand2 from '../../assets/brands/brand2.png'
import brand3 from '../../assets/brands/brand3.png'
import brand4 from '../../assets/brands/brand4.png'
import brand5 from '../../assets/brands/brand5.png'
import brand6 from '../../assets/brands/brand6.png'
import xBrands from '../../assets/icons/xBrands.svg'
import xBrandsDesk from '../../assets/icons/xBrandsDesk.svg'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
export const Brands = () => {

    const { width } = useWindowDimensions();
    return (
        <div className="brandsContainer">
            <div className="brandsContainer__brand">
                <img src={brand1} alt="brand1" />
            </div>
            <div className="brandsContainer__brand">
                <img src={brand2} alt="brand2" />
            </div>
            <div className="brandsContainer__brand">
                <img src={brand3} alt="brand3" />
            </div>
            <div className="brandsContainer__brand">
                <img src={brand6} alt="brand4" />
            </div>
            <div className="brandsContainer__brand">
                <img src={brand4} alt="brand5" />
            </div>
            <div className="brandsContainer__brand">
                <img src={brand5} alt="brand6" />
            </div>

            <img src={ width < 900 ? xBrands : xBrandsDesk} alt="" className='x' />

            {
                width > 900 &&
                <img src={xBrandsDesk} alt="" className='x2' />
            }
        </div>
    )
}
