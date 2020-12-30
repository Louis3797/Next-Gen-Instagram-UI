import React from 'react';
import "../Css/NavBar.css"
import { IoSearchSharp , IoHome, IoBagHandle, IoFilm, IoPersonCircle } from "react-icons/io5";
import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return(
        <div className="navbar-container">
            <NavLink to="/" >
        
                <IoHome className="navbar-icons"/>
            </NavLink>
            <NavLink to="/search">
                <IoSearchSharp className="navbar-icons"/>
            </NavLink>
            <NavLink to="/reels">
                <IoFilm className="navbar-icons"/>
            </NavLink>
            <NavLink to="/shopping">
                <IoBagHandle className="navbar-icons"/>
            </NavLink>
            <NavLink to="/profile">
                <IoPersonCircle className="navbar-icons"/>
            </NavLink>
        </div>
    )
}