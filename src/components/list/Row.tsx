import React from 'react'
import "./List.scss"

interface Props {
    children: React.ReactNode,
    headers?: boolean
    extra?: boolean
}


export const Row = ({ children, headers, extra }: Props) => {
    return (
        <div className={`row ${headers ? 'headers' : ''} ${extra ? 'extra' : ''}`}>
            {children}
        </div>
    )
}
