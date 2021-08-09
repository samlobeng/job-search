import React from 'react'
import "./header.css"
import headerImage from "../../assets/headerimage.jpeg"

export default function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-lg">Job Search</span>
            </div>
            <img className="header-image" src={headerImage} alt="" srcset="" />
        </div>
    )
}