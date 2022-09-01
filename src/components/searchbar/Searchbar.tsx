import React from 'react'
import search from "../../assets/search.svg"
import './Searchbar.scss'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';



export const Searchbar = () => {

    const { width } = useWindowDimensions();

    return (
        <div className={`searchbarContainer ${width > 900 ? '' : 'background'}`}>
            <div className='searchbar'>
                <img src={search} className="searchbar__icon" alt="search-icon" />
                <input
                    type="text"
                    placeholder="Busca partidos, eventos, equipos"
                    className="searchbar__input"
                />
            </div>
        </div>
    )
}
