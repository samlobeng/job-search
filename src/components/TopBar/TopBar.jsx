import React from 'react'
import "./topbar.css"
import topimage from "../../assets/topimage.jpeg"
export default function TopNavBar() {
    return (
        <div className = "top">
            <div className="top-left">
            <i className="top-icon fab fa-facebook-square"></i>
            <i className="top-icon fab fa-twitter-square"></i>
            <i className="top-icon fab fa-instagram-square"></i>
            <i className="top-icon fab fa-pinterest-square"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className = "top-list-item">HOME</li>
                    <li className = "top-list-item">ABOUT</li>
                    <li className = "top-list-item">CONTACT</li>
                    <input type="text" name="" id="" />
                    <button type="submit">Search</button>
                </ul>
            </div>
            <div className="top-right">
                <img className = "top-image" src={topimage} alt="" srcset="" />
                <i className="fas fa-search search-icon"></i>
            </div>
        </div>
    )
}
